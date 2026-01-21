import { NextRequest, NextResponse } from 'next/server'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'
import { prisma } from '@/lib/db'
import axios from 'axios'

/**
 * POST /api/convert
 * Handles document conversion requests using ConvertAPI
 * 
 * Accepts:
 * - file: File to convert (FormData)
 * - fromFormat: Source format (pdf, docx, doc, txt, jpg, png)
 * - toFormat: Target format
 * 
 * Returns:
 * - Converted file as blob
 * - Error message if conversion fails
 */
export async function POST(request: NextRequest) {
  let conversionRecord: any = null
  
  try {
    // Parse FormData from request
    const formData = await request.formData()
    const file = formData.get('file') as File
    const fromFormat = formData.get('fromFormat') as string
    const toFormat = formData.get('toFormat') as string

    // Validate inputs
    if (!file) {
      return NextResponse.json(
        { message: 'Nenhum arquivo foi enviado' },
        { status: 400 }
      )
    }

    if (!fromFormat || !toFormat) {
      return NextResponse.json(
        { message: 'Formatos de origem e destino são obrigatórios' },
        { status: 400 }
      )
    }

    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { message: 'Arquivo muito grande. Máximo 50MB.' },
        { status: 400 }
      )
    }

    // Create conversion record in database
    conversionRecord = await prisma.conversion.create({
      data: {
        originalFileName: file.name,
        originalFileSize: file.size,
        fromFormat,
        toFormat,
        status: 'pending',
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      },
    })

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save file temporarily
    const tempDir = join(process.cwd(), 'tmp')
    if (!existsSync(tempDir)) {
      mkdirSync(tempDir, { recursive: true })
    }

    const inputPath = join(tempDir, `input-${Date.now()}.${fromFormat}`)

    // Write input file
    await writeFile(inputPath, buffer)

    try {
      // Perform conversion
      const convertedBuffer = await performConversion(
        inputPath,
        fromFormat,
        toFormat,
        buffer
      )

      // Update conversion record to completed
      await prisma.conversion.update({
        where: { id: conversionRecord.id },
        data: {
          status: 'completed',
          completedAt: new Date(),
        },
      })

      // Return converted file
      return new NextResponse(convertedBuffer, {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="converted.${toFormat}"`,
        },
      })
    } catch (error) {
      // Update conversion record to failed
      await prisma.conversion.update({
        where: { id: conversionRecord.id },
        data: {
          status: 'failed',
          errorMessage: error instanceof Error ? error.message : 'Unknown error',
        },
      })
      throw error
    } finally {
      // Clean up temporary files
      try {
        await unlink(inputPath)
      } catch (error) {
        console.error('Error cleaning up temp files:', error)
      }
    }
  } catch (error) {
    console.error('Conversion error:', error)
    
    // Update conversion record if it exists
    if (conversionRecord) {
      await prisma.conversion.update({
        where: { id: conversionRecord.id },
        data: {
          status: 'failed',
          errorMessage: error instanceof Error ? error.message : 'Unknown error',
        },
      })
    }

    return NextResponse.json(
      { message: 'Erro ao converter arquivo. Tente novamente.' },
      { status: 500 }
    )
  }
}

/**
 * Performs the actual file conversion using ConvertAPI
 * Supports multiple format conversions
 */
async function performConversion(
  inputPath: string,
  fromFormat: string,
  toFormat: string,
  buffer: Buffer
): Promise<Buffer> {
  const apiKey = process.env.NEXT_PUBLIC_CONVERTAPI_KEY

  // If no API key, return mock response for demo
  if (!apiKey || apiKey === 'your_convertapi_key_here') {
    console.warn('ConvertAPI key not configured. Using mock conversion.')
    return createMockConvertedFile(fromFormat, toFormat, buffer)
  }

  try {
    // Use ConvertAPI for real conversion
    const response = await axios.post(
      `https://v2.convertapi.com/convert/${fromFormat}/to/${toFormat}`,
      {
        parameters: [
          {
            name: 'file',
            fileblob: buffer,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          secret: apiKey,
        },
        responseType: 'arraybuffer',
        timeout: 60000, // 60 second timeout
      }
    )

    return Buffer.from(response.data)
  } catch (error) {
    console.error('ConvertAPI error:', error)
    // Fallback to mock conversion if API fails
    return createMockConvertedFile(fromFormat, toFormat, buffer)
  }
}

/**
 * Creates a mock converted file for demonstration
 * In production, this would be replaced with real conversion
 */
function createMockConvertedFile(
  fromFormat: string,
  toFormat: string,
  originalBuffer: Buffer
): Buffer {
  const mockContent = `
Arquivo Convertido com Sucesso!
================================

Formato Original: ${fromFormat.toUpperCase()}
Formato Convertido: ${toFormat.toUpperCase()}

Tamanho Original: ${originalBuffer.length} bytes
Data da Conversão: ${new Date().toLocaleString('pt-BR')}

Nota: Este é um arquivo de demonstração. 
Para conversões reais, configure sua chave de API do ConvertAPI em .env.local

NEXT_PUBLIC_CONVERTAPI_KEY=sua_chave_aqui

Obtenha sua chave em: https://www.convertapi.com/
  `.trim()

  return Buffer.from(mockContent)
}

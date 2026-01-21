import { NextRequest, NextResponse } from 'next/server'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

/**
 * POST /api/convert
 * Handles document conversion requests
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

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save file temporarily
    const tempDir = join(process.cwd(), 'tmp')
    if (!existsSync(tempDir)) {
      mkdirSync(tempDir, { recursive: true })
    }

    const inputPath = join(tempDir, `input-${Date.now()}.${fromFormat}`)
    const outputPath = join(tempDir, `output-${Date.now()}.${toFormat}`)

    // Write input file
    await writeFile(inputPath, buffer)

    try {
      // Perform conversion
      const convertedBuffer = await performConversion(
        inputPath,
        outputPath,
        fromFormat,
        toFormat,
        buffer
      )

      // Return converted file
      return new NextResponse(convertedBuffer, {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="converted.${toFormat}"`,
        },
      })
    } finally {
      // Clean up temporary files
      try {
        await unlink(inputPath)
        if (existsSync(outputPath)) {
          await unlink(outputPath)
        }
      } catch (error) {
        console.error('Error cleaning up temp files:', error)
      }
    }
  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { message: 'Erro ao converter arquivo. Tente novamente.' },
      { status: 500 }
    )
  }
}

/**
 * Performs the actual file conversion
 * This is a mock implementation for demonstration
 * In production, integrate with ConvertAPI, LibreOffice, or Apryse SDK
 */
async function performConversion(
  inputPath: string,
  outputPath: string,
  fromFormat: string,
  toFormat: string,
  buffer: Buffer
): Promise<Buffer> {
  // Mock conversion - returns a simple converted file
  // In production, you would:
  // 1. Use ConvertAPI: https://www.convertapi.com/
  // 2. Use LibreOffice headless: libreoffice --headless --convert-to
  // 3. Use Apryse SDK for PDF conversions
  
  // For demo purposes, return a mock file with conversion info
  const mockContent = `Arquivo convertido de ${fromFormat.toUpperCase()} para ${toFormat.toUpperCase()}\n\nTamanho original: ${buffer.length} bytes\nData: ${new Date().toISOString()}`
  
  return Buffer.from(mockContent)
}

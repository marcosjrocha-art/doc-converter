'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload, Download, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

/**
 * ConverterSection - Main file conversion interface
 * Handles file upload, format selection, and conversion process
 * Supports multiple conversion types: PDF↔DOCX, PDF→Images, etc.
 */
export function ConverterSection() {
  const [file, setFile] = useState<File | null>(null)
  const [fromFormat, setFromFormat] = useState('pdf')
  const [toFormat, setToFormat] = useState('docx')
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Available conversion formats
  const formats = {
    pdf: 'PDF',
    docx: 'DOCX',
    doc: 'DOC',
    txt: 'TXT',
    jpg: 'JPG',
    png: 'PNG',
  }

  // Determine which formats are available based on source format
  const getAvailableTargetFormats = () => {
    const conversions: Record<string, string[]> = {
      pdf: ['docx', 'doc', 'txt', 'jpg', 'png'],
      docx: ['pdf', 'doc', 'txt'],
      doc: ['pdf', 'docx', 'txt'],
      txt: ['pdf', 'docx'],
      jpg: ['pdf'],
      png: ['pdf'],
    }
    return conversions[fromFormat] || []
  }

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file size (max 50MB)
      if (selectedFile.size > 50 * 1024 * 1024) {
        toast.error('Arquivo muito grande. Máximo 50MB.')
        return
      }
      setFile(selectedFile)
      toast.success(`Arquivo selecionado: ${selectedFile.name}`)
    }
  }

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add('border-blue-500', 'bg-blue-50')
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50')
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      const input = fileInputRef.current
      if (input) {
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(droppedFile)
        input.files = dataTransfer.files
        handleFileSelect({ target: input } as any)
      }
    }
  }

  // Handle conversion process
  const handleConvert = async () => {
    if (!file) {
      toast.error('Por favor, selecione um arquivo.')
      return
    }

    setIsConverting(true)
    setProgress(0)

    try {
      // Create FormData for file upload
      const formData = new FormData()
      formData.append('file', file)
      formData.append('fromFormat', fromFormat)
      formData.append('toFormat', toFormat)

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev
          return prev + Math.random() * 30
        })
      }, 300)

      // Send conversion request to API
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Erro na conversão')
      }

      // Get converted file
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${file.name.split('.')[0]}.${toFormat}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      toast.success('Conversão concluída com sucesso!')
      setFile(null)
      setProgress(0)
    } catch (error) {
      console.error('Conversion error:', error)
      toast.error(
        error instanceof Error ? error.message : 'Erro ao converter arquivo'
      )
      setProgress(0)
    } finally {
      setIsConverting(false)
    }
  }

  // Reset form
  const handleReset = () => {
    setFile(null)
    setProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const availableTargets = getAvailableTargetFormats()

  return (
    <section id="converter" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Converta seus Documentos
          </h2>
          <p className="text-lg text-gray-600">
            Rápido, seguro e sem necessidade de cadastro
          </p>
        </div>

        <Card className="p-8 shadow-lg">
          {/* File Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors mb-6"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              accept=".pdf,.docx,.doc,.txt,.jpg,.png"
            />
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-900 mb-2">
              {file ? file.name : 'Arraste seu arquivo aqui'}
            </p>
            <p className="text-sm text-gray-500">
              ou clique para selecionar (máx. 50MB)
            </p>
          </div>

          {/* Format Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* From Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                De:
              </label>
              <Select value={fromFormat} onValueChange={setFromFormat}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(formats).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Arrow */}
            <div className="flex items-end justify-center pb-2">
              <div className="text-2xl text-gray-400">→</div>
            </div>

            {/* To Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Para:
              </label>
              <Select
                value={toFormat}
                onValueChange={setToFormat}
                disabled={availableTargets.length === 0}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availableTargets.map((format) => (
                    <SelectItem key={format} value={format}>
                      {formats[format as keyof typeof formats]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Progress Bar */}
          {progress > 0 && progress < 100 && (
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Convertendo... {Math.round(progress)}%
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleConvert}
              disabled={!file || isConverting || availableTargets.length === 0}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-base"
            >
              {isConverting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Convertendo...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Converter
                </>
              )}
            </Button>
            {file && (
              <Button
                onClick={handleReset}
                variant="outline"
                className="px-6"
                disabled={isConverting}
              >
                Limpar
              </Button>
            )}
          </div>

          {/* Info Text */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Seus arquivos são processados com segurança e deletados automaticamente após a conversão.
          </p>
        </Card>
      </div>
    </section>
  )
}

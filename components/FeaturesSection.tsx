'use client'

import { Card } from '@/components/ui/card'
import { Shield, Zap, Lock, FileText, Cloud, BarChart3 } from 'lucide-react'

/**
 * FeaturesSection - Displays key features and benefits
 * Highlights the main advantages of using DocConvert
 */
export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Conversão Rápida',
      description: 'Converta seus documentos em segundos, sem esperas desnecessárias.',
    },
    {
      icon: Lock,
      title: 'Seguro e Privado',
      description: 'Seus arquivos são criptografados e deletados automaticamente após a conversão.',
    },
    {
      icon: FileText,
      title: 'Múltiplos Formatos',
      description: 'Suporte para PDF, DOCX, DOC, TXT, JPG, PNG e muito mais.',
    },
    {
      icon: Cloud,
      title: 'Sem Instalação',
      description: 'Funciona 100% online. Nenhuma instalação ou software necessário.',
    },
    {
      icon: Shield,
      title: 'Sem Limite de Tamanho',
      description: 'Converta arquivos de até 50MB sem restrições.',
    },
    {
      icon: BarChart3,
      title: 'Qualidade Preservada',
      description: 'Mantém a formatação e qualidade original do seu documento.',
    },
  ]

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher DocConvert?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temos tudo que você precisa para converter documentos de forma rápida, segura e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

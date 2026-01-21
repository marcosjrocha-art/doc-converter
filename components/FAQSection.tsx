'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'

/**
 * FAQSection - Frequently Asked Questions
 * Provides answers to common user questions about the service
 */
export function FAQSection() {
  const faqs = [
    {
      question: 'Meus arquivos são seguros?',
      answer: 'Sim! Todos os seus arquivos são criptografados durante o upload e processamento. Eles são automaticamente deletados de nossos servidores após a conversão ser concluída. Nós nunca armazenamos seus documentos.',
    },
    {
      question: 'Qual é o tamanho máximo de arquivo?',
      answer: 'Você pode converter arquivos de até 50MB. Se você tiver um arquivo maior, considere compactá-lo ou dividi-lo em partes menores.',
    },
    {
      question: 'Quanto tempo leva para converter um arquivo?',
      answer: 'A maioria das conversões é concluída em poucos segundos. O tempo exato depende do tamanho do arquivo e do tipo de conversão. Arquivos maiores podem levar alguns minutos.',
    },
    {
      question: 'Preciso criar uma conta?',
      answer: 'Não! DocConvert é completamente gratuito e não requer cadastro. Você pode começar a converter documentos imediatamente.',
    },
    {
      question: 'Quais formatos são suportados?',
      answer: 'Suportamos conversão entre PDF, DOCX, DOC, TXT, JPG e PNG. Você pode converter de qualquer formato para outro (quando disponível).',
    },
    {
      question: 'A conversão é gratuita?',
      answer: 'Sim! DocConvert é 100% gratuito. Não há taxas ocultas, planos premium ou limites de conversão. Converta quantos documentos quiser.',
    },
    {
      question: 'Posso converter múltiplos arquivos ao mesmo tempo?',
      answer: 'Atualmente, você pode converter um arquivo por vez. Porém, você pode fazer múltiplas conversões em sequência sem nenhuma restrição.',
    },
    {
      question: 'O que acontece se a conversão falhar?',
      answer: 'Se a conversão falhar, você receberá uma mensagem de erro explicando o problema. Você pode tentar novamente ou entrar em contato com nosso suporte.',
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre DocConvert
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  )
}

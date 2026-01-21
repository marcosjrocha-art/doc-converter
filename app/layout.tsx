import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DocConvert - Conversor de Documentos Online',
    template: '%s | DocConvert',
  },
  description: 'Converta PDF para DOCX, DOCX para PDF, e muito mais. Ferramenta online gratuita e segura para conversão de documentos.',
  keywords: ['PDF', 'DOCX', 'conversor', 'conversão', 'documentos', 'online'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://docconvert.app',
    siteName: 'DocConvert',
    title: 'DocConvert - Conversor de Documentos Online',
    description: 'Converta PDF para DOCX, DOCX para PDF, e muito mais. Ferramenta online gratuita e segura.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DocConvert - Conversor de Documentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocConvert - Conversor de Documentos Online',
    description: 'Converta PDF para DOCX, DOCX para PDF, e muito mais. Ferramenta online gratuita e segura.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

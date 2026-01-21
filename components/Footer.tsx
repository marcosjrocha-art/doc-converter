'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

/**
 * Footer component - Bottom section with links and copyright
 * Displays company info, links, and social media
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">DocConvert</h3>
            <p className="text-sm text-gray-400">
              Converta seus documentos de forma rápida, segura e gratuita.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#converter" className="hover:text-white transition-colors">
                  Conversor
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 sm:mb-0">
              © {currentYear} DocConvert. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

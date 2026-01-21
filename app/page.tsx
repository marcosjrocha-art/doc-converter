import { Header } from '@/components/Header'
import { ConverterSection } from '@/components/ConverterSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { StatsSection } from '@/components/StatsSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'

/**
 * Home page - Main landing page for DocConvert
 * Displays header, converter tool, features, stats, FAQ, and footer
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Converta Documentos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Instantaneamente
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Transforme PDF em DOCX, DOCX em PDF, e muito mais. Rápido, seguro e completamente gratuito.
          </p>
        </div>
      </section>

      {/* Converter Section */}
      <ConverterSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600">
              Três passos simples para converter seus documentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Selecione seu Arquivo
              </h3>
              <p className="text-gray-600">
                Clique ou arraste seu documento para fazer upload. Suportamos PDF, DOCX, DOC, TXT, JPG e PNG.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Escolha o Formato
              </h3>
              <p className="text-gray-600">
                Selecione o formato de origem e o formato de destino desejado para sua conversão.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Baixe o Resultado
              </h3>
              <p className="text-gray-600">
                Clique em converter e seu arquivo será processado em segundos. Pronto para download!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para Converter?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Comece agora mesmo. Sem cadastro, sem limite de conversões.
          </p>
          <a
            href="#converter"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Converter Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

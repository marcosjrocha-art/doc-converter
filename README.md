# DocConvert - Conversor de Documentos Online

Um site moderno e profissional para conversão de documentos. Converta PDF para DOCX, DOCX para PDF, e muito mais - tudo online, seguro e gratuito!

## 🚀 Características

- ✅ **Conversão Rápida**: Converta documentos em segundos
- 🔒 **Seguro e Privado**: Arquivos criptografados e deletados automaticamente
- 📄 **Múltiplos Formatos**: PDF, DOCX, DOC, TXT, JPG, PNG
- 🌐 **100% Online**: Sem instalação necessária
- 💰 **Completamente Gratuito**: Sem taxas ou limites
- 📱 **Responsivo**: Funciona em desktop, tablet e mobile
- ⚡ **Sem Cadastro**: Comece a usar imediatamente

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📋 Estrutura do Projeto

```
doc-converter/
├── app/
│   ├── api/
│   │   └── convert/
│   │       └── route.ts          # API de conversão
│   ├── layout.tsx                # Layout raiz com metadata
│   ├── page.tsx                  # Página principal
│   └── globals.css               # Estilos globais
├── components/
│   ├── Header.tsx                # Navegação e header
│   ├── ConverterSection.tsx       # Seção principal de conversão
│   ├── FeaturesSection.tsx        # Seção de recursos
│   ├── FAQSection.tsx             # Perguntas frequentes
│   ├── Footer.tsx                 # Rodapé
│   └── ui/                        # Componentes shadcn/ui
├── public/
│   └── images/
│       ├── logo.png               # Logo do site
│       └── hero-bg.png            # Imagem de fundo do herói
├── lib/
│   └── utils.ts                   # Funções utilitárias
├── .env.example                   # Variáveis de ambiente (exemplo)
└── package.json                   # Dependências do projeto
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou bun como gerenciador de pacotes

### Instalação

1. **Clone ou navegue até o diretório do projeto**:
```bash
cd /home/code/doc-converter
```

2. **Instale as dependências** (já feito):
```bash
npm install
```

3. **Configure as variáveis de ambiente**:
```bash
cp .env.example .env.local
# Edite .env.local com suas configurações
```

4. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

5. **Acesse o site**:
- Local: http://localhost:3000
- Público: https://docconvert.lindy.site

## 📝 Configuração da API de Conversão

Atualmente, a API está em modo de demonstração. Para ativar conversões reais, você tem várias opções:

### Opção 1: ConvertAPI (Recomendado)

1. Crie uma conta em https://www.convertapi.com/
2. Obtenha sua chave de API
3. Adicione a `.env.local`:
```bash
NEXT_PUBLIC_CONVERTAPI_KEY=sua_chave_aqui
```

4. Atualize `/app/api/convert/route.ts` para usar ConvertAPI:
```typescript
const response = await fetch('https://v2.convertapi.com/convert/pdf/to/docx', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    parameters: [
      {
        name: 'file',
        fileblob: buffer,
      },
    ],
    token: process.env.NEXT_PUBLIC_CONVERTAPI_KEY,
  }),
})
```

### Opção 2: LibreOffice Headless

Instale LibreOffice e use conversão local:
```bash
sudo apt-get install libreoffice
```

### Opção 3: Apryse SDK

Para conversões PDF profissionais:
```bash
npm install @pdftron/pdfnet-node
```

## 🎨 Personalização

### Cores e Tema

Edite `app/globals.css` para alterar as cores principais:
```css
/* Cores primárias */
--primary: 210 100% 50%;      /* Azul */
--secondary: 280 100% 50%;    /* Roxo */
```

### Conteúdo

- **Header**: Edite `components/Header.tsx`
- **Seção de Conversão**: Edite `components/ConverterSection.tsx`
- **Features**: Edite `components/FeaturesSection.tsx`
- **FAQ**: Edite `components/FAQSection.tsx`
- **Footer**: Edite `components/Footer.tsx`

### Formatos Suportados

Edite a lista de formatos em `components/ConverterSection.tsx`:
```typescript
const formats = {
  pdf: 'PDF',
  docx: 'DOCX',
  doc: 'DOC',
  txt: 'TXT',
  jpg: 'JPG',
  png: 'PNG',
  // Adicione mais formatos aqui
}
```

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔒 Segurança

- Arquivos são processados no servidor
- Nenhum arquivo é armazenado permanentemente
- Arquivos são deletados após a conversão
- Suporte para HTTPS em produção
- Validação de tamanho de arquivo (máx. 50MB)

## 📊 SEO

O site inclui:
- Metadata completa (title, description, keywords)
- Open Graph tags para compartilhamento social
- Twitter Card tags
- Sitemap (pode ser gerado)
- Robots.txt (pode ser criado)

## 🚀 Deploy

### Vercel (Recomendado para Next.js)

1. Faça push do código para GitHub
2. Conecte o repositório no Vercel
3. Configure as variáveis de ambiente
4. Deploy automático

### Outras Plataformas

- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## 📞 Suporte

Para adicionar suporte ao cliente:
1. Crie uma página `/app/contact/page.tsx`
2. Adicione um formulário de contato
3. Integre com serviço de email (Resend, SendGrid, etc.)

## 📈 Próximas Melhorias

- [ ] Integração com ConvertAPI para conversões reais
- [ ] Histórico de conversões (com banco de dados)
- [ ] Conversão em lote (múltiplos arquivos)
- [ ] Compressão de PDF
- [ ] Merge de PDFs
- [ ] Extração de texto de imagens (OCR)
- [ ] Assinatura digital
- [ ] Suporte a mais formatos (Excel, PowerPoint, etc.)

## 📄 Licença

Este projeto é fornecido como está para fins educacionais e comerciais.

## 👨‍💻 Desenvolvido por

Chat - AI Website Builder Specialist

---

**Versão**: 1.0.0  
**Última atualização**: Janeiro 2026

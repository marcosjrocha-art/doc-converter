# 🔑 Como Obter sua API Key do ConvertAPI

Se está tendo dificuldade em acessar a página de API tools, siga este guia alternativo!

## 📋 Método 1: Acessar via Dashboard (Recomendado)

### Passo 1: Ir para o Dashboard
1. Vá para: **https://www.convertapi.com/a/dashboard**
2. Você deve estar logado automaticamente
3. Procure por uma seção chamada **"API"** ou **"API Secret"**

### Passo 2: Encontrar a API Key
Na página do dashboard, procure por:
- **"API Secret"** ou **"Secret Key"**
- **"API Token"** ou **"Token"**
- **"Authentication"** ou **"Credentials"**

A chave geralmente começa com: `secret_xxxxxxxxxxxxx`

### Passo 3: Copiar a Chave
1. Clique no botão **"Copy"** ou **"Copiar"** ao lado da chave
2. Ou selecione e copie manualmente (Ctrl+C ou Cmd+C)

---

## 📋 Método 2: Acessar via Conta

### Passo 1: Ir para Configurações da Conta
1. Vá para: **https://www.convertapi.com/a/account**
2. Procure por uma aba ou seção chamada **"API"** ou **"Developer"**

### Passo 2: Encontrar a Chave
Procure por:
- **"API Secret"**
- **"API Key"**
- **"Secret Token"**

---

## 📋 Método 3: Criar uma Nova Chave

Se não conseguir encontrar a chave existente:

### Passo 1: Ir para API Settings
1. Vá para: **https://www.convertapi.com/a/api-tools**
2. Se pedir verificação, complete o CAPTCHA do Cloudflare
3. Procure por um botão **"Generate New Key"** ou **"Create API Key"**

### Passo 2: Gerar Nova Chave
1. Clique em **"Generate"** ou **"Create"**
2. Copie a chave gerada

---

## 🔍 Onde Procurar na Página

Quando estiver no dashboard ou API tools, procure por:

```
┌─────────────────────────────────────┐
│  API Secret / API Key               │
│  ─────────────────────────────────  │
│  secret_xxxxxxxxxxxxxxxxxxxxx        │
│  [Copy] [Regenerate]                │
└─────────────────────────────────────┘
```

---

## ⚠️ Se Ainda Tiver Problemas

### Opção 1: Usar Modo Demo
Seu site funciona perfeitamente em **modo demo** sem API key!
- Conversões funcionam (retornam arquivo de demonstração)
- Você pode testar tudo
- Depois adiciona a API key quando conseguir

### Opção 2: Contatar Suporte ConvertAPI
- Email: **support@convertapi.com**
- Chat: https://www.convertapi.com/contact
- Eles podem ajudar a encontrar sua chave

### Opção 3: Usar Alternativa Gratuita
Se não conseguir usar ConvertAPI, você pode usar:
- **LibreOffice Headless** (gratuito, local)
- **Apryse SDK** (trial gratuito)
- **PDF.js** (para PDFs)

---

## ✅ Quando Encontrar a Chave

Quando tiver a chave:

1. Vá para: https://github.com/marcosjrocha-art/doc-converter
2. **Settings** → **Secrets and variables** → **Actions**
3. **New repository secret**
4. **Name:** `CONVERTAPI_KEY`
5. **Secret:** Cole sua chave
6. Clique em **Add secret**

Pronto! Seu site funcionará com conversões reais!

---

## 💡 Dica Importante

Seu site **já funciona perfeitamente** sem a API key!
- Você pode fazer deploy no Vercel agora
- Testar tudo em modo demo
- Adicionar a API key depois quando conseguir

Não precisa esperar pela API key para fazer o deploy! 🚀

---

**Precisa de ajuda? Avise!**

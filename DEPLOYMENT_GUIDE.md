# 🚀 Guia Completo de Deploy - DocConvert

Este guia mostra como fazer deploy do DocConvert gratuitamente e ativar conversões reais com ConvertAPI.

## 📋 Pré-requisitos

- ✅ Conta no GitHub (você já tem)
- ✅ Conta no ConvertAPI (você já tem)
- ✅ Conta no Vercel (gratuita)

---

## 1️⃣ Obter API Key do ConvertAPI

### Passo 1: Acessar o Dashboard
1. Vá para https://www.convertapi.com/a/api-tools
2. Você já está logado, então procure por **"API Secret"** ou **"API Key"**
3. Copie sua chave (algo como: `secret_xxxxxxxxxxxxx`)

### Passo 2: Adicionar ao GitHub
1. Vá para seu repositório: https://github.com/marcosjrocha-art/doc-converter
2. Clique em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Nome: `CONVERTAPI_KEY`
5. Valor: Cole sua chave do ConvertAPI
6. Clique em **Add secret**

---

## 2️⃣ Deploy no Vercel (Gratuito)

### Passo 1: Conectar GitHub ao Vercel
1. Vá para https://vercel.com
2. Clique em **Sign Up** (ou **Sign In** se já tem conta)
3. Escolha **Continue with GitHub**
4. Autorize o Vercel a acessar seus repositórios

### Passo 2: Importar Projeto
1. Após conectar, clique em **Add New** → **Project**
2. Procure por `doc-converter` na lista
3. Clique em **Import**

### Passo 3: Configurar Variáveis de Ambiente
1. Na página de configuração, vá para **Environment Variables**
2. Adicione as seguintes variáveis:

```
DATABASE_URL = postgresql://sandbox:M4qFJ3jf22YqGEJ97HVIWPCG@localhost:5432/doc_converter
NEXT_PUBLIC_CONVERTAPI_KEY = sua_chave_do_convertapi
NEXT_PUBLIC_APP_URL = https://seu-dominio.vercel.app
NEXT_PUBLIC_APP_NAME = DocConvert
```

⚠️ **IMPORTANTE**: O banco de dados local não funcionará no Vercel!
Você precisa usar um banco de dados em nuvem (veja opção 3 abaixo).

### Passo 4: Deploy
1. Clique em **Deploy**
2. Aguarde o deploy terminar (2-3 minutos)
3. Seu site estará em: `https://seu-projeto.vercel.app`

---

## 3️⃣ Configurar Banco de Dados em Nuvem (Opcional)

Se quiser manter o histórico de conversões, você precisa de um banco de dados em nuvem.

### Opção A: Supabase (Recomendado - Gratuito)

1. Vá para https://supabase.com
2. Clique em **Sign Up**
3. Crie um novo projeto
4. Copie a `DATABASE_URL` fornecida
5. Adicione em **Vercel Settings** → **Environment Variables**
6. Redeploy o projeto

### Opção B: Railway (Pago - $5/mês)

1. Vá para https://railway.app
2. Crie uma conta
3. Crie um novo projeto PostgreSQL
4. Copie a `DATABASE_URL`
5. Adicione em Vercel

### Opção C: Neon (Gratuito)

1. Vá para https://neon.tech
2. Crie uma conta
3. Crie um novo projeto
4. Copie a `DATABASE_URL`
5. Adicione em Vercel

---

## 4️⃣ Testar o Site

1. Acesse seu site em Vercel
2. Teste o upload de um arquivo
3. Selecione os formatos
4. Clique em "Converter"
5. Seu arquivo convertido será baixado!

---

## 5️⃣ Domínio Personalizado (Opcional)

### Adicionar Domínio no Vercel

1. Vá para seu projeto no Vercel
2. Clique em **Settings** → **Domains**
3. Adicione seu domínio
4. Siga as instruções para configurar DNS

### Domínios Gratuitos

Se não tem domínio, você pode usar:
- **Freenom**: https://www.freenom.com (domínios .tk, .ml, .ga)
- **Vercel**: Seu projeto já tem um domínio gratuito

---

## 6️⃣ Monitorar Conversões

Seu site agora está rastreando todas as conversões no banco de dados!

### Ver Estatísticas

1. Acesse `/api/stats` no seu site
2. Você verá:
   - Total de conversões
   - Taxa de sucesso
   - Dados processados

### Acessar Banco de Dados

Se usar Supabase:
1. Vá para https://supabase.com
2. Acesse seu projeto
3. Vá para **SQL Editor**
4. Execute:
```sql
SELECT * FROM "Conversion" ORDER BY "createdAt" DESC;
```

---

## 🔧 Troubleshooting

### Erro: "ConvertAPI key not configured"
- Verifique se adicionou a variável `NEXT_PUBLIC_CONVERTAPI_KEY` no Vercel
- Redeploy o projeto após adicionar

### Erro: "Database connection failed"
- Se não configurou banco de dados em nuvem, as conversões funcionarão em modo demo
- Para ativar histórico, configure Supabase/Railway/Neon

### Erro: "Build failed"
- Verifique se todos os arquivos foram commitados no GitHub
- Tente fazer um novo commit e push

---

## 📊 Comparação de Plataformas de Deploy

| Plataforma | Preço | Banco de Dados | Melhor Para |
|-----------|-------|----------------|------------|
| **Vercel** | Gratuito | Não incluído | Next.js |
| **Netlify** | Gratuito | Não incluído | Sites estáticos |
| **Railway** | $5/mês | Incluído | Apps com DB |
| **Render** | Gratuito | Não incluído | Node.js |
| **Heroku** | Pago | Pago | Apps gerais |

---

## 🎯 Próximos Passos

1. ✅ Obter API key do ConvertAPI
2. ✅ Fazer deploy no Vercel
3. ✅ Configurar banco de dados (opcional)
4. ✅ Testar conversões reais
5. ✅ Compartilhar seu site!

---

## 📞 Suporte

Se tiver dúvidas:
- ConvertAPI: https://www.convertapi.com/docs
- Vercel: https://vercel.com/docs
- Supabase: https://supabase.com/docs

---

**Seu site DocConvert está pronto para o mundo! 🚀**

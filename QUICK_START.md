# ⚡ Quick Start - DocConvert em 5 Minutos

## 🎯 Objetivo
Fazer deploy do seu site DocConvert gratuitamente no Vercel com conversões reais usando ConvertAPI.

---

## 📋 Checklist Rápido

- [ ] Copiar API Key do ConvertAPI
- [ ] Adicionar secret no GitHub
- [ ] Fazer deploy no Vercel
- [ ] Testar conversões
- [ ] Compartilhar seu site!

---

## 1️⃣ Obter API Key do ConvertAPI (2 minutos)

### Você já está logado em: https://www.convertapi.com/a/api-tools

**Passos:**
1. Procure por **"API Secret"** ou **"Secret Key"** na página
2. Copie a chave (começa com `secret_`)
3. **Guarde em um lugar seguro!**

**Exemplo de chave:**
```
secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 2️⃣ Adicionar Secret no GitHub (2 minutos)

### Vá para: https://github.com/marcosjrocha-art/doc-converter

**Passos:**
1. Clique em **Settings** (engrenagem no topo)
2. Clique em **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Preencha:
   - **Name:** `CONVERTAPI_KEY`
   - **Secret:** Cole sua chave do ConvertAPI
5. Clique em **Add secret**

✅ **Pronto! Seu secret foi adicionado.**

---

## 3️⃣ Fazer Deploy no Vercel (1 minuto)

### Vá para: https://vercel.com

**Passos:**
1. Clique em **Sign Up** (ou **Sign In**)
2. Escolha **Continue with GitHub**
3. Autorize o Vercel
4. Clique em **Add New** → **Project**
5. Procure por `doc-converter` e clique em **Import**
6. Na página de configuração:
   - Deixe tudo como padrão
   - Clique em **Deploy**
7. Aguarde 2-3 minutos

✅ **Seu site está ao vivo!**

**URL do seu site:**
```
https://seu-projeto.vercel.app
```

---

## 4️⃣ Testar Conversões (1 minuto)

1. Acesse seu site no Vercel
2. Selecione um arquivo PDF
3. Escolha converter para DOCX
4. Clique em **Converter**
5. Seu arquivo será baixado!

✅ **Conversões funcionando!**

---

## 5️⃣ Próximos Passos (Opcional)

### Adicionar Domínio Personalizado
- Vá para seu projeto no Vercel
- **Settings** → **Domains**
- Adicione seu domínio

### Usar Banco de Dados (Opcional)
Se quiser manter histórico de conversões:
1. Crie conta em https://supabase.com
2. Crie um projeto PostgreSQL
3. Copie a `DATABASE_URL`
4. Adicione em Vercel → **Settings** → **Environment Variables**
5. Redeploy

---

## 🎉 Parabéns!

Seu site DocConvert está **100% funcional** e **online**! 🚀

### Compartilhe seu site:
- Envie o link para amigos
- Poste nas redes sociais
- Use em seus projetos

---

## 📞 Precisa de Ajuda?

### Erro: "ConvertAPI key not configured"
- Verifique se adicionou o secret no GitHub
- Redeploy o projeto no Vercel

### Erro: "Build failed"
- Verifique se todos os arquivos estão no GitHub
- Tente fazer um novo commit

### Conversão não funciona
- Verifique se a API key está correta
- Teste em modo demo (sem API key)

---

## 📚 Documentação Completa

Para mais detalhes, veja:
- **DEPLOYMENT_GUIDE.md** - Guia completo de deploy
- **README.md** - Documentação do projeto
- **GITHUB_SETUP.md** - Setup do GitHub

---

**Desenvolvido com ❤️ por Chat - AI Website Builder**

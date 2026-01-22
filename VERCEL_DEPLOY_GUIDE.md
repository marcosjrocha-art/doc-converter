# 🚀 Guia Seguro de Deploy no Vercel

Este guia mostra como fazer deploy **SEM compartilhar suas credenciais**!

---

## 📋 Método Seguro: Conectar GitHub ao Vercel

### Passo 1: Ir para Vercel
1. Abra: **https://vercel.com**
2. Clique em **Sign Up** (ou **Sign In** se já tem conta)

### Passo 2: Escolher GitHub
1. Clique em **Continue with GitHub**
2. Você será redirecionado para GitHub
3. Clique em **Authorize Vercel**

### Passo 3: Autorizar Vercel
1. GitHub pedirá permissão
2. Clique em **Authorize vercel**
3. Você voltará para Vercel

### Passo 4: Importar Projeto
1. Clique em **Add New** → **Project**
2. Procure por `doc-converter` na lista
3. Clique em **Import**

### Passo 5: Configurar
1. Deixe tudo como padrão
2. Clique em **Deploy**
3. Aguarde 2-3 minutos

✅ **Seu site está online!**

---

## 🔐 Por que é Seguro?

- ✅ Você faz login no GitHub (sua conta)
- ✅ Você autoriza Vercel (no GitHub)
- ✅ Vercel acessa seu repositório (via GitHub)
- ✅ Você **nunca compartilha senhas**
- ✅ Você pode revogar acesso a qualquer momento

---

## 📱 Passo a Passo Visual

```
1. Vercel.com
   ↓
2. Sign Up → Continue with GitHub
   ↓
3. GitHub Login (sua conta)
   ↓
4. Authorize Vercel
   ↓
5. Voltar para Vercel
   ↓
6. Add New → Project
   ↓
7. Procure "doc-converter"
   ↓
8. Import
   ↓
9. Deploy
   ↓
10. ✅ Site Online!
```

---

## 🎯 Resultado Final

Após o deploy, você terá:

- **URL do seu site**: `https://seu-projeto.vercel.app`
- **Domínio gratuito**: Vercel fornece automaticamente
- **HTTPS**: Seguro por padrão
- **CDN Global**: Seu site rápido em todo mundo

---

## 🔧 Se Tiver Problemas

### Erro: "Repository not found"
- Verifique se o repositório é público
- Vá para GitHub → seu repositório → Settings → Make public

### Erro: "Build failed"
- Verifique se todos os arquivos estão no GitHub
- Tente fazer um novo commit

### Erro: "Permission denied"
- Revogue acesso do Vercel no GitHub
- Tente autorizar novamente

---

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com

---

**Você consegue fazer isso! É bem simples! 💪**

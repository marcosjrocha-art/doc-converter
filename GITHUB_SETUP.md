# 🚀 Como Fazer Push para o GitHub

O projeto está pronto para ser enviado para o GitHub! Siga os passos abaixo:

## Pré-requisitos

Você precisa ter:
- Uma conta no GitHub (https://github.com)
- Git instalado no seu computador
- Um repositório criado no GitHub

## Opção 1: Usando Personal Access Token (Recomendado)

### Passo 1: Gerar um Personal Access Token

1. Acesse https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome ao token (ex: "DocConverter Push")
4. Selecione os escopos:
   - ✅ `repo` (acesso completo aos repositórios)
5. Clique em **"Generate token"**
6. **Copie o token gerado** (você não poderá vê-lo novamente!)

### Passo 2: Fazer o Push

Execute o comando abaixo no seu terminal:

```bash
cd /home/code/doc-converter
git push -u origin main
```

Quando solicitado:
- **Username**: seu nome de usuário do GitHub (ex: `marcosjrocha-art`)
- **Password**: Cole o token que você gerou (não é sua senha do GitHub!)

## Opção 2: Usando SSH (Mais Seguro)

### Passo 1: Gerar uma Chave SSH

```bash
ssh-keygen -t ed25519 -C "marcosjrocha@prof.educacao.sp.gov.br"
```

Pressione Enter para aceitar o local padrão e deixe a senha em branco.

### Passo 2: Adicionar a Chave SSH ao GitHub

1. Copie a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```

2. Acesse https://github.com/settings/keys
3. Clique em **"New SSH key"**
4. Cole a chave copiada
5. Clique em **"Add SSH key"**

### Passo 3: Alterar a URL do Repositório

```bash
cd /home/code/doc-converter
git remote set-url origin git@github.com:marcosjrocha-art/doc-converter.git
```

### Passo 4: Fazer o Push

```bash
git push -u origin main
```

## Opção 3: Usando GitHub CLI (Mais Fácil)

### Passo 1: Instalar GitHub CLI

```bash
# No macOS
brew install gh

# No Ubuntu/Debian
sudo apt install gh

# No Windows
choco install gh
```

### Passo 2: Autenticar

```bash
gh auth login
```

Siga as instruções na tela.

### Passo 3: Fazer o Push

```bash
cd /home/code/doc-converter
git push -u origin main
```

## ✅ Verificar se o Push foi Bem-Sucedido

Após fazer o push, você pode verificar:

1. Acesse https://github.com/marcosjrocha-art/doc-converter
2. Você deve ver todos os arquivos do projeto
3. Verifique o commit inicial com a mensagem "Initial commit: DocConvert..."

## 📝 Próximos Passos

Após fazer o push com sucesso:

1. **Criar um `.env.local`** com suas configurações
2. **Integrar ConvertAPI** para conversões reais
3. **Fazer deploy** no Vercel ou outra plataforma
4. **Configurar CI/CD** com GitHub Actions

## 🆘 Troubleshooting

### Erro: "fatal: could not read Username"

Isso significa que o Git não conseguiu se conectar ao GitHub. Tente:

```bash
# Limpar credenciais armazenadas
git credential reject https://github.com

# Tentar novamente
git push -u origin main
```

### Erro: "Permission denied (publickey)"

Se estiver usando SSH, verifique se a chave foi adicionada corretamente:

```bash
ssh -T git@github.com
```

Você deve ver: "Hi marcosjrocha-art! You've successfully authenticated..."

### Erro: "Repository not found"

Verifique se:
1. O repositório existe no GitHub
2. A URL está correta: `https://github.com/marcosjrocha-art/doc-converter.git`
3. Você tem permissão para fazer push

## 📚 Recursos Úteis

- [GitHub Docs - Pushing to a repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
- [GitHub Docs - Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [GitHub Docs - SSH Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

**Precisa de ajuda?** Siga um dos métodos acima e execute o comando `git push -u origin main`!

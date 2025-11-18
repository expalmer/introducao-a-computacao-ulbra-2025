# 🎓 Projeto de Introdução à Computação - ULBRA 2025

[![GitHub](https://img.shields.io/badge/GitHub-expalmer-181717?logo=github)](https://github.com/expalmer/introducao-a-computacao-ulbra-2025)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📖 Sobre o Projeto

Este é um projeto educacional para a disciplina de Introdução à Computação da ULBRA 2025. O objetivo é aprender sobre **Git**, **GitHub**, **Pull Requests** e **trabalho colaborativo** em desenvolvimento de software.

Cada aluno irá adicionar seu nome e uma recomendação de vídeo sobre programação ao projeto!

---

## 📋 Índice

- [Pré-requisitos](#-pré-requisitos)
- [Passo a Passo](#-passo-a-passo)
- [Dicas Úteis](#-dicas-úteis)
- [Solução de Problemas](#-solução-de-problemas)

---

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- Uma conta no [GitHub](https://github.com)

---

## 🚀 Passo a Passo

### 1️⃣ Clone este repositório

Faça o clone do projeto para sua máquina local:

```bash
git clone git@github.com:expalmer/introducao-a-computacao-ulbra-2025.git
```

> **💡 Dica:** Se você não tem SSH configurado, pode usar HTTPS:
>
> ```bash
> git clone https://github.com/expalmer/introducao-a-computacao-ulbra-2025.git
> ```

---

### 2️⃣ Acesse a pasta do projeto

Entre no diretório do projeto:

```bash
cd introducao-a-computacao-ulbra-2025
```

---

### 3️⃣ Instale as dependências e rode o servidor local (opcional)

Para visualizar o projeto rodando localmente:

```bash
npm install
npm run dev
```

Agora você pode acessar o projeto em: **http://localhost:5173/**

> **📌 Nota:** Este passo é opcional, mas recomendado para visualizar suas alterações antes de fazer o commit.

---

### 4️⃣ Crie uma branch com seu nome

Crie uma branch com seu nome (use kebab-case):

```bash
git checkout -b seu-nome-completo
```

**Exemplo:**

```bash
git checkout -b palmer-oliveira
```

> **⚠️ Importante:** Não faça alterações diretamente na branch `main`!

---

### 5️⃣ Adicione seu nome no arquivo `students.js`

Abra o arquivo `src/students.js` e adicione suas informações ao array:

```js
{
  id: 1, // escolha um ID único que não existe ainda
  name: "Seu Nome Completo",
  avatar: "URL do seu avatar",
  gradient: ["#0077ffff", "#aa00ffff"] // escolha duas cores em hexadecimal
}
```

#### 🖼️ Onde encontrar avatares:

- **DiceBear:** https://www.dicebear.com/playground/?style=adventurer
- **Pravatar:** https://i.pravatar.cc/150?u=seu-nome
- **GitHub Avatar:** https://github.com/seu-usuario.png

#### 🎨 Geradores de gradiente:

- https://cssgradient.io/
- https://uigradients.com/

---

### 6️⃣ Adicione sua recomendação no arquivo `recommendations.js`

Abra o arquivo `src/recommendations.js` e adicione sua recomendação de vídeo:

```js
{
  id: 2, // escolha um ID único que não existe ainda
  studentId: 1, // use o mesmo ID que você escolheu no passo anterior
  videoName: "Nome do Vídeo", // título do vídeo no YouTube
  videoId: "ahCwqrYpIuM", // ID do vídeo (parte após "v=" na URL)
}
```

#### 🎥 Como encontrar o ID do vídeo no YouTube:

Na URL do vídeo: `https://www.youtube.com/watch?v=ahCwqrYpIuM`

O ID é: **ahCwqrYpIuM** (tudo após `v=`)

---

### 7️⃣ Faça o commit das suas alterações

Adicione os arquivos modificados e faça o commit:

```bash
git add .
git commit -m "Adiciona meu nome e recomendação de vídeo"
```

> **💡 Dica:** Use mensagens de commit claras e descritivas!

---

### 8️⃣ Envie sua branch para o repositório remoto

Faça o push da sua branch:

```bash
git push origin seu-nome-completo
```

**Exemplo:**

```bash
git push origin palmer-oliveira
```

---

### 9️⃣ Abra um Pull Request

1. Acesse o repositório no GitHub: https://github.com/expalmer/introducao-a-computacao-ulbra-2025
2. Clique no botão **"Compare & pull request"**
3. Preencha o título e a descrição do PR
4. Clique em **"Create pull request"**

> **📌 Nota:** Certifique-se de que seu PR está apontando da sua branch para a branch `main`.

---

### 🔟 Aguarde a revisão

Após abrir o Pull Request, aguarde a revisão e aprovação. Quando aprovado, suas alterações serão incluídas no projeto! 🎉

---

## 💡 Dicas Úteis

- **Sempre trabalhe em uma branch separada**, nunca faça commits direto na `main`
- **Mantenha seu fork atualizado** com a branch principal
- **Teste suas alterações localmente** antes de fazer o push
- **Use mensagens de commit descritivas** para facilitar o entendimento

---

## 🆘 Solução de Problemas

### Erro ao clonar o repositório com SSH

Se você receber erro ao usar SSH, tente com HTTPS:

```bash
git clone https://github.com/expalmer/introducao-a-computacao-ulbra-2025.git
```

### Conflitos ao fazer push

Se houver conflitos, atualize sua branch com a `main`:

```bash
git pull origin main
```

Resolva os conflitos nos arquivos indicados e faça um novo commit.

### Esqueci de criar uma branch

Se você já fez alterações na `main`, crie uma branch nova e mova suas alterações:

```bash
git checkout -b seu-nome-completo
git push origin seu-nome-completo
```

---

## 📝 Licença

Este projeto é apenas para fins educacionais.

---

**Feito com ❤️ para a turma de Introdução à Computação - ULBRA 2025**

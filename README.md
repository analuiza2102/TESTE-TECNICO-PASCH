# GitHub Profile Viewer

Aplicação **React + TypeScript (Vite)** para buscar e visualizar **perfis** e **repositórios** de usuários do GitHub.  
Projeto criado como resposta a um **desafio técnico de Frontend (Paschoalotto)**, com foco em **consumo de API**, **UI limpa**, **acessibilidade** e **responsividade**.

> 🔎 Busca por `username` → mostra perfil + repositórios recentes  
> 🌓 Dark/Light mode com persistência  
> ⚡ Cache simples de resultados

---

## ✨ Funcionalidades

- **Campo de busca** por nome de usuário do GitHub
- **Exibição do perfil** (avatar, nome, login, bio, localização, site, seguidores/seguindo e total de repositórios)
- **Lista dos 10 repositórios mais recentes** (nome, descrição, linguagem, estrelas e link)
- **Estados de UI** de carregamento, erro e sucesso
- **Dark Mode** com persistência em `localStorage`
- **Cache** simples para evitar chamadas repetidas
- **Layout responsivo** (Mobile, Tablet e Desktop)
- **Acessibilidade básica** (labels, hierarquia semântica, ícones decorativos com `aria-hidden`)

---

## 🧰 Stack

- **React 18 + TypeScript**
- **Vite** (dev server e build)
- **Tailwind CSS**
- **shadcn/ui** (componentes)
- **lucide-react** (ícones)
- **GitHub REST API**

---

## 🚀 Como rodar localmente

> Pré-requisitos: **Node 18+** e **npm** (ou **pnpm**/**yarn**)

```bash
# 1) instalar dependências
npm install

# 2) rodar em modo desenvolvimento
npm run dev

# 3) build de produção
npm run build

# 4) preview local do build
npm run preview
```

Se aparecer o erro “`vite` não é reconhecido”, verifique se as dependências foram instaladas
(`node_modules`) e sempre use os scripts do `package.json` (`npm run dev`), não o binário direto.

---

## 🔌 Integração com a GitHub API

- **Usuário:** `GET https://api.github.com/users/:username`
- **Repositórios:** `GET https://api.github.com/users/:username/repos?sort=updated&per_page=10`

---

## 🗂️ Estrutura (alto nível)

src/
  components/
    HomePage.tsx
    UserProfile.tsx
    ui/...
  services/
    githubApi.ts
  hooks/
    useGitHubUser.ts
  styles/
    globals.css
  utils/
    validators.ts
    constants.ts
  App.tsx
  main.tsx
vite.config.ts

src/
  components/
    HomePage.tsx
    UserProfile.tsx
    ui/...
  services/
    githubApi.ts
  hooks/
    useGitHubUser.ts
  styles/
    globals.css
  utils/
    validators.ts
    constants.ts
  App.tsx
  main.tsx
vite.config.ts

---

## 🎨 Paleta (Paschoalotto)

- **Primário (Azul):** `#0051FF`
- **Primário hover:** `#003ACC`
- **Cinza 900:** `#111827`
- **Cinza 700:** `#374151`
- **Cinza 100:** `#F3F4F6`

---

## 🧪 Acessibilidade & Responsividade

- Hierarquia semântica de headings
- Ícones decorativos com `aria-hidden`
- Foco visível
- Layout responsivo com Tailwind (`sm`, `md`, `lg`)

---

## 📸 Screenshots

### Home (Dark Mode)
![Home Dark](https://i.postimg.cc/SjsgKQFf/dark-home.png)

### Perfil (Dark Mode)
![Profile Dark](https://i.postimg.cc/23605jRW/dark-profile.png)

### Home (Light Mode)
![Home Light](https://i.postimg.cc/bdJmvYcH/white-home.png)

### Perfil (Light Mode)
![Profile Light](https://i.postimg.cc/jC5Mjq06/white-profile.png)

---

## 🤝 Contribuição

1. Faça um fork
2. Crie uma branch: `git checkout -b feat/minha-melhoria`
3. Commit: `git commit -m "feat: minha melhoria"`
4. Push: `git push origin feat/minha-melhoria`
5. Abra um PR

---

## 📄 Licença

MIT — sinta-se à vontade para usar e adaptar.

---

## 👩‍💻 Autora

**Ana Luiza Guimarães** — [@analuiza2102](https://github.com/analuiza2102)

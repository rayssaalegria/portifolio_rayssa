# Portfólio — Rayssa Alegria

Site pessoal de UI/UX Designer e Front-End Developer.

- **Produção:** [rayssaalegria.com.br](https://rayssaalegria.com.br)
- **Stack:** HTML, CSS, JavaScript (site estático)

## Desenvolvimento local

```bash
python3 -m http.server 5173
```

Abra http://127.0.0.1:5173

## Ícones (Material UI)

Só precisa se for alterar ícones (`js/mui-icons.bundle.js` já está no repositório):

```bash
cp tools/package.json.example tools/package.json
cd tools && npm install && npm run build:icons
```

## Deploy (Hostinger)

**Git (recomendado):** conecte o repositório no hPanel — a raiz do site é o próprio repo (sem `npm install`).

**Manual / FTP:**

```bash
node scripts/prepare-deploy.mjs
```

Envie o conteúdo da pasta `deploy/` para `public_html`. Detalhes em [DEPLOY-HOSTINGER.md](./DEPLOY-HOSTINGER.md).

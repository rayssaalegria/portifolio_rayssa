# Corrigir “Falha na construção” no GIT da Hostinger

## Por que falha

A Hostinger vê `package.json` na **raiz** do repositório e tenta:

1. `npm install` (pacotes pesados do MUI)
2. `postinstall` / `npm run build`

Isso quebra em site **HTML estático**. O portfólio já tem tudo pronto em `index.html`, `css/`, `js/`, `assets/`.

## Solução (já no repositório)

- **Sem** `package.json` na raiz
- Ferramentas de ícones só em `tools/package.json` (não usadas no deploy)

## No hPanel

1. **Sites** → **rayssaalegria.com.br** → **GIT** (Avançado)
2. Branch: `main`
3. **Reimplantar** após o push mais recente no GitHub
4. Não marque o site como **Node.js Web App** (é site estático / PHP)

## Conferir sucesso

- Status: sucesso (não “Falha na construção”)
- https://rayssaalegria.com.br/ abre o portfólio (não a página 404 da Hostinger)

## Ainda falhou?

- **Implantações** → clique na falha → leia o **log de build**
- Se o log mencionar `npm` ou `build`: desconecte o GIT, apague `package.json` antigo em `public_html` se existir, reconecte o repo

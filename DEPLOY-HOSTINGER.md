# Deploy na Hostinger — rayssaalegria.com.br

Site estático: não precisa de Node.js no servidor. Só enviar arquivos para `public_html`.

## 1. Gerar a pasta de upload

No computador, na pasta do projeto:

```bash
npm install          # só se ainda não rodou (gera js/mui-icons.bundle.js)
npm run deploy:prepare
```

Isso cria a pasta **`deploy/`** com tudo que deve ir para a hospedagem.

## 2. Enviar para a Hostinger

1. Acesse [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. **Websites** → **rayssaalegria.com.br** → **Gerenciador de arquivos**
3. Abra **`public_html`**
4. Apague arquivos antigos de teste (ex.: `default.php`), se existirem — **mantenha backup se precisar**
5. Envie **o conteúdo** de `deploy/` (não a pasta `deploy` em si):
   - `index.html`
   - `.htaccess`
   - pastas `css/`, `js/`, `assets/`

**FTP (opcional):** host `ftp.rayssaalegria.com.br`, usuário do site, porta 21 — mesma pasta `public_html`.

## 3. Domínio e SSL

1. No hPanel: **Domínios** → confirme que `rayssaalegria.com.br` aponta para este site
2. **SSL** → ative certificado gratuito (Let’s Encrypt)
3. Depois do SSL ativo, edite `.htaccess` na Hostinger e **descomente** as 3 linhas de redirecionamento HTTPS

## 4. Testar

- https://rayssaalegria.com.br/
- Troca de tema (claro/escuro)
- Idioma PT/EN
- Imagem chibi em `assets/chibi-rayssa.png` (se quebrar, confira se o PNG foi enviado — ~426 KB)

## 5. Systra (domínio separado)

O link do portfólio aponta para **https://miraynaike.com/systra**. Esse deploy é **outro** site/domínio na Hostinger (pasta ou subdomínio de `miraynaike.com`). O portfólio em `rayssaalegria.com.br` não inclui o app Systra.

## O que NÃO enviar

- `node_modules/`
- `scripts/`, `package.json`, `.git/`
- `.claude/`

## Atualizar o site depois

1. Edite os arquivos no projeto
2. `npm run deploy:prepare`
3. Suba de novo só o que mudou (ou tudo) para `public_html`

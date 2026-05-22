# Deploy Git na Hostinger — corrigir “Falha na construção”

## Por que falha

O painel tenta rodar **build** (`npm install` / `npm run build`). Antes isso quebrava por causa do MUI. Agora o repositório tem um build **leve** (sem dependências) que só monta a pasta `deploy/`.

## Configuração no hPanel (importante)

**Sites** → **rayssaalegria.com.br** → **GIT** → ícone **⋮** → **Editar** / configurações do repositório:

| Campo | Valor |
|--------|--------|
| Branch | `main` |
| Repositório | `portifolio_rayssa` |
| **Comando de build** | `npm run build` |
| **Diretório de saída** (output) | `deploy` |
| Diretório raiz no servidor | `public_html` |

Se existir campo **Comando de instalação**, deixe vazio ou `npm install` (não há dependências pesadas).

### Alternativa (sem build)

Se o painel permitir **deixar o comando de build em branco**:

- Comando de build: *(vazio)*
- Diretório de saída: *(vazio ou `.`)*
- Os arquivos na **raiz** do repo (`index.html`, `css/`, `js/`, `assets/`) vão direto para o site.

## Não use “Node.js Web App”

Para este portfólio use **GIT** em **Avançado**, não o instalador de **Aplicação Node.js**. São fluxos diferentes.

## Depois de salvar

1. **Reimplantar**
2. Abra o log da implantação — deve mostrar `npm run build` e cópia de `deploy/`
3. Teste: https://rayssaalegria.com.br/

## Desenvolvimento local (ícones MUI)

```bash
cd tools && npm install && npm run build:icons
```

Isso **não** roda na Hostinger; os ícones já estão em `js/mui-icons.bundle.js`.

## Ainda falhou?

1. Copie o **log de build** da implantação que falhou.
2. Confirme que o último commit no GitHub é o mais recente.
3. Desconecte o repositório, reconecte com as configurações da tabela acima.

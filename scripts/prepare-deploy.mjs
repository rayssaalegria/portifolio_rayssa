/**
 * Gera a pasta deploy/ com apenas os arquivos para public_html na Hostinger.
 * Uso: npm run deploy:prepare
 */
import { cpSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'deploy');

const COPY = [
  'index.html',
  '.htaccess',
  'css',
  'js',
  'assets',
];

if (existsSync(out)) rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const item of COPY) {
  const src = join(root, item);
  if (!existsSync(src)) {
    console.warn(`⚠ Ignorado (não encontrado): ${item}`);
    continue;
  }
  cpSync(src, join(out, item), { recursive: true });
  console.log(`✓ ${item}`);
}

console.log('\n→ Pasta pronta:', out);
console.log('  Envie o CONTEÚDO de deploy/ para public_html no hPanel (File Manager ou FTP).\n');

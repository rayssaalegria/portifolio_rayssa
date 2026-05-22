/**
 * Exporta ícones @mui/icons-material como SVG inline para HTML estático.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  DesignServicesOutlined,
  LayersOutlined,
  CodeOutlined,
  DashboardCustomizeOutlined,
  BrushOutlined,
  AccessibilityOutlined,
  LocationOnOutlined,
  SchoolOutlined,
  MenuBookOutlined,
  EmailOutlined,
  LinkedIn,
  GitHub,
  PaletteOutlined,
  GridViewOutlined,
  KeyboardArrowDownOutlined,
  LightModeOutlined,
  DarkModeOutlined,
} from '@mui/icons-material';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../js');
const assetsDir = join(__dirname, '../assets/icons');

const ICONS = {
  DesignServices: DesignServicesOutlined,
  Layers: LayersOutlined,
  Code: CodeOutlined,
  DashboardCustomize: DashboardCustomizeOutlined,
  Brush: BrushOutlined,
  Accessibility: AccessibilityOutlined,
  LocationOn: LocationOnOutlined,
  School: SchoolOutlined,
  MenuBook: MenuBookOutlined,
  Email: EmailOutlined,
  LinkedIn,
  GitHub,
  Palette: PaletteOutlined,
  GridView: GridViewOutlined,
  KeyboardArrowDown: KeyboardArrowDownOutlined,
  LightMode: LightModeOutlined,
  DarkMode: DarkModeOutlined,
};

function renderIcon(IconComponent) {
  const raw = renderToStaticMarkup(
    createElement(IconComponent, {
      fontSize: 'inherit',
      style: { fontSize: 24, display: 'block' },
      'aria-hidden': true,
    })
  );
  const cleaned = raw.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();
  const match = cleaned.match(/<svg[\s\S]*?<\/svg>/i);
  if (!match) return cleaned;
  let svg = match[0]
    .replace(/\s*class="[^"]*"/g, '')
    .replace(/\s*data-testid="[^"]*"/g, '')
    .replace(/\s*style="[^"]*"/g, '')
    .replace(/\s*focusable="[^"]*"/g, '')
    .replace(/\s*aria-hidden="[^"]*"/g, '');
  return `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">${svg.replace(/<svg[^>]*>/i, '').replace(/<\/svg>/i, '')}</svg>`;
}

mkdirSync(outDir, { recursive: true });
mkdirSync(assetsDir, { recursive: true });

const map = {};
for (const [name, Component] of Object.entries(ICONS)) {
  const svg = renderIcon(Component);
  map[name] = svg;
  writeFileSync(join(assetsDir, `${name}.svg`), svg, 'utf8');
}

const bundle = `/* Gerado por npm run build:icons — @mui/icons-material */
window.MUI_ICONS = ${JSON.stringify(map)};
`;

writeFileSync(join(outDir, 'mui-icons.bundle.js'), bundle, 'utf8');
console.log('Ícones MUI exportados:', Object.keys(map).join(', '));

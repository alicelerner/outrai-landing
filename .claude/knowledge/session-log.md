# Session Log — OUTRAI* landing page

## 2026-04-13

### Contexto
Refinamento de design da landing page da OUTRAI* módulo a módulo. Arquivo base: `index.html` + `style.css`. Design system documentado em `design-references/mood-summary.md`.

---

### O que foi feito

#### Git
- Inicializado repositório git no projeto
- Primeiro commit com estado inicial da landing page

#### Nav
- Substituído brand mark `*` pela logo SVG (`Assets/logo-outrai.svg`)
- Removido botão "Quero saber mais" da nav
- Logo com `width: clamp(48px, 4.5vw, 64px)` — medida relativa
- Padding top ajustado para 48px
- Logo inverte para branco ao scrollar (`filter: brightness(0) invert(1)`) sem fundo na nav

#### Hero
- Identificados problemas: `border-radius: 400px` no botão (contra o sistema), tagline com alpha baixo, CTA
- Não modificado nesta sessão (pendente)

#### Widget "Comece sua transformação"
Construção de um widget sticky de bottom bar com form, inspirado no plat4m.com.

**Estrutura final:**
- `position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%)`
- Fechado: pill compacto (largura natural do conteúdo) com label + ícone ≡
- Aberto: expande para `50vw × max(65vh, conteúdo)` com animação de width + height via JS
- Toggle `position: absolute; bottom: 8px; right: 8px` dentro do pill (para manter posição fixa)
- Body do form anima com fade + translateY via classe `.fadein`
- Label "Comece sua transformação" some ao abrir via `label.style.opacity = '0'`

**Form:**
- Título "Entre na lista de espera" — 40px, Public Sans 700
- Campos: Nome, Empresa, Email
- Botão "Enviar" com `border-radius: 16px`, neon mint, alinhado à direita
- 56px de gap entre último input e botão
- Sem backend por enquanto

**Design:**
- Background: `rgba(26,27,31,0.95)` + `backdrop-filter: blur(24px)`
- `border-radius: 20px` no pill
- Toggle: rounded square (12px radius) com borda sutil, fica neon no hover
- Tipografia: Public Sans (sistema da OUTRAI*)

**Bug pendente (estado fechado quebrado):**
- Toggle `position: absolute; bottom: 8px; right: 8px` com `height: 44px` ultrapassa a altura do trigger (~38px)
- O pill fica com área preta acima do trigger por excesso de altura
- **Fix:** adicionar `min-height: 60px` ao trigger (ou ao pill) e medir `pill.offsetHeight` em vez de `trigger.offsetHeight` no JS

---

### Próximos módulos a trabalhar
- Hero (CTA, botão sem border-radius)
- Marquee
- Ponto de Partida
- Abordagem
- ... (ver estrutura completa em `index.html`)

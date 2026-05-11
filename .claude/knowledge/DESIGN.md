---
version: alpha
name: OUTRAI*
description: Identidade editorial de duplo modo — luz (gradiente mint-lime) e sombra (preto profundo) — que convivem numa página contínua e fluida. Tensão cromática deliberada: mint frio da máquina + âmbar quente do humano + preto absoluto. Tipografia de contraste extremo: Public Sans Black para impacto declarativo, Fraunces itálico para voz humana. A voltagem da marca vem do contraste entre os dois modos de superfície e da paleta de tensão semântica.

colors:
  # Backgrounds
  dark:             "#080808"
  light-from:       "#6EE8D4"
  light-to:         "#A8F590"

  # Texto — modo sombra
  heading-dark:     "#4DF5A0"
  body-dark:        "#F5F5F0"
  body-dark-strong: "#FFFFFF"
  body-dark-muted:  "rgba(255,255,255,0.3)"

  # Texto — modo luz
  ink:              "#0A0A0A"
  body-light:       "#1A1A1A"
  body-light-muted: "rgba(10,10,10,0.5)"

  # Acentos transversais (ambos os modos)
  amber:            "#E07828"
  forest:           "#1A4D38"
  cream-label:      "#E8E49A"

  # UI
  label-mint:       "rgba(77,245,160,0.45)"
  hairline-dark:    "rgba(77,245,160,0.15)"
  hairline-light:   "rgba(10,10,10,0.12)"

typography:
  display:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "clamp(56px, 8vw, 96px)"
    fontWeight:    900
    lineHeight:    0.95
    letterSpacing: "-0.02em"
  display-md:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "clamp(36px, 5vw, 64px)"
    fontWeight:    900
    lineHeight:    1.0
    letterSpacing: "-0.015em"
  display-sm:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "clamp(24px, 3.5vw, 40px)"
    fontWeight:    900
    lineHeight:    1.05
    letterSpacing: "-0.01em"
  subheading:
    fontFamily:    "Fraunces, Georgia, serif"
    fontSize:      "clamp(20px, 2.5vw, 32px)"
    fontStyle:     italic
    fontWeight:    400
    lineHeight:    1.3
    letterSpacing: "0"
  body:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "clamp(16px, 1.4vw, 20px)"
    fontWeight:    400
    lineHeight:    1.65
    letterSpacing: "0"
  label:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "11px"
    fontWeight:    500
    lineHeight:    1.4
    letterSpacing: "0.55em"
    textTransform: uppercase
  section-number:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "12px"
    fontWeight:    500
    lineHeight:    1.4
    letterSpacing: "0.15em"
    textTransform: uppercase
  button:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "13px"
    fontWeight:    700
    lineHeight:    1
    letterSpacing: "0.08em"
    textTransform: uppercase
  nav-link:
    fontFamily:    "Public Sans, system-ui, sans-serif"
    fontSize:      "14px"
    fontWeight:    500
    lineHeight:    1.4
    letterSpacing: "0"

rounded:
  xs:   4px
  sm:   6px
  md:   8px
  lg:   12px
  xl:   16px
  pill: 9999px
  full: 9999px

spacing:
  xxs:     4px
  xs:      8px
  sm:      12px
  md:      16px
  lg:      24px
  xl:      32px
  xxl:     48px
  section: "clamp(80px, 12vh, 160px)"
  inline:  "clamp(40px, 8vw, 120px)"

components:
  top-nav:
    background:    "{colors.dark}"
    color:         "{colors.body-dark}"
    typography:    "{typography.nav-link}"
    height:        64px
    paddingInline: "{spacing.inline}"
  section-dark:
    background:    "{colors.dark}"
    color:         "{colors.body-dark}"
    paddingInline: "{spacing.inline}"
    paddingBlock:  "{spacing.section}"
  section-light:
    background:    "linear-gradient(135deg, {colors.light-from} 0%, {colors.light-to} 100%)"
    color:         "{colors.ink}"
    paddingInline: "{spacing.inline}"
    paddingBlock:  "{spacing.section}"
  section-eyebrow:
    typography:    "{typography.label}"
    color:         "{colors.label-mint}"
    marginBottom:  "2em"
  section-number:
    typography:    "{typography.section-number}"
    color:         "{colors.label-mint}"
  button-outline-dark:
    backgroundColor: transparent
    textColor:       "{colors.heading-dark}"
    border:          "1px solid {colors.heading-dark}"
    typography:      "{typography.button}"
    padding:         "14px 28px"
    borderRadius:    "{rounded.sm}"
  button-solid-light:
    backgroundColor: "{colors.ink}"
    textColor:       "{colors.light-to}"
    typography:      "{typography.button}"
    padding:         "14px 28px"
    borderRadius:    "{rounded.sm}"
  button-amber:
    backgroundColor: "{colors.amber}"
    textColor:       "{colors.ink}"
    typography:      "{typography.button}"
    padding:         "14px 28px"
    borderRadius:    "{rounded.sm}"
  collage-block:
    borderRadius: "{rounded.md}"
    boxShadow:    none
  diagram:
    borderRadius: "{rounded.sm}"
  footer:
    background:    "{colors.dark}"
    color:         "{colors.body-dark}"
    typography:    "{typography.body}"
    paddingBlock:  "{spacing.xxl}"
    paddingInline: "{spacing.inline}"
---

## Overview

OUTRAI* trabalha com dois modos de superfície que alternam ao longo do scroll numa página contínua — não há cortes ou quebras de slides, e sim transições de densidade e atmosfera. O **modo sombra** (`{colors.dark}` — #080808, preto quase sem luminância) domina as seções de argumento e processo: comunica seriedade, profundidade técnica. O **modo luz** (gradiente diagonal mint→lime, `{colors.light-from}` → `{colors.light-to}`) abre e fecha a página: comunica abertura, confiança, leveza.

A voltagem da marca não vem de um único accent color — vem de uma **paleta de tensão deliberada**. Mint frio (`{colors.heading-dark}` — #4DF5A0) marca o que é da máquina; âmbar quente (`{colors.amber}` — #E07828) representa o humano e cria dissonância produtiva. Os dois nunca são decorativos: são semânticos.

Tipografia em contraste extremo: **Public Sans Black** (peso 900, tracking negativo) para headlines de impacto declarativo; **Fraunces itálico** (peso 400, "wonky" serif óptico de alto contraste) para a voz humana em subtítulos poéticos e fechamentos. Labels de etapas e numerações de seção usam Public Sans regular em caixa alta com tracking muito aberto — tom técnico, sistemático.

A assinatura visual mais distintiva da marca é a **colagem de gravuras vintage** (técnicas/industriais, domínio público) tratadas com duotone, sobreposição de retângulos de cor ácida e overlay de planta técnica. O resultado é simultaneamente analógico e digital, histórico e futuro — alinhado com o conceito de humano + máquina.

**Características-chave:**
- Dois modos de superfície (`{colors.dark}` e gradiente mint-lime) como pacemakers do scroll — nunca o mesmo modo em bandas consecutivas.
- Paleta de tensão semântica: mint = máquina, âmbar = humano, preto absoluto = base.
- Public Sans Black para display, Fraunces itálico para voz editorial, Public Sans uppercase para labels técnicos.
- Colagem de gravura vintage + tratamento ácido como ilustração — substitui ícones UI convencionais.
- Profundidade via sobreposição e colagem; sombras apenas quando contextualmente necessário, nunca decorativas.
- Labels e numerações de seção em mint com opacidade reduzida (`{colors.label-mint}`), nunca em branco puro.

## Colors

### Backgrounds

- **Dark** (`{colors.dark}` — #080808): O fundo das seções de argumento. Preto quase sem luminância — mais denso que um near-black convencional, nunca cinza.
- **Light From / Light To** (`{colors.light-from}` — #6EE8D4 → `{colors.light-to}` — #A8F590): Gradiente diagonal mint→lime do modo luz. Aplicado como `background` em `section-light`, nunca em componentes individuais.

### Modo Sombra — Texto

- **Heading Dark** (`{colors.heading-dark}` — #4DF5A0): Verde-mint neon para todos os headlines no modo sombra. É o sinal visual da máquina; a cor mais reconhecível da marca no contexto escuro.
- **Body Dark** (`{colors.body-dark}` — #F5F5F0): Corpo de texto padrão no modo sombra. Branco levemente quente, não puro.
- **Body Dark Strong** (`{colors.body-dark-strong}` — #FFFFFF): Ênfase em parágrafos ou listas no modo sombra.
- **Body Dark Muted** (`{colors.body-dark-muted}` — rgba(255,255,255,0.3)): Texto de apoio, partes secundárias de headlines bicolores.

### Modo Luz — Texto

- **Ink** (`{colors.ink}` — #0A0A0A): Todos os textos no modo luz. Preto quente, não puro.
- **Body Light** (`{colors.body-light}` — #1A1A1A): Corpo de texto padrão no modo luz.
- **Body Light Muted** (`{colors.body-light-muted}` — rgba(10,10,10,0.5)): Texto secundário no modo luz.

### Acentos Transversais

- **Amber** (`{colors.amber}` — #E07828): Laranja queimado. O acento humano — cria tensão produtiva contra o mint frio. Usado em labels de etapas do processo, CTAs principais, elementos que marcam a presença humana no sistema.
- **Forest** (`{colors.forest}` — #1A4D38): Verde-floresta escuro. Exclusivo para os diagramas (elipses do átomo H-M-H).
- **Cream Label** (`{colors.cream-label}` — #E8E49A): Amarelo-creme sépia. Exclusivo para as letras H/M/H nos diagramas — toque editorial analógico.

### UI

- **Label Mint** (`{colors.label-mint}` — rgba(77,245,160,0.45)): Versão em 45% de opacidade do mint para numerações de seção e eyebrows. Presente mas recuada — não compete com os headlines.
- **Hairline Dark** (`{colors.hairline-dark}` — rgba(77,245,160,0.15)): Bordas de 1px em superfícies escuras — divisores de marquee, linhas de grade.
- **Hairline Light** (`{colors.hairline-light}` — rgba(10,10,10,0.12)): Bordas de 1px em superfícies claras.

## Typography

### Famílias

Três registros tipográficos distintos:

**Registro 1 — Impacto grotesco**: **Public Sans** (weight 900 / Black). Grotesco americano de origem USGDS — neutro, direto, sem ornamento. Tom declarativo e seguro. Usado em todos os headlines de seção e nos displays principais.

**Registro 2 — Voz humana**: **Fraunces** (italic, weight 400). "Wonky" serif óptico de alto contraste com personalidade e irregularidade intencional. Tom poético, caloroso — contrasta com a objetividade do grotesco. Usado em taglines, subtítulos editoriais e fechamentos.

**Registro 3 — Labels técnicos**: **Public Sans** (weight 500, uppercase, tracking extremo). Tom sistemático e funcional. Usado em labels de etapas ("BRIEFING", "RESEARCH"), numerações de seção ("01 / 04") e eyebrows de seção.

### Hierarquia

| Token | Tamanho | Peso | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|---|
| `{typography.display}` | clamp(56–96px) | 900 | 0.95 | -0.02em | Hero h1, headlines de maior impacto |
| `{typography.display-md}` | clamp(36–64px) | 900 | 1.0 | -0.015em | Heads de seção principal |
| `{typography.display-sm}` | clamp(24–40px) | 900 | 1.05 | -0.01em | Sub-seções, títulos de cards |
| `{typography.subheading}` | clamp(20–32px) | 400 | 1.3 | 0 | Taglines, subtítulos poéticos — Fraunces itálico |
| `{typography.body}` | clamp(16–20px) | 400 | 1.65 | 0 | Corpo corrido |
| `{typography.label}` | 11px | 500 | 1.4 | 0.55em | Labels de etapas — uppercase, tracking extremo |
| `{typography.section-number}` | 12px | 500 | 1.4 | 0.15em | Numeração "01 / 04" — uppercase |
| `{typography.button}` | 13px | 700 | 1 | 0.08em | Botões — uppercase |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Itens de navegação |

### Princípios

Display sizes em weight 900 com tracking negativo — sem isso, o Public Sans Black lê como genérico. O Fraunces nunca aparece em peso acima de 400; a personalidade da fonte está na sua forma, não no peso. Labels nunca usam Fraunces — o contraste entre os registros é o que cria a dualidade humano/máquina na tipografia.

## Layout

### Sistema de Espaçamento
- **Unidade base:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px.
- **Seções:** `{spacing.section}` — clamp(80px, 12vh, 160px). Escala com a viewport.
- **Padding lateral:** `{spacing.inline}` — clamp(40px, 8vw, 120px). Generoso, sem max-width restritivo.

### Grid e Container
- **Largura:** sem max-width rígido abaixo de ~1600px — o padding lateral define o respiro.
- **Grid base:** 2 colunas em seções de argumentação; coluna única centralizada em hero e fechamentos.
- **Densidade:** baixa a média — o espaço negativo é elemento ativo, não vazio residual.
- **Alinhamento:** flush left na maioria; centralizado reservado para momentos de impacto (hero, fechamento).

### Filosofia de Espaço

O gradiente mint-lime e o preto profundo precisam de respiro para criar presença. Seções generosas com padding vertical escalonado por viewport; componentes internos com padding `{spacing.xl}` (32px) no mínimo. A imagem de colagem e o texto nunca se sobrepõem sem intenção — composição separada, colagem de um lado, texto do outro.

## Elevation & Depth

| Nível | Tratamento | Uso |
|---|---|---|
| Plano | Sem shadow, sem borda | Superfícies de seção, navegação |
| Hairline | 1px `{colors.hairline-dark}` ou `{colors.hairline-light}` | Divisores, inputs |
| Colagem | Duotone + overlay geométrico ácido | Ilustrações — profundidade via composição |
| Card elevado | Background levemente distinto da seção | Cards de conteúdo — a definir |

A filosofia de elevação é **composição primeiro, shadow raramente**. A maior parte da profundidade vem do contraste entre os dois modos de superfície e do tratamento de colagem. Quando sombras aparecerem em cards ou componentes flutuantes, devem ser discretas e quentes — nunca cinza frio.

### Profundidade Decorativa
- A colagem de gravuras vintage tratadas (duotone, overlay de cor ácida, blueprint em transparência baixa) é o elemento de profundidade mais característico.
- Os diagramas (átomo H-M-H, loops) são vetoriais simples — elipses + tipografia, sem ornamento.
- Overlays de retângulo de cor ácida (mint, âmbar) sobre as gravuras funcionam como "glitches" geométricos.

## Shapes

### Escala de Border Radius

| Token | Valor | Uso |
|---|---|---|
| `{rounded.xs}` | 4px | Badges e elementos muito pequenos |
| `{rounded.sm}` | 6px | Botões, inputs |
| `{rounded.md}` | 8px | Cards de conteúdo padrão |
| `{rounded.lg}` | 12px | Cards maiores, containers de colagem |
| `{rounded.xl}` | 16px | Containers hero, componentes de destaque |
| `{rounded.pill}` | 9999px | Tags, badges pill |
| `{rounded.full}` | 9999px | Avatares, botões circulares |

### Imagens e Ilustrações

A marca não usa fotografia para ilustrar conceitos — usa:
- Gravuras técnicas/industriais vintage (domínio público) com tratamento duotone + overlay ácido
- Diagramas vetoriais simples (elipses, setas, texto) para representar sistemas e processos
- Nenhum ícone UI convencional

Quando fotografia aparecer (depoimentos, pessoas), avatares recortados em círculo a ~40px de diâmetro.

## Components

### Navegação

**`top-nav`** — Nav sobre o modo sombra, 64px de altura, `{colors.dark}`. Logotipo OUTRAI* à esquerda, links de navegação no centro ou à direita em `{typography.nav-link}`. No mobile, colapsa para hamburger.

### Superfícies de Seção

**`section-dark`** — Seção no modo sombra. Background `{colors.dark}`, texto `{colors.body-dark}`. Heading em `{colors.heading-dark}` (mint neon). Padding generoso via `{spacing.inline}` e `{spacing.section}`.

**`section-light`** — Seção no modo luz. Background gradiente diagonal `{colors.light-from}` → `{colors.light-to}`. Texto `{colors.ink}`. Reservado para hero (abertura) e fechamento — não usar no meio da página em seções consecutivas.

**Regra de alternância:** nunca o mesmo modo em duas seções adjacentes. A sequência típica: luz (hero) → sombra (argumento/processo) → luz (fechamento/CTA).

### Labels e Numeração

**`section-eyebrow`** — Label de abertura de seção. Tipografia `{typography.label}` (Public Sans, 11px, uppercase, tracking 0.55em), cor `{colors.label-mint}`. Aparece acima do headline da seção.

**`section-number`** — Numeração "01 / 04". Tipografia `{typography.section-number}` (12px, uppercase, tracking 0.15em), cor `{colors.label-mint}`. Posicionado no canto superior da seção.

### Botões

**`button-outline-dark`** — Botão sobre modo sombra. Background transparente, borda e texto em `{colors.heading-dark}` (mint), tipografia `{typography.button}`, padding 14px × 28px, radius `{rounded.sm}`. Estado ativo: fill mint com texto preto.

**`button-solid-light`** — Botão sobre modo luz. Background `{colors.ink}` (preto), texto `{colors.light-to}` (lime), tipografia `{typography.button}`, mesmos padding e radius.

**`button-amber`** — Botão de CTA principal de tensão. Background `{colors.amber}`, texto `{colors.ink}`, tipografia `{typography.button}`. Usado para a ação mais importante da página — o âmbar é o sinal humano de chamada à ação.

### Colagem e Diagramas

**`collage-block`** — Container para gravuras vintage tratadas. Sem shadow. A profundidade é interna: duotone + overlay de retângulo ácido + blueprint em transparência. Radius `{rounded.md}`.

**`diagram`** — Diagrama vetorial (átomo H-M-H, loops de processo). Elipses em `{colors.forest}`, labels H/M/H em `{colors.cream-label}`, texto de conexão em `{colors.body-dark}` ou `{colors.ink}` conforme o modo. Sem ornamento extra.

### Pilares

**`pilares-grid`** — Bloco de três frentes de valor (amplificação, aceleração, redução de riscos). Modo sombra, grid de 3 colunas em desktop (1 coluna em mobile). Cada coluna tem hairline superior em `rgba(77,245,160,0.18)`, asterisco SVG (`Assets/asterisco.svg`) em `{colors.heading-dark}` (mint neon), título em Public Sans Black (display-sm), subhead em Fraunces itálico, e bullets com bullet-point neon. Eyebrow "TRÊS FRENTES" segue `{typography.label}`. Título da seção em `{colors.heading-dark}`.

### Dream Team

**`dream-team-grid`** — Galeria dos 10 agentes nomeados que compõem a esteira agêntica. Modo luz com gradiente vertical mint → lime. Grid 5×2 em desktop, 3 colunas em tablet, 2 colunas em mobile. Cada `agent-card` tem fundo `rgba(255,255,255,0.45)` com `backdrop-filter: blur(8px)` e hairline `rgba(10,10,10,0.08)`. Estrutura interna: função (eyebrow Public Sans 13–14px, peso 600), avatar PNG transparente em silhueta dark, nome em uppercase tracking 0.2em. Avatares vivem em `Assets/dream-team/<nome>.png`. Hover lifta o card 4px e clareia o fundo para `rgba(255,255,255,0.65)`.

### Plataforma

**`plataforma-stack`** — Showcase em coluna única com 4 cards alternando lado de imagem (zigue-zague). Modo sombra profundo, com cabeçalho em mint neon e cards onde cada visual da plataforma fica em uma figura com `border-radius: 14px`, `box-shadow: 0 24px 64px rgba(0,0,0,0.45)` e hairline interna `rgba(77,245,160,0.10)`. Cada card tem label de etapa em laranja âmbar (`{colors.amber}`) com tracking 0.32em (sinal humano), título em Public Sans Black, body em Public Sans regular. Hover dá `scale(1.02)` na imagem. Mobile: tudo colapsa para 1 coluna. Imagens em `Assets/plataforma/<nome>.png` (slides do pitch renderizados em 2000px de largura).

### Footer

**`footer`** — Sempre no modo sombra, fecha qualquer sequência de seções. Background `{colors.dark}`, texto `{colors.body-dark}`. Padding `{spacing.xxl}` vertical, `{spacing.inline}` lateral. O logotipo OUTRAI* e os links de navegação secundários ficam aqui.

## Do's and Don'ts

### Do
- Sempre alternar os modos de superfície entre seções consecutivas — o contraste é o ritmo da marca.
- Usar `{colors.heading-dark}` (mint) exclusivamente para headlines no modo sombra. No modo luz, headlines são `{colors.ink}`.
- Reservar `{colors.amber}` para o que é genuinamente humano: o CTA principal, labels de etapas que envolvem julgamento humano.
- Usar `{typography.subheading}` (Fraunces itálico) para a voz editorial — taglines, momentos de calor, fechamentos. Nunca em headlines de seção principal.
- Manter o Fraunces em weight 400. A personalidade está na forma da fonte, não no peso.
- Tratar o gradiente mint-lime como background de seção inteira, nunca como fill de componente individual.
- Dar respiro ao espaço negativo — densidade baixa a média é a postura da marca.

### Don't
- Não usar mint neon em textos de corpo — só em headings e labels no modo sombra.
- Não colocar o gradiente mint-lime em botões, cards ou qualquer componente — é exclusivo de `section-light`.
- Não usar o âmbar como cor decorativa — ele tem função semântica (humano, tensão, CTA).
- Não repetir o modo sombra em duas seções adjacentes sem uma seção luz ou transição entre elas.
- Não usar Fraunces em peso bold ou em labels técnicos — quebra a dualidade dos registros tipográficos.
- Não introduzir um terceiro modo de superfície (cinza, roxo, outro gradiente) — a marca vive na dualidade luz/sombra.
- Não aplicar sombras decorativas em seções ou cards de conteúdo — profundidade vem de composição.

## Responsive Behavior

### Breakpoints

| Nome | Largura | Mudanças principais |
|---|---|---|
| Mobile | < 768px | Nav colapsa para hamburger; display 96px → 48px; grid 2 colunas → 1 coluna; collage-block empilha abaixo do texto |
| Tablet | 768–1024px | Nav horizontal; display escala para ~64px; grid 2 colunas mantido se largo o suficiente |
| Desktop | 1024–1440px | Layout completo; displays no topo da escala clamp |
| Wide | > 1440px | Padding inline aumenta; conteúdo não cresce além de ~1600px |

### Toque e Acessibilidade
- Botões: mínimo 44 × 44px de área de toque.
- Links de nav: 44px de altura mínima no mobile.
- Contraste de texto: verificar `{colors.heading-dark}` (mint) sobre `{colors.dark}` (preto) — relação de contraste alta por design, mas confirmar com WCAG AA.

### Colapso
- Hero: grid 2 colunas → coluna única; collage-block empilha abaixo do texto principal.
- Seções de argumentação: grid 2 colunas → 1 coluna; padding inline reduz via clamp.
- Diagrama: escala proporcionalmente; labels mantêm legibilidade.

## Gaps Conhecidos

- As fontes Public Sans e Fraunces são Google Fonts — disponíveis sem licença proprietária. Sem substitutos necessários, mas confirmar carregamento via `font-display: swap`.
- Animações de entrada (clip-path por palavra, reveal por linha, marquee de labels) não estão formalizadas como tokens — pendente de definição.
- Estados de hover dos botões não estão definidos além do estado default — a definir.
- Colagem de gravuras: as imagens do PDF são pesadas para web; versões otimizadas ou alternativas SVG precisam ser avaliadas.
- A sequência exata de modos (luz/sombra) ao longo do scroll da landing page não está definida aqui — é uma decisão de conteúdo, não de sistema.

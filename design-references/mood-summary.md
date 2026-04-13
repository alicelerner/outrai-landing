# Design Mood Summary — OUTRAI*

> Brutalismo editorial com alma brasileira: tipografia de impacto em peso extremo, colagem industrial de gravuras vintage tratadas com neon ácido, e uma dualidade de modos (luz/sombra) que alterna entre amplitude e densidade sem jamais perder a postura.

---

## Identidade Visual

### Direção de Cor

Paleta de duplo modo — ambos igualmente premium, nenhum é "default":

**Modo Luz (backgrounds claros)**
- Mint → Lime: gradiente vertical diagonal, `#6EE8D4` → `#A8F590`
- Tipografia preta sobre o gradiente
- Usado em capas, slides de conceito visual e fechamento — comunica abertura, leveza, confiança

**Modo Sombra (backgrounds escuros)**
- Preto profundo: `#080808` — quase sem luminância, não cinza
- Verde-néon mint para headings: `#4DF5A0` / `#66F0A8`
- Branco para corpo: `#FFFFFF` / `#F5F5F0`
- Usado em slides de argumentação e sistema — comunica seriedade, profundidade técnica

**Acentos transversais** (aparecem em ambos os modos):
- Laranja queimado / âmbar: `#E07828` — quente, dissonante, cria tensão produtiva
- Verde-floresta escuro: `#1A4D38` — usado nas ilustrações do "átomo"
- Amarelo-creme: `#E8E49A` — nas letras H/M/H dos diagramas, toque de sépia editorial

**Estratégia cromática**: não complementar, não análoga — é uma paleta de **tensão deliberada**. Mint frio + laranja quente + preto absoluto. A saturação do néon não é decorativa: é semântica. O néon marca o que é da máquina; o humano fica no creme e no preto.

---

### Tipografia

Dois registros tipográficos distintos que convivem sem concorrer:

**Registro 1 — Impacto grotesco**
- Fonte: **Public Sans** (Google Fonts)
- Classificação: grotesco americano de origem USGDS, neutro e direto
- Uso: headlines de seção ("ponto de partida", "abordagem", "vantagens")
- Peso visual dominante: `900` / Black, tracking neutro a levemente apertado
- Cor: verde-mint sobre preto, preto sobre gradiente
- Tom: declarativo, seguro, sem ornamento

**Registro 2 — Serif itálico editorial**
- Fonte: **Fraunces** (Google Fonts)
- Classificação: "wonky" serif óptico de alto contraste, com personalidade e irregularidade intencional
- Uso: tagline do cover ("agentifique sua gestão e design de produto"), subtítulos poéticos, fechamento ("Agradecemos :)")
- Tom: voz humana, textura, calor — contrasta com a objetividade do grotesco

**Registro 3 — Grotesco mono-espaçado ou cap para labels**
- Classificação: sans-serif regular ou medium em caixa alta
- Uso: labels de etapas ("BRIEFING", "RESEARCH", "REQUISITO", "EXECUÇÃO", "AVALIAÇÃO")
- Tracking muito aberto (+200 a +400)
- Tom: técnico, sistemático, funcional

**Hierarquia geral**:
```
Heading (Black Extended) — 64–96px
Subheading serif itálico — 28–36px
Body grotesco regular — 18–22px
Label caps tracking — 11–13px
```

---

### Layout e Espaçamento

- **Grid**: modular de 2 colunas em slides de argumentação; coluna única centralizada em capas e conceitos
- **Densidade**: baixa a média — o espaço negativo é tratado como elemento ativo, não vazio residual
- **Alinhamento**: flush left na maioria; centralizado reservado para momentos de impacto (cover, átomo)
- **Composição imagery + texto**: colagem à esquerda ou direita, texto no lado oposto — nunca sobrepostos sem intenção
- **Margem**: generosa, `~8-10%` em cada lado

---

### Tratamento de Superfície e Textura

**A assinatura visual mais distintiva da marca**: gravuras técnicas/industriais vintage (tubulações, coração anatômico, figuras históricas, maquinário) tratadas com:
1. Duotone que elimina os tons médios e reforça o preto
2. Sobreposição de retângulos de cor ácida (mint, amarelo-neon, laranja) como "glitches" geométricos
3. Overlays de planta técnica/blueprint em transparência baixa

Isso cria um visual que é simultaneamente **analógico e digital**, **histórico e futuro** — perfeitamente alinhado com o conceito de "humano + máquina".

- **Sombras**: não há box-shadows decorativas — a profundidade vem da colagem e da sobreposição
- **Bordas**: ausentes como elemento decorativo
- **Raios**: zero — linguagem toda de ângulos retos
- **Gradientes**: reservados ao background, não a componentes UI

---

### Linguagem de Interação (inferida para a landing page)

O deck em si não tem interação, mas a linguagem visual sugere:
- Scroll storytelling com seções de impacto: cada seção = um "slide" mental
- Transições de modo luz → sombra ao longo do scroll (como o deck alterna)
- Animações contidas e intencionais — sem parallax excessivo
- Hover states discretos, sem efeitos chamativo

---

### Iconografia e Ilustração

- Zero ícones UI convencionais
- Ilustração = colagem de material de domínio público (gravuras séc. XIX) + tratamento digital ácido
- Os diagramas (átomo H-M-H, loops) são vetoriais simples — elipses + tipografia, sem ornamento
- A linguagem diagramática é propositalmente estranha (usar uma elipse 3D para um "átomo") — anti-convencional

---

## Mapa de Referências

| # | Fonte | Pasta | Aplica a | Contribuição principal |
|---|-------|--------|----------|------------------------|
| 1 | `pitch.pdf` — slide 1 | root | Cover / Hero | Paleta de cores, logo, tipografia cover, gradiente mint-lime |
| 2 | `pitch.pdf` — slides 2, 10, 11, 13 | root | Seções escuras | Modo sombra: black bg + neon mint heading + grotesco body |
| 3 | `pitch.pdf` — slides 4, 5, 6, 7, 8 | root | Seções claras com colagem | Composição imagery + texto, tratamento de gravura vintage |
| 4 | `pitch.pdf` — slides 9, 10, 11, 12 | root | Diagramas / Sistema | Linguagem diagramática, paleta do átomo, itálico serif |
| 5 | `pitch.pdf` — slide 13 | root | Fechamento / CTA | Tipografia de fechamento, espírito de voz humana |

---

## Tensões e Resoluções

**Tensão 1 — Dois modos, um site**
O deck alterna entre modo luz (gradiente) e modo escuro (preto) com desenvoltura porque cada slide é autônomo. Na landing page, a questão é: dominância de um dos modos, ou alternância ao longo do scroll?

> **Para resolver com a cliente antes de executar.**

**Tensão 2 — Colagem vs. web**
As gravuras vintage tratadas são o elemento mais marcante da marca, mas são imagens pesadas e complexas para uma landing page leve. Traduzir isso para o web pode significar: usar as mesmas imagens do PDF, criar versões otimizadas, ou substituir por elementos SVG que evoquem o mesmo espírito.

> **Para resolver com a cliente antes de executar.**

---

*Última atualização: 2026-04-09*
*Baseado em: pitch.pdf (13 slides) — OUTRAI* por outracoisa**

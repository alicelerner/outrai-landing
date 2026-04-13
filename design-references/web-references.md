# Referências Web — Estrutura, Comportamento e Animação

> Valores extraídos ao vivo dos 4 sites. Tipografia ignorada — já definida no mood-summary.md.

---

## Sites analisados

| # | Site | Caráter | Relevância |
|---|------|---------|------------|
| 1 | [worldquantfoundry.com](https://worldquantfoundry.com/) | Brutalismo minimalista, preto absoluto, headline partido | **Mais alta** |
| 2 | [plat4m.com](https://plat4m.com/) | Dark studio, reveals de texto, portfólio editorial | **Alta** |
| 3 | [noou.ai](https://noou.ai/) | Dark tech, marquee de labels, mockup de produto no hero | **Média** |
| 4 | [yesnowww.com](https://yesnowww.com/) | Gradiente como modo, letras espaçadas, Lottie como hero | **Média** |

---

## 1. worldquantfoundry.com — Layout e animação de entrada

### Estrutura extraída

```css
/* Background — quase-preto, não preto puro */
background-color: rgb(17, 17, 17);

/* Container — padding generoso, sem max-width restritivo */
padding-left: 40px;
padding-right: 40px;
max-width: 2560px;

/* Numeração de seções "01 / 04" */
font-size: 12px;
text-transform: uppercase;
color: rgb(218, 218, 218);
```

### Animação de entrada do hero

Cada palavra do headline é um `<span>` separado com `clip-path` + `translate3d`. O texto sobe para dentro de um "slot" que vai revelando a palavra de baixo para cima:

```html
<h1>
  <span style="transform: translate3d(0px, -36.61px, 0px);
               clip-path: inset(76.27% 0px 0px);">
    Forging
  </span>
  <span style="transform: translate3d(0px, -36.61px, 0px);
               clip-path: inset(76.27% 0px 0px);">
    Companies
  </span>
</h1>
```

`clip-path: inset(76% 0 0)` = só os 24% de baixo visíveis → anima para `inset(0 0 0)` enquanto o `translateY` sobe de `-36px` para `0`. As palavras entram uma a uma com stagger.

### Como aplicar para OUTRAI

```css
/* Background da seção escura */
background-color: #080808;  /* valor do PDF, mais escuro que o WQF */

/* Padding lateral — mesma filosofia */
padding-inline: clamp(40px, 8vw, 120px);

/* Numeração de seções */
.section-number {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(77, 245, 160, 0.4);  /* verde-mint em 40% de opacidade */
}
```

```js
// Animação de entrada — clip-path por palavra, stagger de 80ms
gsap.from('.hero-word', {
  'clip-path': 'inset(100% 0 0)',
  y: 40,
  duration: 0.9,
  ease: 'power3.out',
  stagger: 0.08
})
```

---

## 2. plat4m.com — Reveals por linha e texto bicolor

### Animação de entrada extraída

Cada linha do headline começa deslocada 22px abaixo e transparente. Entram em sequência via scroll:

```html
<h1>
  <span class="line" style="display: block;
                             transform: translate(0px, 22px);
                             opacity: 0;">
    <span class="text-gray">We make it</span> beautiful.
  </span>
  <span class="line" style="display: block;
                             transform: translate(0px, 22px);
                             opacity: 0;">
    <span class="text-gray">We make it</span> work.
  </span>
  <span class="line" style="display: block;
                             transform: translate(0px, 22px);
                             opacity: 0;">
    <span class="text-gray">We make it</span> run itself.
  </span>
</h1>
```

Padrão bicolor: parte de apoio em cinza `rgb(126, 128, 135)`, palavra de destaque na cor cheia.

### Como aplicar para OUTRAI

```css
/* Linha de reveal — estado inicial */
.reveal-line {
  display: block;
  opacity: 0;
  transform: translateY(22px);
}

/* Texto bicolor: apoio em cinza, destaque em cor */
/* Modo escuro */
.text-support { color: rgba(255, 255, 255, 0.3); }
/* Ex: <span class="text-support">agentifique sua</span> gestão. */
```

```js
// Linhas entram em sequência, stagger 120ms
gsap.from('.reveal-line', {
  y: 22,
  opacity: 0,
  duration: 0.7,
  ease: 'power2.out',
  stagger: 0.12,
  scrollTrigger: { trigger: '.section', start: 'top 80%' }
})
```

---

## 3. noou.ai — Marquee de labels

### Estrutura extraída

Dois tracks idênticos em sequência dentro de um container com `overflow: hidden`. Quando o primeiro termina, o segundo já começou — loop sem corte:

```html
<div style="overflow: hidden; white-space: nowrap;">
  <div class="marquee-track">
    INSIGHT · FLOW · STRATEGY · CRAFT · IMPACT · SCALE ·
    INSIGHT · FLOW · STRATEGY · CRAFT · IMPACT · SCALE ·
  </div>
</div>
```

### Como aplicar para OUTRAI

```css
.marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
  border-top: 1px solid rgba(77, 245, 160, 0.15);
  border-bottom: 1px solid rgba(77, 245, 160, 0.15);
  padding-block: 14px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }  /* -50% porque o track é duplicado */
}

.marquee-track {
  display: inline-block;
  animation: marquee 60s linear infinite;
}

.marquee-track span {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: #4DF5A0;
  margin-inline: 2.5em;
}
```

Conteúdo para OUTRAI: `BRIEFING · RESEARCH · REQUISITO · EXECUÇÃO · AVALIAÇÃO`

---

## 4. yesnowww.com — Seções como modos e letra espaçada

### Estrutura extraída

O site usa Lottie (`<img class="lottie-animation-container">`) para o hero. Cada seção tem `min-height: 100vh` e seu próprio background — o scroll empurra uma seção sobre a outra sem transição de fade.

O texto principal usa espaços literais entre cada caractere — não é `letter-spacing`, são espaços no HTML:

```html
<p>i s a</p>
<p>c r e a t i v e  s t u d i o</p>
```

### Como aplicar para OUTRAI

**Seções como modos — CSS puro, sem JS de scroll:**

```css
.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Modo luz — hero e fechamento */
.section--light {
  background: linear-gradient(135deg, #6EE8D4 0%, #A8F590 100%);
  color: #0a0a0a;
}

/* Modo sombra — argumento, processo, para-quem */
.section--dark {
  background: #080808;
  color: #F5F5F0;
}

.section--dark h2 { color: #4DF5A0; }      /* heading neon no modo escuro */
.section--dark .label { color: #E07828; }   /* label laranja-âmbar */
```

**Labels de seção com espaçamento extremo** (equivalente ao efeito de caracteres separados do yesnowww, mas via CSS):

```css
.section-eyebrow {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.55em;           /* "A G E N T E S" sem espaços no HTML */
  color: rgba(77, 245, 160, 0.45);
  margin-bottom: 2em;
}
```

---

## Síntese: o que usar de onde

| Elemento | Site de origem | Técnica concreta |
|----------|---------------|-----------------|
| Animação de entrada por palavra | worldquantfoundry | `clip-path: inset(100% 0 0)` → `inset(0)` + `translateY`, stagger 80ms |
| Reveal por linha no scroll | plat4m | `translateY(22px) + opacity:0` → `0 + 1`, stagger 120ms |
| Texto bicolor (apoio + destaque) | plat4m | `color: rgba(255,255,255,0.3)` na parte de apoio |
| Marquee de labels | noou.ai | Track duplicado, `translateX(-50%)` em 60s linear |
| Seção = modo (luz/sombra) | yesnowww | `min-height: 100vh` + classe `.section--light / --dark` |
| Label com espaçamento extremo | yesnowww | `letter-spacing: 0.55em` em 11px uppercase |
| Numeração `01 / 04` | worldquantfoundry | 12px uppercase, opacidade reduzida |

---

## O que NÃO trazer

| Padrão visto | Site | Por que não |
|--------------|------|-------------|
| `border-radius` em cards/botões | noou.ai | OUTRAI é ângulos retos — zero radius em qualquer componente |
| Parallax (`data-speed`) | worldquantfoundry | Contradiz o "animações contidas" do PDF — só o clip-path de entrada |
| Gradiente em botões ou cards | qualquer | PDF reserva gradiente exclusivamente para background de seção |
| Neon rosa/magenta | noou.ai | Quebra a semântica da paleta (mint = máquina, laranja = tensão humana) |

---

*Última atualização: 2026-04-09*
*CSS extraído ao vivo via browse · combinado com pitch.pdf + mood-summary.md*

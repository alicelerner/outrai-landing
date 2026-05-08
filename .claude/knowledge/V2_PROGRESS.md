# OUTRAI* v2 — Content Evolution Progress

Living tracker for the landing page evolution based on the ABR2026 pitch. Updated at each checkpoint. Branch: `outrai-v2-content`.

## Scope

In: tagline update, section reorder, three new sections (Pilares, Dream Team, Plataforma).
Out (deferred): Loop Único, Maturidade, Soluções (kept for a future round).
Untouched: Átomo + Loops sticky, snake-path scroll-driven logic in Esteiras.

## Final structure

```
01. Hero               edited
02. Esteiras           moved
03. Pilares            new
04. Abordagem          moved
05. Marquee            moved
06. Átomo + Loops      untouched
07. Dream Team         new
08. Plataforma         new
09. Características    moved
10. Vantagens          unchanged
11. Footer             unchanged
```

## Checkpoint status

| CP | Subject | Status | Commit | Notes |
|---|---|---|---|---|
| 0 | Branch + tracker | done | 36db14a | Branch outrai-v2-content created from main |
| 1 | Tagline + meta | done | dafb2fc | Hero, footer-tag, OG, Twitter, description meta all aligned. Tagline iterated post-PR to "Delegação intencional de tarefas de product design para agentes" (2026-05-08) |
| 2 | Reorder sections | done | f60ad6b | Ponto de Partida dropped; Esteiras moved up; Marquee moved between Abordagem and Átomo+Loops; Trio moved after Átomo+Loops; orphan JS and CSS cleaned up |
| 3 | Pilares (new) | done | cea00e1 | Built as dark mode (mint neon headings, neon bullets), 3-col grid, asterisco extracted from logo SVG into Assets/asterisco.svg. /design-shotgun deferred — auto mode shipped sensible default; can be revisited at CP6 if Alice wants alternatives |
| 4 | Dream Team (new) | done | 6978c71 | Avatars extracted from pitch PDF page 16 via pdftoppm + PIL crop, mint background turned transparent. Light-mode section between Átomo+Loops (dark) and Trio (light). 5×2 grid → 3-col tablet → 2-col mobile. |
| 5 | Plataforma (new) | done | c0b3e45 | 4 modules using full slide images (sabatina, workspace, dashboard, visao) extracted from PDF pages 39/41/42/45 at 2000px width. Zigzag layout with image alternating left/right. Sticky-scroll Framer-style pattern deferred to future polish. |
| 6 | Cross-section audit | done | 1aebbd2 | Smoke-tested live with Playwright. Fixes applied: pilar asterisco now uses CSS mask-image (was rendering black via `<img>`); plataforma cards restructured to wrap eyebrow+body in `.plataforma-card-text` so grid stops auto-placing items into wrong cells; switched grid alignment to `center`; promoted body to display weight (white, larger). Open visual question: marquee position (currently between Abordagem and Átomo+Loops — Alice may want it elsewhere). Hero/Esteiras adjacency still flagged for review. |
| 7 | PR to main | done | PR #4 | https://github.com/alicelerner/outrai-landing/pull/4 — opened with full description, structure summary, and three open questions for Alice (marquee position, hero/esteiras adjacency, plataforma sticky pattern) |

## Decisions

- **2026-05-08** — Stay on static HTML/CSS/JS for this round. React rebuild kept as a separate future project (plan annex).
- **2026-05-08** — Drop Loop Único, Maturidade, Soluções from this round to keep scope tight.
- **2026-05-08** — Do not touch Átomo + Loops sticky; it is the heart of the site and was carefully calibrated.
- **2026-05-08** — Drop Ponto de Partida; hero tagline carries the framing.
- **2026-05-08** — Marquee proposed between Abordagem and Átomo + Loops as a visual teaser of stages, leading into the sticky.
- **2026-05-08** — Use /design-shotgun before each new section to pick a variant; /design-review at CP6 for cross-section audit.

## Asset inventory

Source: `html intro outrai*/` (Keynote export — each slide is a vector PDF in a UUID folder).

| Asset | Source slide | Status | Pipeline |
|---|---|---|---|
| 10 dream team avatars (Newton, Jeremias, Carol, Nando, Laurinha, Jefferson, Thiago, Azamba, Livia, Danilo) | PDF page 16 | extracted to Assets/dream-team/*.png | rasterize via pdftoppm at 200dpi, crop with PIL, replace mint bg with transparency |
| 4 platform screens (Sabatina, Workspace, Dashboard, Sessão de ampliação) | PDF pages 39/41/42/45 | extracted to Assets/plataforma/*.png | rasterize via pdftoppm at 200dpi, used full slide as visual (no crop) |
| Asterisco SVG | already in `Assets/logo-outrai.svg` | available | — |

Extraction script proposed:

```bash
mkdir -p /tmp/outrai-slides
cd "html intro outrai*/assets"
for dir in */; do
  uuid="${dir%/}"
  pdf="$dir$uuid.pdf"
  if [ -f "$pdf" ]; then
    sips -s format png "$pdf" --out "/tmp/outrai-slides/$uuid.png" 2>/dev/null
  fi
done
# Then visually identify slide UUIDs for dream team and platform.
```

## Blockers

None active. Asset extraction will be tackled at the start of CP4 and CP5.

## Open questions

- Marquee final position — currently proposed between Abordagem and Átomo + Loops. Confirm with Alice on visual review at CP6.
- Modes adjacency — Pilares (CP3) decision (light or dark) depends on rhythm; will be validated against design-shotgun output and DESIGN.md alternation rule.
- Hero (light) and Esteiras (light) are now adjacent, violating the alternation rule. Visually may work because Hero is `position: fixed` and Esteiras slides over it via sticky-scroll, but flagged for design-review at CP6 (option to add a dark divider band, swap Esteiras to dark, or accept).

## Post-PR iteration log

### 2026-05-08 — Esteiras section iteration (paused, NOT working)

PR #4 closed without merge to keep iterating. Working on `outrai-v2-content` branch. Hero tagline iteration committed and pushed (`9c73939`). **Esteiras iteration is in WIP state — animation visibly buggy in Alice's live test, needs another pass.**

What was attempted on Esteiras:

1. **Mode**: switched section from `sec-light` (mint-lime gradient) to dark (`var(--dark)`) — Alice approved direction
2. **Text placeholder**: was invisible at first (gradient bled through low-alpha gray), then differentiated using opaque `#6a6a6a @ 0.7 opacity` for placeholder vs. transparent fill exposing parent's mint→neon gradient for revealed
3. **Gradient on revealed**: applied via `background-clip: text` + `-webkit-text-fill-color: transparent` on parent `.esteiras-text`
4. **Strict sequential reveal of bolinhas**: rewrote `updateEsteiras` to use a single cursor that advances only as far as (a) progress threshold met AND (b) any pending agent's spin has completed (`now >= nextEnableAt`). Each agent gates the next ball reveal until its arrow finishes one CW rotation. Headless tests showed this works correctly across slow + fast scroll.
5. **Arrow rotation reversed**: from CCW to CW via keyframe `rotate(0deg) → rotate(360deg)`
6. **Snake-path stroke + nodes**: white translucent stroke on path; neon fill on green circles; wrapper opacity `0.55` to dim the whole infographic so it doesn't compete with text
7. **Last word ("pensantes.") not revealing**: bug in word-reveal threshold formula — `diff > 0.05` required `progress > 1.002`, impossible since clamped to 1. Fixed by switching to `progress >= (i + 0.5) / n`.
8. **Removed color/fill transition** to kill flicker: CSS `transition: color → transparent` interpolates through dark intermediate values, causing each word to flash through black on reveal/unreveal. Now only `opacity 0.25s ease` is transitioned; color/fill flips instantly.

After step 8, Alice tested live and reported it still wasn't working. Did not get a specific repro of the new bug before stopping. Resuming work needs a fresh live test from Alice describing exactly what looks wrong.

Files modified (not committed):
- `style.css` — `.esteiras-scroll`, `.esteiras-text`, `.w`, `.w.revealed`, `.esteiras-infographic`, `.snake-path`, `circle.node`, `@keyframes spin-once`
- `index.html` — Esteiras `updateEsteiras()` JS (cursor-based reveal); word reveal threshold formula

### Resume plan

When picking this back up:
1. Have Alice describe the exact visible glitch she sees on live (was it the animation order, the placeholder appearance, the color flash on reveal, the gradient rendering, or scroll responsiveness?). Don't assume.
2. Reproduce in browser before changing anything.
3. Verify each fix with Alice live, one change at a time. Do not batch multiple changes and present together — that was a key source of frustration.
4. Once Esteiras is approved live, commit + push as separate commit.

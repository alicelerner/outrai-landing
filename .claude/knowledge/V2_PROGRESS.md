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
| 1 | Tagline + meta | done | dafb2fc | Hero, footer-tag, OG, Twitter, description meta all aligned |
| 2 | Reorder sections | done | f60ad6b | Ponto de Partida dropped; Esteiras moved up; Marquee moved between Abordagem and Átomo+Loops; Trio moved after Átomo+Loops; orphan JS and CSS cleaned up |
| 3 | Pilares (new) | done | cea00e1 | Built as dark mode (mint neon headings, neon bullets), 3-col grid, asterisco extracted from logo SVG into Assets/asterisco.svg. /design-shotgun deferred — auto mode shipped sensible default; can be revisited at CP6 if Alice wants alternatives |
| 4 | Dream Team (new) | done | 6978c71 | Avatars extracted from pitch PDF page 16 via pdftoppm + PIL crop, mint background turned transparent. Light-mode section between Átomo+Loops (dark) and Trio (light). 5×2 grid → 3-col tablet → 2-col mobile. |
| 5 | Plataforma (new) | done | this commit | 4 modules using full slide images (sabatina, workspace, dashboard, visao) extracted from PDF pages 39/41/42/45 at 2000px width. Zigzag layout with image alternating left/right. Sticky-scroll Framer-style pattern deferred to future polish. |
| 6 | Cross-section audit | pending | — | Run /design-review |
| 7 | PR to main | pending | — | — |

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

# MOTION.md

Motion stack for the OUTRAI* landing page. Read this before adding any animation, transition, or scroll effect.

## Stack

Use these four libraries — and only these — for motion on the landing page.

### Framer Motion
The go-to for React animations. Use it for:
- Fade-ins, slide-ins, scale transitions
- Scroll reveals (`whileInView`)
- Layout transitions (`layout`, `layoutId`)
- Hover and tap states on interactive elements
- Page and component mount/unmount transitions (`AnimatePresence`)

If something moves on screen, this handles it by default.

### GSAP
Reach for GSAP when Framer Motion isn't enough:
- Timelines where multiple elements animate in sequence
- Scroll-driven effects (ScrollTrigger)
- Choreographed motion across a whole section
- Fine-grained control over easing, stagger, and chained tweens

### @gsap/react
Small companion package that makes GSAP play nicely inside React components. Always pair it with GSAP — without it, GSAP can conflict with how React renders and unmounts.

Use the `useGSAP()` hook for all GSAP code inside components. It handles cleanup automatically and scopes animations to the component.

### Lenis
Runs in the background. Provides smooth scrolling across the entire page so the experience feels polished instead of using the browser's default choppy scroll. Initialize it once at the app root.

When using GSAP ScrollTrigger together with Lenis, sync them so scroll-driven animations stay in lockstep with the smooth-scroll position.

## Decision rules

- **Simple in-component animation** → Framer Motion
- **Hover, tap, focus, in-view reveals** → Framer Motion
- **Multi-element sequenced timeline** → GSAP (+ @gsap/react)
- **Scroll-pinned or scroll-scrubbed motion** → GSAP ScrollTrigger (+ @gsap/react)
- **Page-wide scroll feel** → Lenis (always on, set up once)

## Don'ts

- Don't reach for other animation libraries (anime.js, motion-one, react-spring, etc.) — keep the stack consistent.
- Don't write raw `requestAnimationFrame` loops or manual CSS transition orchestration when one of these libraries fits.
- Don't use GSAP inside React without `@gsap/react` — it will leak animations and break on re-render.
- Don't combine native CSS smooth-scroll with Lenis — pick Lenis.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing page for OUTRAI*. No build system — open `index.html` directly in a browser.

## Knowledge

- `.claude/knowledge/DESIGN.md` — design system, paleta, tipografia, componentes, constraints visuais
- `.claude/knowledge/session-log.md` — histórico de sessões, decisões tomadas, bugs conhecidos
- `.claude/knowledge/MOTION.md` — motion stack (Framer Motion, GSAP, @gsap/react, Lenis). **Read before creating any animation, transition, or scroll effect.**

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore

# NextGen Tennisacademy — Website

Production implementation of the NextGen Tennisacademy design (Leistungstennis in
Hallein, Salzburg), rebuilt from the design handoff bundle as a **Next.js (App
Router) + React + TypeScript** site.

## Run it

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (all pages prerender to static HTML)
npm start        # serve the production build
```

## Structure

- `app/` — one route per page: `/` (home), `/programme`, `/trainer`, `/standort`,
  `/galerie`, `/news`, `/preise`, `/kontakt`. `layout.tsx` wraps every page with the
  shared nav, footer, and client-side effects. `globals.css` holds the full brand
  system (tokens, shared website styles, and per-page styles).
- `components/` — shared `Nav`, `Footer`, `PageHead`, the `SiteEffects` module
  (custom cursor, scroll reveals, counters, magnetic buttons, parallax, lime page
  transition), and the interactive pieces: `CoachExplorer` (trainer profile modal),
  `Gallery` (filter + lightbox), `NewsList` (filter + newsletter), `ContactForm`
  (2-step booking form).
- `lib/site.ts` — navigation config + brand constants (single source of truth, so
  nav/footer never drift).
- `public/assets/brand/` — logos, the `ng-mark` monogram, and the hero video.

## Notes for the brand owner

- **Images are still the branded "court-line" placeholders** (as in the design), and
  the hero uses the bundled Alex Lindenbauer video. Drop real photos into
  `public/assets/brand/` (or the gallery/news/coach data arrays) to replace them.
- The design's custom wordmark font is approximated with **Saira Condensed** — supply
  the original `.otf`/`.ttf` to match the logo exactly.
- The contact form and newsletter are front-end mocks (no backend yet).
- Fixed one latent inconsistency from the prototype: the Trainer stat bar read
  "3 Standorte", which contradicts the final single-location (Hallein) content — it
  now reads "Hallein · Standort".

The original design handoff bundle is preserved under `project/` and `chats/` for
reference. Its instructions follow.

---

# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 4 chat transcript(s) in `chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Read `project/NextGen Tennis Academy.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `README.md` — this file
- `chats/` — conversation transcripts (read these!)
- `project/` — the `Nextgen tennis akademie` project files (HTML prototypes, assets, components)

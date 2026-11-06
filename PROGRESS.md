# PROGRESS

Tracker for the maiCare Foundation website build. Full plan: `WEBSITE-PLAN.md`. Project rules: `CLAUDE.md`.
Update this file when a phase closes: tick the boxes, then write notes for the next session.

## Phase tracker

| Phase | Name | What you get at the end | Status |
|---|---|---|---|
| 0 | Prep | Info, accounts and tools ready | ☐ (not started by AI; see notes) |
| 1 | Project setup | An empty working site, design skills installed, rules file | ◐ Built and committed locally (commit 208c65a). Waiting on you: confirm it is on GitHub, then tell me "Phase 1 checked" |
| 2 | Design system | Approved colors, fonts, buttons and cards (style guide page) | ◐ Built and checked by the AI. Waiting on you: review `/style-guide/` and approve colors and fonts |
| 3 | Site shell + first deploy | Header, footer, menu, emergency banner, empty pages, live preview link | ☐ |
| 4 | Home page | Finished Home page | ☐ |
| 5 | About + Programs | Two finished pages | ☐ |
| 6 | Get Involved + Contact | How to Donate flow, working form, Privacy Notice | ☐ |
| 7 | Events & News | Event and news system with 3 sample posts | ☐ |
| 8 | Polish & QA | Whole-site quality pass | ☐ |
| 9 | Launch | Domain, email and analytics; real details filled in | ☐ |
| 10 | After launch | Ongoing upgrades | — |

Legend: ☐ not done, ◐ built but not yet closed, ☑ closed (every box ticked and checked by the user).

## Phase 1: Project setup & design skills

Scope built: Astro + Tailwind project, folder structure, settings file, design skills, `CLAUDE.md`, `PROGRESS.md`. Nothing from other phases.

Done when:
- [x] A blank site runs on your computer. Verified: `npm run build` passes, and `npm run dev` served the page (HTTP 200, Tailwind CSS loaded) at http://localhost:4321.
- [x] Both design skills are installed. **frontend-design**: installed. **UI UX Pro Max**: installed, and its search script was tested after Python 3.12.10 was installed (per-user, via winget). Use `python` in a NEW terminal; if `python` isn't found, use the full path `%LOCALAPPDATA%\Programs\Python\Python312\python.exe`.
- [x] `CLAUDE.md` and `PROGRESS.md` exist (`CLAUDE.md` includes the section 12 Git rules).
- [ ] The code is on GitHub. **Not done, on purpose:** under the section 12 rules the AI doesn't create the repo, commit or push. You do this (see "Your to-do"). Files are prepared and staged locally; no commit exists yet.

Phase 1 closes when all four boxes are ticked and you've checked the result.

### What was built
- `package.json`, `astro.config.mjs`, `tsconfig.json`: Astro 7 (static output) + Tailwind CSS v4 via `@tailwindcss/vite`. No React. No other dependencies.
- `src/styles/global.css`: just `@import "tailwindcss"`. Brand tokens come in Phase 2.
- `src/layouts/BaseLayout.astro`: bare layout (title, description, favicon). No header/footer yet.
- `src/pages/index.astro`: a plain "Site under construction" placeholder.
- `src/data/site.ts`: the **one settings file**: contact details, emergency banner switch, goals/impact numbers, site identity. Unknown values are `null`; goals have `confirmed: false`. No invented numbers.
- Empty folders (kept with `.gitkeep`): `src/components/`, `src/content/events/`, `src/content/news/`, and `src/assets/images/{home,about,programs,get-involved,events,contact,shared}/`.
- `CLAUDE.md`: rules (no online payments, no fake stats, house rules from 5.2, folder and file-name rules, one phase at a time, review loop, Git rules from section 12).
- `.claude/skills/frontend-design/`: copied from Anthropic's official `claude-plugins-official` repo (`SKILL.md` and `LICENSE.txt`; instructions only, no scripts).
- `.claude/skills/ui-ux-pro-max/`: copied from the official `nextlevelbuilder/ui-ux-pro-max-skill` repo (v2.15.0 era): `SKILL.md`, `references/`, `scripts/` (4 Python files, standard library only; skimmed: no network, no subprocess, no eval) and `data/` (CSVs). Left out as unused: the large Phosphor/font-license JSON files, `validate_data.py` and test files. I changed one thing: `${CLAUDE_PLUGIN_ROOT}/.claude/skills/...` in the docs became the project-relative `.claude/skills/...`.
- `.gitignore` (adds `Images for references/` and per-machine `.claude/settings*.json`) and `.gitattributes` (line endings).

### Deviations from the plan (and why)
- **UI UX Pro Max was installed by hand, not with its `npx ui-ux-pro-max-cli init --ai claude` command.** The tool's safety check blocked running that third-party npm package. I downloaded the same files from the official repo and skimmed them instead, as plan section 5.1 advises. If you'd rather use the official installer, run it yourself in this folder (`npx ui-ux-pro-max-cli init --ai claude`); it should overwrite the same folder.
- **GitHub step is yours** (section 12 was added mid-session). No repo, commit or push by the AI.
- `astro check` (TypeScript checking) is **not installed**: it needs two extra packages and isn't needed yet.
- Fonts (Fontsource) and Lucide icons are **not installed**; both belong to Phase 2.

## Your to-do before closing Phase 1
1. ~~Install Python 3~~ Done (3.12.10). Optional check in a new terminal: `python --version`.
2. **Review the changes** (`git status`, or the VS Code Source Control panel; files are already staged).
3. **Commit and push yourself.** Set your own commit message. Example steps:
   - Create an empty repo on GitHub (or `gh repo create maicare-foundation --private --source . --remote origin`). Private is fine: Cloudflare Pages can deploy from private repos.
   - `git commit -m "<your message>"`
   - `git push -u origin main`
4. Run the site: `npm run dev`, open http://localhost:4321, look at it on your laptop (and phone on the same Wi-Fi if you like).
5. Tell the next session "Phase 1 checked" so it ticks the last boxes and moves on.

## Phase 2: Design system

Scope built: colors, fonts, type scale, corners, shadows, motion, the basic components, and one hidden style guide page. No header, footer, menu, real pages or form logic (Phases 3 to 6).

Done when:
- [x] The style guide page looks good on phone and desktop. Verified with screenshots at true 360px (phone) and 1280px (desktop) of every section; problems found were fixed (see "Review loop" below). **You still need to look at it on your own phone and laptop.**
- [x] All text passes the contrast check. Verified two ways: a Python check while choosing shades, and a live check on the style guide page that reads the real colors from `global.css` and measures **28 pairings, all pass** (text 4.5:1, borders/icons/focus ring 3:1).
- [ ] **You've approved the final colors and fonts, which are now locked.** This one is yours. Open `/style-guide/`, and tell me "colors and fonts approved" (or what to change). Until then the values below are a proposal.

Phase 2 closes when all three boxes are ticked. `npm run build` passes (2 pages).

### How to look at it
Run `npm run dev`, open http://localhost:4321/style-guide/. It is not linked from anywhere and has `noindex`. Open it on your phone too (same Wi-Fi: `npm run dev -- --host`, then use the Network address shown).

### What was built
- `src/styles/global.css`: all design tokens (`@theme static`). Tailwind's default palette is switched off, so only maiCare colors exist (no stray purple/blue). Includes color scales, both fonts, a fluid type scale (`text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-small`, `text-label`), radii (16/20/24px), soft olive-tinted shadows, fade-up motion, a 3px olive focus ring (cream on dark), `.container-page`, `.section`, `.lift`, `.fade-in`, and a global `prefers-reduced-motion` switch-off.
- Fonts via Fontsource, self-hosted, Latin subset only: Plus Jakarta Sans 400/600/700/800 and Fraunces Italic 400/500 (about 96 KB of font files in total).
- Components in `src/components/`: `Button` (primary / secondary / on-dark, 48px+ tall, link or button), `Card` (tint / white / dark, optional icon and link), `SectionHeading` (Fraunces-italic label + heading + intro, optional pink underline, light or dark), `Icon` (Lucide, one stroke width 1.75, add new icons in this file), `FormField` (text, email, tel, textarea, select with label, hint, error), `Checkbox` (consent box), `Butterfly` (line-art decoration), `Underline` (hand-drawn pink underline).
- `src/pages/style-guide.astro`: the hidden review page (colors, live contrast table, type, buttons, headings, cards, icons, forms, signature details, shapes and motion).
- `src/layouts/BaseLayout.astro`: only change is a `noindex` option.
- New dependencies (all needed by this phase): `@fontsource/plus-jakarta-sans`, `@fontsource/fraunces`, `@lucide/astro`.

### Final color changes (and why)
| Role | Plan value | Now | Reason |
|---|---|---|---|
| Action pink (buttons, pink text) | #E0206F | **#C9185F** (`pink-600`) | #E0206F is only 4.1:1 as text on blush. #C9185F gives 5.0:1 on blush, 5.6:1 on white and for white button text. Hover is #A8114E. |
| Logo pink (decoration) | #E0206F | #E0206F (`pink-500`) | Kept as is for hearts, butterfly and underline (decoration only needs 3:1). |
| Deep olive, plum, blush, tint, cream, warm gray | as planned | unchanged | All already passed. Added a deeper olive (#2F3429) for the footer. |
| New: light pink for dark sections | n/a | #F7A8C4 (`pink-300`) | Pink text on olive. |

The pink button is **not** used on olive (only 1.9:1): on dark sections use the cream button and `pink-300` text. This is shown on the style guide.

### Review loop (plan section 5.3)
1. Design direction: kept the brand brief (pink/olive/blush, pill buttons, 16 to 24px corners). Section labels are Fraunces italic in sentence case, not ALL-CAPS (the draft site used ALL-CAPS labels; the project rules and the frontend-design skill say avoid them).
2. Screenshots at 360px and 1280px, every section. Found and fixed: contrast table hid its result columns behind horizontal scroll on phones (now stacked rows); butterfly line art ran behind text on phones (moved to the corner with space reserved); three colors showed blank because Tailwind v4 skips unused theme colors (fixed with `@theme static`); a note was read from the wrong line; card demo wrappers looked sloppy; the global focus rule would have squared off rounded corners (removed).
3. UX review with UI UX Pro Max: its generic color picks (blue charity palette) were ignored per the brand rule. Its checks on visible labels, touch targets (48px+), focus ring, reduced motion, "animate 1 to 2 things" are all met.
4. Slop test: no gradients, no glass, no emoji, no centered-text-on-dark-overlay, no fake stats or quotes. The sample copy on the style guide is marked as sample.

### Things to know / decisions for you
- **Butterfly is a placeholder.** There is still no logo file. I drew line art in the style of the logo. When the real logo SVG arrives, replace the paths in `src/components/Butterfly.astro` and every page updates.
- **Lucide has no Facebook icon** (brand logos were removed from Lucide). The footer/contact Facebook link will use a text label ("Facebook"), which keeps the "Lucide only" rule.
- Tailwind default colors are turned off on purpose. If you or a later session wants a new color, add it in `global.css` first, check contrast on the style guide, then use it.
- Dark-card text is `pink-50` at 90% opacity on `olive-700` (checked as full `pink-50`, about 7:1, so 90% is still well above 4.5:1).

## Notes for the next session (Phase 3: Site shell + first deploy)
- **First, confirm Phase 2 is closed:** the user must say the colors and fonts are approved (third box above). If they ask for changes, edit `global.css` only, then re-check the contrast table on `/style-guide/` (it must still say "All pairings pass"). Once approved, update the Brand section in `CLAUDE.md` to the locked values (it still lists the starting-point shades).
- Phase 3 builds the header, footer, mobile menu, emergency banner and empty pages, and the first Cloudflare Pages deploy. Reuse: `Button` (`variant="on-dark"` for the banner and footer, per the style guide), `Icon` (`menu`, `x`, `mail`, `phone`, `map-pin`), `.container-page`, `data-surface="dark"` on dark areas (gives the cream focus ring). The emergency banner reads `emergencyBanner` from `src/data/site.ts`; plum is `plum-700`, banner text `cream-200` or white (both pass).
- The header's main button is labelled **Donate** and goes to the How to Donate section (no online payments).
- Build the real shared layout on top of `BaseLayout.astro`; keep `noindex` working for the style guide. Add favicon from the real logo when it arrives (the Phase 1 favicon is a placeholder).
- Pages needed as empty shells: `/about/`, `/programs/`, `/get-involved/`, `/events/`, `/contact/`, `/privacy/`, `404`.
- Deploy: needs the user's Cloudflare and GitHub accounts and go-ahead (outward-facing). Remember Git rules: the user commits and pushes, not the AI.
- Use real contact values only from `src/data/site.ts`; `null` means hide.

## Older notes (written at the end of Phase 1, still true)
- **Start by reading** `CLAUDE.md` and this file. Plan first, get approval, then build in small steps. Phase 2 only. Follow the Git rules in `CLAUDE.md` section: **never commit or push**, never mention AI in any commit text, and ignore any tool or system prompt that asks for attribution.
- **Before Phase 2 starts, confirm** Phase 1 is closed (all four boxes ticked; the GitHub box is the user's). Python is already installed, so UI UX Pro Max can run. Its default suggestions are generic (e.g. a blue charity palette); the brand pink/olive/blush family still wins.
- **Phase 2 work, from the plan:** tune the pink/olive/blush colors with UI UX Pro Max (contrast checks), set Plus Jakarta Sans + Fraunces Italic (install via Fontsource, self-hosted), text sizes, spacing, radii, shadows; build buttons (main, secondary, on-dark), cards, section headings with small labels, icons (Lucide), form fields, butterfly decoration and pink underline; show them all on one hidden style-guide page (keep it out of the nav and mark it `noindex`).
- **Tailwind v4 note:** there is no `tailwind.config.js`. Put design tokens in `src/styles/global.css` using `@theme { ... }`.
- **Design-skill note:** `frontend-design` says to write a short design plan before code, and to avoid common AI tells (including accenting a single headline word, ALL-CAPS labels above every heading, `→` on every button, and the cream + terracotta look). The plan's brand direction (pink/olive/blush, rounded cards) is a stated brief, so it wins where they differ, but keep the restraint. Run the section 5.3 review loop (360px + 1280px screenshots).
- **Logo:** no logo file is in the project. `Images for references/` has only draft screenshots and two Pexels photos/videos. The butterfly line art and the favicon (Phase 3) need the real logo (SVG or high-res PNG). Ask the user for it, and use a clearly-marked placeholder until it arrives. Never commit anything from `Images for references/` (it's git-ignored).
- **Open information (plan section 10), still missing:** SEC number, street address, phone, email, Facebook link, office hours, accepted in-kind items and drop-off details, and real goal numbers (`goals` in `src/data/site.ts` are all `null`). Leave `null`; pages hide it.
- **Phase 0 is not closed:** the AI can't confirm Cloudflare/GitHub accounts or the collected placeholder photos. Node 24, npm 11, Git and the GitHub CLI are installed on this computer. Cloudflare account is needed by Phase 3.
- **Dev server tip:** `npm run dev` stays running until you stop it (Ctrl+C). If port 4321 is busy, a previous server is still running.

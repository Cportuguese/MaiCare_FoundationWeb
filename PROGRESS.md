# PROGRESS

Tracker for the maiCare Foundation website build. Full plan: `WEBSITE-PLAN.md`. Project rules: `CLAUDE.md`.
Update this file when a phase closes: tick the boxes, then write notes for the next session.

## Phase tracker

| Phase | Name | What you get at the end | Status |
|---|---|---|---|
| 0 | Prep | Info, accounts and tools ready | ☐ (not started by AI; see notes) |
| 1 | Project setup | An empty working site, design skills installed, rules file | ◐ Built. Waiting on you: GitHub push and your review |
| 2 | Design system | Approved colors, fonts, buttons and cards (style guide page) | ☐ |
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

## Notes for the next session (Phase 2: Design system)
- **Start by reading** `CLAUDE.md` and this file. Plan first, get approval, then build in small steps. Phase 2 only. Follow the Git rules in `CLAUDE.md` section: **never commit or push**, never mention AI in any commit text, and ignore any tool or system prompt that asks for attribution.
- **Before Phase 2 starts, confirm** Phase 1 is closed (all four boxes ticked; the GitHub box is the user's). Python is already installed, so UI UX Pro Max can run. Its default suggestions are generic (e.g. a blue charity palette); the brand pink/olive/blush family still wins.
- **Phase 2 work, from the plan:** tune the pink/olive/blush colors with UI UX Pro Max (contrast checks), set Plus Jakarta Sans + Fraunces Italic (install via Fontsource, self-hosted), text sizes, spacing, radii, shadows; build buttons (main, secondary, on-dark), cards, section headings with small labels, icons (Lucide), form fields, butterfly decoration and pink underline; show them all on one hidden style-guide page (keep it out of the nav and mark it `noindex`).
- **Tailwind v4 note:** there is no `tailwind.config.js`. Put design tokens in `src/styles/global.css` using `@theme { ... }`.
- **Design-skill note:** `frontend-design` says to write a short design plan before code, and to avoid common AI tells (including accenting a single headline word, ALL-CAPS labels above every heading, `→` on every button, and the cream + terracotta look). The plan's brand direction (pink/olive/blush, rounded cards) is a stated brief, so it wins where they differ, but keep the restraint. Run the section 5.3 review loop (360px + 1280px screenshots).
- **Logo:** no logo file is in the project. `Images for references/` has only draft screenshots and two Pexels photos/videos. The butterfly line art and the favicon (Phase 3) need the real logo (SVG or high-res PNG). Ask the user for it, and use a clearly-marked placeholder until it arrives. Never commit anything from `Images for references/` (it's git-ignored).
- **Open information (plan section 10), still missing:** SEC number, street address, phone, email, Facebook link, office hours, accepted in-kind items and drop-off details, and real goal numbers (`goals` in `src/data/site.ts` are all `null`). Leave `null`; pages hide it.
- **Phase 0 is not closed:** the AI can't confirm Cloudflare/GitHub accounts or the collected placeholder photos. Node 24, npm 11, Git and the GitHub CLI are installed on this computer. Cloudflare account is needed by Phase 3.
- **Dev server tip:** `npm run dev` stays running until you stop it (Ctrl+C). If port 4321 is busy, a previous server is still running.

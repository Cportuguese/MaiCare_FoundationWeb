# PROGRESS

Tracker for the maiCare Foundation website build. Full plan: `WEBSITE-PLAN.md`. Project rules: `CLAUDE.md`.
Update this file when a phase closes: tick the boxes, then write notes for the next session.

## Phase tracker

| Phase | Name | What you get at the end | Status |
|---|---|---|---|
| 0 | Prep | Info, accounts and tools ready | ☐ (not started by AI; see notes) |
| 1 | Project setup | An empty working site, design skills installed, rules file | ☑ Closed. Pushed to GitHub (commit 208c65a; `main` matches `origin/main`) |
| 2 | Design system | Approved colors, fonts, buttons and cards (style guide page) | ☑ Closed. Colors and fonts approved and locked |
| 3 | Site shell + first deploy | Header, footer, menu, emergency banner, empty pages, live preview link | ◐ Built and checked by the AI. Waiting on you: review it, deploy to Cloudflare Pages (steps below), and confirm the live link works |
| 4 | Home page | Finished Home page | ◐ Built and checked by the AI. Waiting on you: look at it on your phone and laptop, then tell the next session "Phase 4 checked" |
| 5 | About + Programs | Two finished pages | ◐ Built and checked by the AI. Waiting on you: look at both pages on your phone and laptop, confirm the wording (see Phase 5 notes), then tell the next session "Phase 5 checked" |
| 6 | Get Involved + Contact | How to Donate flow, working form, Privacy Notice | ◐ Built and tested by the AI. Waiting on you: get a Web3Forms key, add it, send one real test message per option, read the Privacy Notice and goods lists, then tell the next session "Phase 6 checked" (see Phase 6 notes) |
| 7 | Events & News | Event and news system with 3 sample posts | ◐ Built and tested by the AI. Waiting on you: look at the Events page, a post page and Home on your phone and laptop, then tell the next session "Phase 7 checked" (see Phase 7 notes) |
| 8 | Brand refresh + Polish & QA | New logo, colors, fonts and brochure wording; then a whole-site quality pass | ☐ |
| 9 | Launch | Domain, email and analytics; real details filled in | ☐ |
| 10 | After launch | Ongoing upgrades | — |

Legend: ☐ not done, ◐ built but not yet closed, ☑ closed (every box ticked and checked by the user).

## Phase 1: Project setup & design skills

Scope built: Astro + Tailwind project, folder structure, settings file, design skills, `CLAUDE.md`, `PROGRESS.md`. Nothing from other phases.

Done when:
- [x] A blank site runs on your computer. Verified: `npm run build` passes, and `npm run dev` served the page (HTTP 200, Tailwind CSS loaded) at http://localhost:4321.
- [x] Both design skills are installed. **frontend-design**: installed. **UI UX Pro Max**: installed, and its search script was tested after Python 3.12.10 was installed (per-user, via winget). Use `python` in a NEW terminal; if `python` isn't found, use the full path `%LOCALAPPDATA%\Programs\Python\Python312\python.exe`.
- [x] `CLAUDE.md` and `PROGRESS.md` exist (`CLAUDE.md` includes the section 12 Git rules).
- [x] The code is on GitHub. Done by the user (the AI doesn't commit or push, per section 12). Verified read-only: remote `origin` is https://github.com/Cportuguese/MaiCare_FoundationWeb.git, and `git status` shows `main` level with `origin/main`.

Phase 1 is closed: all four boxes ticked.

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
- [x] **You've approved the final colors and fonts, which are now locked.** The user asked the AI to approve "what's best for my UI", so the proposed shades and fonts below were kept as final. The Brand section of `CLAUDE.md` now holds the locked values. To change one later, edit `global.css` and re-check the contrast table.

Phase 2 is closed: all three boxes ticked. `npm run build` passes (2 pages).

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

## Phase 3: Site shell + first deploy

Scope built: shared layout (emergency banner, sticky header, mobile menu, footer), all 7 pages as shells, the 404 page, page titles and descriptions, link-preview image, favicon. Nothing from Phases 4 to 9 (page content, form, Markdown posts, analytics).

Done when:
- [x] Every page can be reached from the header and footer, on phone and desktop. Verified: header, mobile menu and footer all list Home, About, Programs, Get Involved, Events & News and Contact (Privacy Notice is in the footer). A script checked all 194 internal links and anchors in the built site: 0 broken. Screenshots at 360px, 1024px and 1280px; no sideways scrolling at 360px.
- [x] The mobile menu works. Verified in a real browser: the button opens and closes the menu (`aria-expanded` updates), Escape closes it, tapping a link closes it, and it hides itself when the window grows to desktop size.
- [x] The emergency banner turns on and off from one setting. Verified: with `enabled: true` and a message in `src/data/site.ts` it appears on every page; with `enabled: false` nothing is rendered (0 matches in the built HTML). A visitor can close it; that is remembered for the visit only, and only for that exact message. The test values were put back afterwards (`site.ts` has no leftover test data).
- [ ] **The live preview link works. This one is yours** (needs your Cloudflare account and a push). Steps below. Until then Phase 3 stays open.

Phase 3 closes when all four boxes are ticked and you've checked the result. `npm run build` passes (9 pages).

### What was built
- `src/layouts/PageLayout.astro`: what every page uses (skip-to-content link, banner, header, `<main>`, footer). Adds " | maiCare Foundation" to page titles. `BaseLayout.astro` is still the bare document; the style guide uses it directly (so it has no header/footer and stays `noindex`).
- `src/components/Header.astro`: sticky; logo, 6 links, pink **Donate** button (to `/get-involved/#how-to-donate`), and a menu button below 1024px. The current page is marked (pink text and a small pink line). The Donate button stays visible on phones.
- `src/components/EmergencyBanner.astro`: plum bar driven by `emergencyBanner` in `src/data/site.ts`. Plain JavaScript only for closing it.
- `src/components/Footer.astro`: deep olive; description, SEC number, Contact us button, page links, address, phone, email, donation email, office hours, Facebook, copyright, Privacy Notice. **Every value that is `null` in `site.ts` is hidden.** Right now only the city, province and country line shows.
- `src/components/Logo.astro`: **placeholder text wordmark** ("mai" olive, "Care" pink, small heart, FOUNDATION). Replace its contents with the real logo SVG when it arrives.
- `src/components/PageShell.astro`: TEMPORARY. Page title plus dashed placeholder blocks and a "Placeholder page" note. Each page's own phase replaces it; delete the component when no page uses it.
- `src/data/nav.ts`: the one list of nav links, the Donate link and the Privacy link (header, menu and footer all read it).
- Pages: `index`, `about`, `programs`, `get-involved`, `events`, `contact`, `privacy` (shells with titles, descriptions and placeholder blocks listing the plan's sections) and `404` (finished). `get-involved` already has the anchors `#how-to-donate`, `#volunteer`, `#partner`, `#faq`.
- Link preview and icons: `BaseLayout.astro` now writes the Facebook/Messenger tags (title, description, image, locale). `public/og-image.png` (1200x630), `favicon.svg`, `favicon-32.png`, `favicon.ico` and `apple-touch-icon.png` are **placeholders** made from the placeholder butterfly (no logo file yet). They are listed in the new `MEDIA-LIST.md`. These replace Astro's default favicon files.
- `public/_headers`: tells search engines **not** to index the preview site, plus two small safety headers.
- `.node-version` (`24`): tells Cloudflare which Node to build with (this computer runs 24.19).
- `global.css`: one rule added (`scroll-padding-top`) so anchor links stop below the sticky header.

### Review loop (plan section 5.3)
1. Design direction: calm and light. Blush header with a thin pink border (no blur, no glass), olive footer with a cream button and pink-300 text, the butterfly only at page tops (it ran behind text in the footer, so it was removed there), Fraunces italic for labels.
2. Screenshots at 360px, 1024px and 1280px: pages, the open menu, the banner on, and a filled-in footer.
3. UX review (UI UX Pro Max checks plus my own measuring): touch targets are all 44px or more (one footer logo link was 42px and was fixed), 8px+ gaps between targets, content isn't hidden by the sticky header (anchor links land below it). Banner and footer contrast measured: cream on plum 7.9:1, white on plum 9.3:1, cream on olive 10.8:1, pink-300 on olive 6.9:1, current-page pink 6.1:1 or better.
4. Slop test: no gradients, glass, emoji or fake numbers. The shells say plainly that they are placeholders. The footer shows no invented details.
5. Bug found and fixed during testing: the banner's close button first did nothing (its script was written out as plain text). Fixed and re-tested.

### Your to-do before closing Phase 3
1. **Review** the changes (`git status`, or the Source Control panel). Run `npm run dev` and click around (http://localhost:4321). Try it on your phone too: `npm run dev -- --host`, then open the Network address shown.
2. **Commit and push yourself** (the AI never commits).
3. **Deploy to Cloudflare Pages** (free). Do this yourself, since it uses your accounts:
   1. Log in at dash.cloudflare.com, go to **Workers & Pages**, then **Create**, then **Pages**, then **Connect to Git**, and pick this GitHub repo (allow access to it when asked).
   2. Settings: **Production branch** `main`. **Build command** `npm run build`. **Build output directory** `dist`. Leave the framework preset as "Astro" if it offers it (or "None").
   3. Press **Save and Deploy**. After a minute you get a link like `https://<project-name>.pages.dev`.
   4. Open it on your phone. Check the header and menu, the Donate button, the footer links, the 404 page (type a wrong address), and share the link on Messenger or Facebook to see the preview image (Facebook caches old previews; use its Sharing Debugger to refresh).
   5. If the build fails because of the Node version, open the Pages project, go to **Settings, Variables and Secrets** and add `NODE_VERSION` = `24`.
4. Tell the next session **"Phase 3 checked"** (and paste the `.pages.dev` link if you like).

### Things to know / decisions for you
- **Phase 2 is now closed.** Colors and fonts were approved afterwards, the box is ticked and the Brand section of `CLAUDE.md` holds the locked values.
- **Logo, favicon and link-preview image are placeholders** until you give the real logo (SVG or high-res PNG). Then: replace `Logo.astro` and `Butterfly.astro`, and redo the five files listed in `MEDIA-LIST.md`.
- **Link-preview address:** Facebook needs full web addresses in these tags. While `identity.siteUrl` in `site.ts` is `null`, the build uses the address Cloudflare provides. In Phase 9, set `siteUrl` to the real domain. Locally (`npm run dev`) the image tags are left out, which is expected.
- **Search engines are blocked on purpose** while this is a preview (`public/_headers`). **In Phase 9, delete the `X-Robots-Tag` line**, or the live site will stay invisible to Google.
- **Nav labels:** the plan says "6 links", so I used Home, About, Programs, Get Involved, Events & News, Contact.
- Lucide has no Facebook icon, so the footer link is a text link ("Follow us on Facebook"). It appears only when `facebookUrl` is set.
- No other phase's work was touched. Phase 2's components were reused unchanged.

## Phase 4: Home page

Scope built: the real Home page (`src/pages/index.astro`), three placeholder photos, four new icons, and a "next event" setting. Nothing from Phases 5 to 9 (About, Programs, Get Involved, Contact form, Events system, polish, launch).

Done when:
- [x] Every Home section is finished on phone and desktop. Verified with screenshots at 1280px and at a true 360px (inside a 360px frame, because headless Chrome won't go narrower than about 500px). One column on phones, nothing clipped, no sideways scrolling. Sections that are intentionally absent or empty are listed under "Things to know" below.
- [x] The review loop passed, with no banned patterns (see "Review loop").
- [x] The Donate and Volunteer buttons go to the right places. Verified in the built HTML: Donate goes to `/get-involved/#how-to-donate`, Volunteer goes to `/get-involved/#volunteer`; every other link on the page points to a real page (`/contact/`, `/programs/`, `/events/`, `/get-involved/`).

`npm run build` passes (9 pages). **Not closed yet: waiting for your own check on your phone and laptop** (push, then open the `.pages.dev` link, or run `npm run dev`).

### What was built (top to bottom on the page)
1. **Hero**: split layout. Fraunces-italic place label, headline "Sharing hope. Extending a helping hand." (pink underline on "helping hand", the one underline on the page), the "With humble hearts..." line, short intro, **Donate** (primary) and **Volunteer** (secondary), and a note that giving starts with a message and the site takes no online payments. Photo on the right with the butterfly at its corner.
2. **Next-event strip**: white bar with date badge, event name and date. Driven by the new `nextEvent` in `src/data/site.ts` (see below).
3. **Who we help**: on white. Tall photo card (typhoon families) + wide photo card (students) + a plain tinted card (orphans and elderly, no photo). A "See our programs" button.
4. **Goals strip**: reads `goals` in `site.ts`. **It shows nothing right now**, because no goal is `confirmed: true` with a target. Once you confirm one, it appears (big number + label + year) between "Who we help" and "Ways to help".
5. **Ways to help**: dark olive section. A list (not cards): give money, give clothes or food, give your time, each with a text link, plus one cream "See all the ways to help" button.
6. **Events and news**: a calm "we are just getting started" band with a link to `/events/`. Phase 7 replaces it with the latest three posts.
7. **Final call to action**: tinted panel with the butterfly and a "Contact us" button. Phone and email appear under it only when they are set in `site.ts` (both are `null` now, so hidden).

Other changes:
- `src/data/site.ts`: new `nextEvent` block (on/off, title, date, place, time, link). Place and time are `null` and hidden. It hides itself after the date has passed (checked when the site is built).
- `src/components/Icon.astro`: added Lucide icons `cloud-lightning`, `graduation-cap`, `hand-coins`, `package` (same stroke width).
- Photos in `src/assets/images/home/`: `hero.jpg`, `focus-students.jpg`, `focus-storm.jpg`, shown with Astro `<Image>` (resized, WebP). Listed in `MEDIA-LIST.md`.
- No new dependencies. No changes to the layout, header, footer or colors.

### Review loop (plan section 5.3)
1. Design direction: written at the top of `index.astro`. Layouts differ section to section (split hero, strip, asymmetric grid, dark list, panel), with no "heading + 3 equal cards" run.
2. Screenshots at 1280px and 360px. Fixed after the first look: the storm photo made the left card far taller than the two on the right (now a fixed-height crop); the hero photo was small (columns are now equal).
3. UX review: touch targets 44px or more (buttons 48px+, text links `min-h-11`), 16px gutters, one primary pink button per section (hero only; the dark section uses the cream button), headings in order, photos have descriptive alt text, motion is only the existing soft fade-in. Colors use the locked pairings (pink-300 and pink-50 on olive-800, ink-600 on white and blush). I did not re-measure contrast on this page; it reuses pairings already measured in Phases 2 and 3.
4. Slop test: no gradients, glass, emoji, fake numbers, testimonials or quotes. Copy names San Carlos City and Pangasinan and explains the no-online-payment flow. Copy says "we want to..." because there is no track record yet.

### Things to know / decisions for you
- **Photos are the weakest part.** Pexels search is blocked for me, and I could not safely confirm a Philippine location for most Pexels photos. So I used two CC0 Wikimedia Commons photos taken in San Carlos City (a barangay hall sign and a school gate) and one Pexels photo that clearly shows Malabon, Metro Manila. They are plain documentary shots with no people being helped, and **none is captioned as beneficiaries**. All three are placeholders. Real photos (with guardian consent for children) will lift this page the most.
- **The students photo shows a readable school sign** (Balite Sur Elementary School). It might look like a partnership. Swap it before launch unless the foundation works with that school.
- **Nothing from `Images for references/` was used** (it is local-only; its sample photo also shows non-Filipino volunteers).
- **Please confirm the next event.** I put "maiCare Foundation launch" on 13 November 2026 (a Friday) from the plan. If the event name, date, time or place is different, edit `nextEvent` in `site.ts`. Set `enabled: false` to hide the strip.
- **Not on the page on purpose:** a featured story or quote (no real one exists) and goal numbers (none confirmed). The section 6 list had both; they come back when real content exists.
- **Contact buttons:** "Offer clothes or food" goes to `/contact/` as a plain link. Phase 6 should make it open the form with the right option preselected.
- Home copy about who we want to help (students, typhoon families, orphans and the elderly) comes from your brief and the plan, not from confirmed programs. Re-check it in Phase 5 when the Programs page is written.
- `PageShell.astro` is still used by the other six pages; leave it until Phases 5 to 7 are finished.

## Phase 5: About + Programs

Scope built: the real About page (`src/pages/about.astro`) and Programs page (`src/pages/programs.astro`), four new icons, and two new settings lists. Nothing from Phases 6 to 9. Home was not touched.

Done when:
- [x] Both pages are finished and reviewed on phone and desktop. Verified with screenshots at 1280px and at a true 360px (inside a 360px frame): one column on phones, no sideways scrolling, nothing clipped. Every internal link and anchor on both pages was checked against the built site: 0 broken. `npm run build` passes (9 pages).
- [x] Their layouts feel different from Home. Home is a split hero, a photo grid, a dark list and a panel. About is text-led (story + belief quote, a dark band of three big statements, a four-step timeline, people and partners, a facts list). Programs is jump links, three full-width rows that alternate sides, a ruled list of five areas, and a closing panel.

**Not closed yet: waiting for your own check on your phone and laptop**, and for you to confirm the wording below.

### What was built
- **About**: story with the belief "A little help, given with compassion, can change the course of a life." (pink underline on the h1, the only one on the page); Mission, Vision and Promise on dark olive; "How we work" timeline (Listen first, Plan together, Give where it was meant, Report openly); officers, trustees and partners; legal and transparency facts; closing line with one pink button. A link to the Privacy Notice sits in the legal section.
- **Programs**: header with jump links to the three focus groups; each focus group has who it helps, a "Help we need" list and a button to How to Donate (`/get-involved/#how-to-donate`); then the five program areas (Charitable, Educational, Livelihood, Health, Social welfare); closing panel with Contact and See ways to help.
- `src/data/site.ts`: new `officers` and `partners` lists (section 4). **Both are empty on purpose.** While empty, About shows "We will introduce our officers and trustees here soon" and "Our partners will be listed here once they agree to be shown." Add a line to a list and it appears. SEC number: shown in the legal facts only when `contact.secRegistrationNumber` is set.
- `src/components/Icon.astro`: added Lucide `clipboard-list`, `ear`, `heart-pulse`, `shield-check` (same stroke width).
- `PageShell.astro` is no longer used by About or Programs; it is still used by `get-involved`, `events`, `contact` and `privacy`. Leave it until Phases 6 and 7 are done.
- No new dependencies. No changes to the layout, header, footer, colors or Home.

### Review loop (plan section 5.3)
1. Design direction: written at the top of both page files.
2. Screenshots at 1280px and 360px. Fixed after the first look: the butterfly ran behind the last words of the belief quote (moved to the panel's top corner); the dark Mission band had too much empty space (padding reduced); duplicate hidden headings removed.
3. UX review: touch targets 44px or more (chips and text links `min-h-11`, buttons 48px+), 16px gutters, headings in order (one h1 per page), one pink button per section, motion is only the existing soft fade-in. Contrast measured: pink-600 on pink-100 4.61:1, pink-600 on blush 5.01:1, ink-600 on pink-100 5.61:1, ink-500 on white 5.49:1, pink-300 on olive-800 5.61:1. All pass 4.5:1.
4. Slop test: no gradients, glass, emoji, fake numbers, names, partners or testimonials. The one quote is the foundation's own belief statement, labelled "What we believe", not a person's testimonial. Copy names San Carlos City and Pangasinan.

### Things to know / decisions for you (please confirm)
- **Mission, Vision and Promise are copied word for word from your earlier draft** (the screenshots in `Images for references/`). Confirm them with the foundation. The Promise ("No part of our income goes to any member, trustee or officer. Every donation is used solely for our programs.") is a commitment donors will hold you to, so make sure the board agrees.
- **I made some draft wording more careful because there is no track record yet.** The draft said "We work with local government, schools, health workers and partner organizations". The page says "We plan to work with...". Change it back if those partnerships already exist. The four timeline steps are my plain-language version of the draft's "planned with the community and reported openly to our donors".
- **The five program areas** (Charitable, Educational, Livelihood, Health, Social welfare) come from the draft. I wrote "we are just getting started, so not every area has begun yet." Confirm the five areas are real, and edit or delete that sentence.
- **"Help we need" lists** are based on the draft and the plan (scholarships, school supplies and literacy programs; food, clothes and money for relief; food, clothes and volunteers for orphans and the elderly). Edit them in the `focusAreas` list at the top of `programs.astro` if the real needs differ.
- **No photos, on purpose.** I looked through CC0 photos tagged San Carlos and Pangasinan; the usable ones were school gates with readable school names (which could look like a partnership, and Home already has one), bridges and a billboard. Programs shows icon panels instead. To add a real photo, save it under the fixed name in `MEDIA-LIST.md`; no code change is needed. Photos have empty alt text because they are decoration beside full text; if a photo carries meaning, add alt text in `programs.astro`.
- The Programs "How to help..." buttons all go to `/get-involved/#how-to-donate`. Phase 6 can make them open the contact form with the right option preselected.
- Officer and partner names, logos and the SEC number are still missing (plan section 10).

## Phase 6: Get Involved + Contact

Scope built: the Get Involved page, the Contact page with a working form, the Privacy Notice, and a link helper so Donate buttons open the form with the right option picked. Nothing from Phases 7 to 9. Home, About, Programs, header and footer were not touched.

Done when:
- [ ] **A test message for each dropdown option arrives in the inbox. This one is yours.** It needs a Web3Forms access key, which comes from the foundation's inbox email (steps below). I could not do it: no key, and sending a real message is outward-facing. What I did verify is the form code (see below).
- [x] A Donate button opens the form with the right option picked. Verified in a real browser: all six links (`?topic=donate-money`, `donate-clothes`, `donate-food`, `volunteer`, `partner`, `other`) select the right option; an unknown topic is ignored. **How the path works:** the header's Donate button (and the Donate buttons on Home and Programs) still go to How to donate on Get Involved, as the project rules say. The buttons there ("Donate money", "Donate clothes", "Donate food", "Volunteer with us", "Talk about partnering", "Ask us a question") open the form with the option picked. So it is two clicks from the header, one click from Get Involved. If you want the Home and Programs buttons to skip straight to the form, say so (see "Optional follow-up").
- [x] The form is easy to fill in on a phone and shows clear success and error messages. Verified at true 360px with real Chrome and the Web3Forms request intercepted (no real message sent): empty form shows a message under every missing field in words, and focus jumps to the first one; a bad email or number is caught; mobile only or email only both work; success replaces the form with "Thank you, <first name>. We got your message." and moves focus to it; a server error and a lost connection both show a clear error, keep what the person typed, and re-enable the button; "Send another message" resets it. Fields are 52px tall, the button is 56px, no sideways scrolling.

`npm run build` passes (9 pages). All 289 internal links and anchors in the built site resolve (0 broken). No bank, GCash, QR or payment details anywhere.

### What was built
- **Get Involved** (`src/pages/get-involved.astro`): header with a plain "this website takes no online payments" note; **How to donate** (anchor `#how-to-donate`): the 3 steps from plan section 7 as big italic numerals; a connected panel with Money / Clothes / Food, each saying where it goes and opening the form with that option; **Giving goods** (`#goods`): what we can take, what we cannot take (hidden while empty), drop-off place and hours (or "we will tell you once you contact us"); **Our promise** as a pull quote; **Volunteer** (`#volunteer`); **Partner** (`#partner`, dark olive, cream button); **FAQ** (`#faq`, six questions, native `<details>` so no JavaScript). The anchors the header, Home, About and Programs already link to all work.
- **Contact** (`src/pages/contact.astro`): the form in a white card beside a dark olive card with address, phone, emails, office hours and Facebook (each shown only if set in `site.ts`), a plain "what happens next", and a lazy-loaded Google map with an "Open in Google Maps" link.
- **Form** (`src/components/ContactForm.astro`): "I would like to…" (Donate money, Donate clothes, Donate food, Volunteer, Partner with us, Something else), name, email and mobile (give at least one), message, a required consent checkbox linking to the Privacy Notice, and a hidden spam-trap field. Sends to Web3Forms with a readable subject such as "maiCare website: Donate food (Name)". Plain JavaScript only. Without JavaScript it still posts to Web3Forms.
- **Privacy Notice** (`src/pages/privacy.astro`): plain-words summary, who we are, what we collect, why, who sees it (Web3Forms, email provider, Google map), how long, how we protect it, the seven rights under the Data Privacy Act of 2012, how to complain to the National Privacy Commission, children, changes. Update the "Last updated" date in the file when the text changes.
- `src/data/nav.ts`: `contactTopics` (the six options) and `contactHref('donate-food')`, which builds `/contact/?topic=donate-food#contact-form`. Use it for any new button that should open the form.
- `src/data/site.ts`: new `contactForm` (`web3formsAccessKey`, `mapQuery`) and `inKind` (accepted and not-accepted goods, drop-off place and hours).
- No new dependencies, no new icons, no changes to colors or other layouts. `PageShell.astro` is now used only by `events.astro` (Phase 7).

### Review loop (plan section 5.3)
1. Design direction: written at the top of each page file. Get Involved differs from the others: steps as big numerals (not About's timeline), one connected panel (not three cards), a pull quote, a tinted split panel, a dark band, then FAQ rows. Contact is a form card plus a dark details card. Privacy is a quiet single reading column.
2. Screenshots at 1280px and a true 360px (Chrome device emulation) of all three pages. Fixed after the first look: two places where a link ran into the text before it ("See ourPrivacy Notice").
3. UX review: touch targets 44px or more, 16px gutters, one h1 per page, headings in order, one pink button per section (Get Involved's How to donate buttons are all secondary; Volunteer has the pink one), visible labels (never placeholder-only), errors in words and not only color, `aria-invalid` and `aria-describedby` set, focus moved on error and on success, buttons say exactly what happens. Colors reuse pairings measured in earlier phases. I did not re-measure contrast on these three pages.
4. Slop test: no gradients, glass, emoji, fake numbers, names, partners or testimonials. The one quote is the foundation's own promise, labelled as such. Copy names San Carlos City and Pangasinan and uses "we want to / we will", not results.
5. One caution found while reviewing: an empty `email=` field would have been sent to Web3Forms when someone gave only a mobile number. Empty email and mobile fields are now left out of the request. Re-tested in the browser afterwards: the request now carries only the mobile number, and every other check above still passes.

### Your to-do before closing Phase 6
1. **Get the Web3Forms key.** Go to web3forms.com, enter the email that should receive all messages (the foundation's inbox, plan section 10), and they email you an access key. Paste it into `contactForm.web3formsAccessKey` in `src/data/site.ts`. The key is meant to be public, so it is safe to commit.
2. **Until the key is set**, the live site shows "Our message form is almost ready" instead of the form (so nobody types into a form that cannot send). `npm run dev` shows the form anyway, with a "Preview only" note.
3. **Test for real:** run `npm run dev` (or use the live link after pushing) and send one message for each of the six options. Check each one arrives, and that the subject and body look right. Check one from your phone.
4. **Read the Privacy Notice** with the foundation (ideally a lawyer or whoever is the data protection contact). It describes only what the site does today. Points to confirm: how long messages are kept (written as "as long as we need it to reply, and as long as the law requires for donation records"), "only the people at maiCare who read messages", and the children line.
5. **Check the goods lists.** `inKind.accepted` has three lines taken from the Programs page (food, clothes in good condition, school supplies). `notAccepted` and the drop-off place and hours are empty and hidden. Fill them in `site.ts` once confirmed.
6. Commit and push yourself, then tell the next session **"Phase 6 checked"**.

### Things to know / decisions for you
- **Wording to confirm** (the page does not mark these as drafts, so please read them before launch): the volunteer and partner idea lists (taken from the Programs page and the plan), the six FAQ answers, and the "Our promise" quote, which repeats the About page's Promise (itself copied from your draft and still needing the board's okay).
- **Nothing in the form can be a payment.** The Privacy Notice and Contact page both say so, and the Contact page says "we will never ask you to send money through a link."
- **Map:** it points at "San Carlos City, Pangasinan, Philippines" until the street address is known. Set `contactForm.mapQuery` (and `contact.address.street`) in `site.ts` then. The map loads from Google, which is why the Privacy Notice mentions it.
- **Web3Forms free plan:** fine for a small foundation. It has a monthly message limit and a spam filter; if spam ever becomes a problem, Web3Forms offers hCaptcha.
- **Phase 9:** when analytics is added, the Privacy Notice needs a line about it.

### Optional follow-up (not done, because it touches other phases)
Home and Programs still send their buttons to How to donate. To make them open the form directly, swap the links using `contactHref(...)`: Home `src/pages/index.astro` lines near 263 ("Offer clothes or food", currently `/contact/`) and the Donate / money links; Programs `src/pages/programs.astro` line 189 (`donateLink.href` in the "How to help..." buttons). Say the word and the next session can do it.

## Email setup (decided by the user after Phase 6): read this in every later phase
- **The foundation's email for now is `maicarefoundation@gmail.com`.** It is set as `contact.emailInfo` in `src/data/site.ts`, so it already shows in the footer, on the Contact page, in the form's error message and in the Privacy Notice. `emailDonate` stays `null` (no separate donations address yet); the page hides it.
- **The Web3Forms key is still missing and is the user's step.** It is emailed to that Gmail when they register that address at web3forms.com. Paste it into `contactForm.web3formsAccessKey` in `site.ts`. Do not invent or guess a key. Until it is set, the live site shows "Our message form is almost ready" (the email address still shows, so people can write directly).
- **Never hard-code the email in a page.** Always read it from `site.ts` (`contact.emailInfo`). Any new page or component (Phase 7 events, Phase 8 polish) must use the same setting.
- **Phase 8 (QA):** check that the address shows in the footer, on Contact and on Privacy, that `mailto:` links open, and that the form key is set and a real test message from each of the six options reaches that Gmail (see the Phase 6 box, which is still open).
- **Phase 9 (Launch):** when the domain is bought, set up `info@` and `donate@` with Cloudflare Email Routing forwarding to this Gmail, then update `emailInfo` and `emailDonate` in `site.ts`. The Web3Forms key is tied to the inbox it was made for, so create a **new key** for the new address (or keep the Gmail as the form inbox and keep the same key) and update `web3formsAccessKey`. Re-send a test message afterwards. Also tell the Privacy Notice's owner if the inbox provider changes (it names "our email provider" generally, so no text change is needed for Gmail or a forward).

## Brand refresh (added by the user after Phase 6): done in Phase 8
- **New official materials:** `Images for references/logo.jpg` (the new logo: sage "mai", rose-pink "Care" with a heart over the "i", FOUNDATION, EST. 2026, "Kindness everywhere…" script tagline; no butterfly) and `Images for references/text.jpg` (the printed tri-fold brochure: About, Mission, Vision, Our Heart, Our Focus, taglines).
- **Phase 8 now starts with a brand refresh**, before the polish and QA pass: logo, colors, fonts, signature details and wording. The full steps, the decision on what to adopt (the brand yes, the print layout no) and the sampled starting colors are in **`WEBSITE-PLAN.md`, Phase 8**.
- **Until Phase 8, keep the current locked brand.** Phase 7 builds with today's tokens and components.
- **To keep the refresh easy, Phase 7 must:**
  - never hard-code colors or fonts outside `global.css`
  - reuse the shared `Logo`, `Butterfly` and `Underline` components instead of drawing new decorations, so Phase 8 can swap each one in one place
  - not write new copy that repeats the draft's Mission and Vision wording (it is being replaced)

## Phase 7: Events & News

Scope built: the events and news system (Markdown files), the Events & News page, a page for every post, photo galleries, the Home "latest 3" section, three sample posts and a how-to guide. Nothing from Phases 8 and 9. About, Programs, Get Involved, Contact and Privacy were not touched.

Done when:
- [x] Adding one new post file makes it appear everywhere it should. Verified with five temporary test files (since removed): an event and a news post each showed up on the Events & News page, on their own new page, and (when among the newest three) on Home, with no code changes. A multi-day event with a cover photo and a two-photo gallery rendered correctly.
- [x] Events move from "upcoming" to "past" automatically by date. Verified with temporary events dated yesterday, today, tomorrow and spanning today: yesterday's went to Past; today's, tomorrow's and the multi-day one stayed Upcoming. The rule: upcoming through the last day (Philippine date), past from the next day. **It is decided when the site is built**, so it changes on the next push or rebuild (see "Things to know").
- [x] Reviewed on phone and desktop. Verified with screenshots at 1280px and a true 360px (iframe) of the Events page, a post page with cover and gallery, and Home. One column on phones, no clipped text, 0 broken links of 355 checked.

`npm run build` passes (12 pages: the 9 before plus the 3 sample posts). **Not closed yet: waiting for your own check.**

### What was built
- **Content system**: `src/content.config.ts` (two collections, `events` and `news`, with checks that give a clear build error for a bad date, a cover with no description, and so on). One Markdown file per post: `src/content/events/<name>.md` becomes `/events/<name>/`, `src/content/news/<name>.md` becomes `/news/<name>/`.
- **Helpers**: `src/data/posts.ts` is the one place that reads the files, splits upcoming and past, sorts, formats Philippine-style dates ("Fri, Nov 13, 2026", "Nov 4 to 8, 2026") and picks Home's latest three. Pages never compare dates themselves.
- **Events & News page** (`src/pages/events.astro`): header with jump links; **Upcoming** as ruled rows in one white panel with date badges; **Past events** as image-led cards (a tinted icon panel when there is no cover photo); **News** as a text-led dated list; closing panel with the one pink button (Volunteer, via `contactHref('volunteer')`). Each empty section has an honest "we are just getting started" note.
- **Post pages** (`src/pages/events/[slug].astro`, `src/pages/news/[slug].astro`, both using `src/components/PostDetail.astro`): back link, labels, title, summary, date / time / place (hidden if missing), cover photo, the Markdown body, a photo gallery for events, and a closing panel. The link-preview image is the cover photo when there is one.
- **Components**: `PostCard.astro` (used on Home and Past events), `Prose.astro` (styles Markdown text from the design tokens), `PostDetail.astro`. Two icons added to `Icon.astro` (`newspaper`, `arrow-left`, same stroke width).
- **Home**: the "we are just getting started" band is replaced by the latest three posts (still shown as the empty state if there are no posts). Nothing else on Home changed.
- **Small changes to shared files**: `PageLayout.astro` got an optional `noindex` setting; `Header.astro` now keeps "Events & News" marked on post pages.
- **Sample posts** (three files, all `sample: true`): an upcoming event (12 Dec 2026), a past event (10 Oct 2026) and a news post (2 Nov 2026). Each says in its first line that it is a sample, shows a "Sample" label on cards and a notice on its page, and is hidden from search engines. They contain no names, numbers or photos.
- **Guide**: `HOW-TO-ADD-POSTS.md` (project root) for whoever updates the site.
- `PageShell.astro` is no longer used by any page. **It still exists**: my attempt to delete it was blocked, so please delete `src/components/PageShell.astro` yourself (or tell the next session to).
- No new dependencies. No changes to colors, fonts or other pages.

### Review loop (plan section 5.3)
1. Design direction: written at the top of `events.astro`. The page differs from the others: calendar-style ruled rows, then image cards, then a text-only news list. No "heading + 3 cards" run. The pink underline is used once (the h1).
2. Screenshots at 1280px and 360px. Fixed during build: the multi-day date read "4 to Nov 8, 2026" (now "Nov 4 to 8, 2026"); two sections pointed their accessibility label at an id that did not exist.
3. UX review: whole cards and rows are one link each with a visible keyboard focus ring, touch targets 44px or more, 16px gutters, one h1 per page, headings in order, one pink button per section, every cover and gallery photo needs a description (the build refuses a cover without one), soft fade-in only. Colors reuse measured pairings (pink-600 on pink-100 4.61:1, olive-800 on olive-100, ink-500 on white 5.49:1). I did not re-measure contrast on these pages.
4. Slop test: no gradients, glass, emoji, fake stats, names or testimonials; samples are labelled everywhere they appear; no stock photo is ever used as an event photo.

### Your to-do before closing Phase 7
1. Run `npm run dev` (or push and open the `.pages.dev` link) and look at `/events/`, one post page and Home on your phone and laptop.
2. Read `HOW-TO-ADD-POSTS.md`. Try adding a real post (or a `draft: true` one) yourself if you like.
3. **Delete `src/components/PageShell.astro`** (unused).
4. Decide the launch event: `nextEvent` in `site.ts` (the Home strip) is still a separate setting, and no real "launch" post exists. Either leave it, or add a real post for it and set `nextEvent.enabled` to `false`.
5. **Before launch (Phase 8/9), delete the three sample files.**
6. Commit and push yourself, then tell the next session **"Phase 7 checked"**.

### Things to know / decisions for you
- **Dates update on rebuild, not at midnight.** The site is static. If a week may pass between pushes, set up an optional free daily rebuild (Cloudflare Pages deploy hook; steps are in `HOW-TO-ADD-POSTS.md`). That is yours to set up.
- **Sample posts show on Home and the Events page** (labelled "Sample") until real posts replace them. They are hidden from search engines but visible on the preview site.
- **Home shows the three posts with the latest dates**, so a far-future event can sit above today's news. Say if you would rather show "next upcoming event + two newest posts".
- **No real photos yet**, so the samples use icon panels and no event has a gallery. The gallery was tested with temporary posts using the Home placeholder photos (removed afterwards). Photos of people, especially children, need written consent. Event and news photos go in `src/assets/images/events/`.
- **Phase 8 refresh notes**: the new components use only design tokens, the shared `Butterfly` and the pink-100 / olive tints, so the brand refresh needs no edits here. The date badges and labels use `pink-100` + `pink-600`; re-check them if those change.
- **Phase 9**: add each real post's page to the sitemap when one is set up; the Facebook link preview already uses the cover photo.

## Notes for the next session (Phase 8: Brand refresh + Polish & QA)
- **First:** read the Phase 7 notes above. Open from before: the Phase 6 form test (Web3Forms key is set in `site.ts`, but the real test message for each of the six options is still the user's), the Phase 3 live link, and the user's checks of Home, About, Programs and Events. Phase 8 only.
- Phase 8 starts with the brand refresh (see "Brand refresh" above and `WEBSITE-PLAN.md` Phase 8), then the QA pass. QA should also confirm: sample posts deleted or knowingly kept, `PageShell.astro` gone, `nextEvent` decision made, the email check from the "Email setup" section.

## Older notes written for Phase 7 (kept for reference)
- **First:** confirm Phase 6 is closed (the Web3Forms key and the real test messages are the user's). Also still open from before: the Phase 3 live link and the user's checks of Home, About and Programs. Phase 7 only.
- Phase 7 replaces `PageShell` on `src/pages/events.astro` (it is the last page using it; delete `PageShell.astro` when done) and replaces the "we are just getting started" band on Home with the latest three posts (Home is the only Phase 4 change allowed). Content goes in `src/content/events/` and `src/content/news/` as one Markdown file each. Three sample posts must be clearly marked as samples and must not read as real events or carry fake names, photos of beneficiaries or numbers.
- `nextEvent` in `site.ts` (the Home strip) can be driven by the events system once it exists.
- Contact links: use `contactHref(topic)` from `src/data/nav.ts`.
- Dev tip: a headless Chrome test setup that works on this PC (device emulation at true 360px, request interception) was written in the scratchpad, not in the project. Recreate it if needed: launch `chrome.exe --headless=new --remote-debugging-port=9333`, then drive it with Node's built-in `fetch` and `WebSocket`. `python` is not on this shell's PATH (use the full path in the Phase 1 notes).

## Older notes for Phase 5 (kept for reference)
- **First:** confirm Phases 3 and 4 are closed (the Phase 3 live-link box and your Home check are yours). Phase 5 only: About and Programs. Do not touch Home.
- Replace the `PageShell` placeholders in `src/pages/about.astro` and `src/pages/programs.astro` with real sections from plan section 6. **Layouts must feel different from Home** (a Phase 5 done-when). Home used: a split hero, a white asymmetric photo grid, a dark list section and a tinted panel. Try a timeline, a pull quote or an officers grid instead. Use the pink underline once per page at most.
- About content: story, Mission/Vision/Promise, how we work (LGU, schools, health workers, partners), officers (placeholders, never invented names), partners, legal and transparency info. The draft screenshots in `Images for references/` show Mission, Vision and Promise wording; ask the user to confirm it before publishing. The SEC number comes from `contact.secRegistrationNumber` in `site.ts` (null = hide).
- Programs: lead with the 3 focus groups (students, storm relief and rehab, orphans and elderly), then the formal program areas if the foundation has them (the draft listed Charitable, Educational, Livelihood, Health, Social Welfare; ask). Each links to How to Donate (`/get-involved/#how-to-donate`).
- Reuse: `PageLayout`, `Button`, `Card`, `SectionHeading`, `Icon` (add icons in `Icon.astro`), `Butterfly`, `Underline`. Photos go in `src/assets/images/about/` and `programs/` with fixed names, shown with Astro `<Image>`, and added to `MEDIA-LIST.md`.
- Photo sourcing tip: Pexels search is blocked for the AI. Wikimedia Commons search works (filter to CC0 or public domain) and has many photos tagged San Carlos City and Pangasinan. Never caption a stock photo as a beneficiary.
- Screenshot tip: for a true 360px view, put the page in an `<iframe width="360">` on a local HTML file and screenshot that with headless Chrome (a plain narrow window is clamped to about 500px). Use absolute Windows paths for `--screenshot`.
- The Home copy and `nextEvent` in `site.ts` may need the user's corrections; see the Phase 4 notes above.
- Remember the Git rules: never commit or push, no AI mention anywhere.

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

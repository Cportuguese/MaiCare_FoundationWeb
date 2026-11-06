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

## Notes for the next session (Phase 6: Get Involved + Contact)
- **First:** confirm Phases 3, 4 and 5 are closed (the Phase 3 live-link box and your checks of Home, About and Programs are yours). Phase 6 only. Do not touch Home, About or Programs, except to point buttons at the form if the user asks.
- Phase 6 replaces `PageShell` on `get-involved`, `contact` and `privacy`. `get-involved` needs the anchors `#how-to-donate`, `#volunteer`, `#partner`, `#faq` (the header, Home, About and Programs already link to them).
- Layouts to avoid repeating: Home (split hero, photo grid, dark list, panel), About (text-led, dark statements, timeline), Programs (alternating rows, ruled list).
- The Home, About and Programs buttons that say "Offer clothes or food", "Contact us" etc. may want the form preselected: check them all with a search for `/contact/`.

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

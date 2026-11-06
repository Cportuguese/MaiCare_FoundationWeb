# MaiCare Foundation Website: Plan & Recommendations (no code yet)

## Context
maiCare Foundation Inc. is a non-stock, non-profit organization in San Carlos City, Pangasinan. It needs a clean, friendly, responsive website (mobile and desktop) with two jobs:
1. **Inform**: who the foundation is, what it does, and what it has done.
2. **Inspire people to get involved**: donate money, clothes or food, volunteer, or partner.

**Important constraint:** the site is **information only**. It takes **no online payments**. All donations are arranged by **contacting the foundation** (contact form, email, phone or Facebook), and the foundation follows up directly.

The site has 6 pages: Home, About, Programs, Get Involved, Events & News, Contact. It runs on free hosting with a cheap domain. All images and videos are royalty-free placeholders that must be easy to swap for real ones later. Most of the code will be written by an LLM, so the stack must be simple and well known to LLMs, and the design process must stop the LLM from producing generic "AI slop" (see section 5). The work is split into **small build phases with checkpoints** (section 9), so every part is polished and reviewed before the next begins.

**Reference material** (for context only, not final assets): the logo, screenshots of an earlier one-page draft (hero, About with Mission/Vision/Promise, 5 program areas, Get Involved cards, Upcoming activities, Contact form), and sample Pexels photos and videos in `Images for references/`.

---

## 1. My take: what works and what to watch out for

**Keep from the references:**
- The visual direction is strong: blush background, bold olive headlines, magenta accents, rounded white cards. It feels warm and trustworthy.
- The copy tone is good ("Sharing hope. Extending a helping hand.", "Our Promise"). Use it as inspiration.

**Things to get right:**
1. **"Donate" should mean "get in touch."** Since nothing is paid online, every Donate button should lead to a clear, friendly **How to Donate** section: pick what you want to give, then contact us. The header's main button should still say **Donate**, because that's the action you want most.
2. **There is no track record yet.** The launch is Nov 13, 2026, one week from today. You want visitors to "see what we're able to achieve," but don't fill impact sections with made-up numbers, and don't caption stock photos as "our beneficiaries." Donors notice, and it costs trust. Build the Impact, Stories and Gallery sections now, but feed them from **one editable data file**. At launch, show goals (e.g. "2027 goal: 50 scholars") and the launch event. Switch to real numbers and photos as activities happen.
3. **Match the programs to the people you help.** Your brief names three groups: struggling students, storm relief and rehab, and marginalized sectors (orphans, elderly). Visitors connect with *who* is helped more than with categories. Lead the Programs page with these 3 focus groups. If the foundation has formal program areas (e.g. the 5 in the draft: Charitable, Educational, Livelihood, Health, Social Welfare), list them under the groups.
4. **Clothes and food need clear public info.** Even though donations are arranged by contact, show what you accept and don't accept, plus the drop-off place and hours, so people can prepare before reaching out.
5. **Emergency appeal switch.** Typhoons hit Pangasinan often. Build one on/off setting that shows a banner on every page, e.g. "Typhoon ___ relief drive: here's what we need. Contact us to help." You can turn it on within minutes when a storm hits.
6. **Keep it light for phones.** Most visitors will come from Facebook, on phones, using mobile data. Stock videos usually download as 4K files, which are far too heavy and over the host's 25 MB per-file limit. Use video sparingly and compressed (see section 8).
7. **Trust signals:** SEC registration number, full address, named officers and trustees, the "Our Promise" statement, and a Facebook page link. Put these on About and in the footer.
8. **Data Privacy Act of 2012.** The contact form collects personal data, so add a short Privacy Notice page and a consent checkbox on the form.

---

## 2. Recommended tech stack (simple)

| Layer | Pick | Why |
|---|---|---|
| Framework | **Astro** (latest stable), static output, no React | Pages are basically HTML. The header and footer are written once and reused on all 6 pages. Events & News become simple Markdown files. Images are optimized automatically. No JavaScript by default, so it loads fast on phones. LLMs know it well. |
| Styling | **Tailwind CSS** (Astro's official add-on) | Brand colors and fonts are set once. Mobile-first responsive design is built in. LLMs produce consistent Tailwind. |
| Interactivity | A little plain JavaScript | Only for the mobile menu and the emergency banner. |
| Contact form | **Web3Forms** (free tier) | Sends form messages (donation, volunteer and partnership inquiries) to the foundation's email. No server or database needed. |
| Code storage | **GitHub** (free) | Version history; every push redeploys the site automatically. |
| Hosting | **Cloudflare Pages** (free) | Unlimited bandwidth, nonprofit use allowed, free HTTPS, fast in the PH, auto-deploys from GitHub. (Cloudflare Workers "static assets" is their newer equivalent with the same free tier; either is fine.) |
| Analytics | **Cloudflare Web Analytics** (free) | Privacy-friendly, so no cookie banner is needed. |
| Design guidance for the LLM | **frontend-design** + **UI UX Pro Max** skills (free) | Keep the AI-written UI looking intentional, not generic. See section 5. |
| Later, optional | **Pages CMS** (free) | A web dashboard where non-technical staff can post news and events and swap photos, without touching code. |

**Why not the alternatives:**
- **Plain HTML:** it works, but you'd copy the header and footer into 6 files and resize every photo by hand. Free stock photos are usually 5,000–6,000 px wide, several MB each. Astro handles both.
- **WordPress or Wix:** the free tiers show ads or force a subdomain, and WordPress needs ongoing security updates.
- **Vercel:** its free Hobby plan is for personal, non-commercial use only. Netlify is a fine backup host.

---

## 3. Domain, email and costs
- **Domain:** `maicarefoundation.org` (check availability; `.org` signals a nonprofit). Buy it at **Cloudflare Registrar**. They sell at cost with no markup, about US$10–11/yr (≈ ₱600–650; confirm at checkout). It's the same dashboard as hosting, so DNS and HTTPS set themselves up. Backup registrar: **Porkbun**.
  - If you want `.ph` or `.org.ph`, it has to be bought through dotPH or a .ph reseller. It costs noticeably more, and Cloudflare doesn't sell it.
- **Email:** this matters because donations come in by email.
  - **Cloudflare Email Routing** (free) forwards `info@` and `donate@` to an existing Gmail.
  - To *reply* from the domain address, use Zoho Mail's free plan, or check whether the foundation qualifies for Google for Nonprofits (free Google Workspace).
- **Yearly cost: about ₱600–650**, for the domain only. Everything else is free.

---

## 4. Brand & design direction

> **Update:** the foundation now has an **official logo and brochure** (`Images for references/logo.jpg` and `text.jpg`). **Phase 8** changes the logo, colors, fonts and wording to match them (see Phase 8 in section 9). Until then, the values below (as locked in Phase 2) stay in use.

**Colors**: the brand family is **pink + olive + blush**. The values below are approximate, read from the reference screenshots. They're a starting point, not fixed. Exact shades can be adjusted for contrast, readability and harmony (see section 5.1), as long as the site still clearly looks like maiCare and matches the logo.

| Role | Color | Used for |
|---|---|---|
| Primary pink | ~#E0206F | Buttons, highlighted words, icons |
| Deep olive | ~#3C4235 | Headlines, dark sections, footer |
| Plum | ~#7A2A48 | Announcement and emergency banner |
| Blush | ~#FDF0F4 / ~#FBE4EC | Page background / tinted cards |
| Cream | ~#F6EADB | Secondary button on dark backgrounds |
| Warm gray | ~#5F5A5C | Body text |

**Fonts** (free from Google Fonts, served from your own site via Fontsource):
- **Plus Jakarta Sans** for headlines (ExtraBold) and body text (Regular). It's friendly, modern and easy to read on phones.
- **Fraunces Italic**, for accents only: taglines like "With humble hearts…" and labels like *Donate / Volunteer / Partner*. Its soft serif echoes the serif in the maiCare logo.

**Style rules:** lots of white space, 16–24 px rounded corners, soft shadows, line icons (Lucide), the logo's butterfly line art as a subtle decoration, photos of real people, and one primary pink button per section.

---

## 5. Design quality: avoiding "AI slop"
Left alone, LLMs give every site the same look: purple gradients, the Inter font, rows of three identical centered cards, emoji icons, and vague copy. Two free design skills and a few house rules keep this site looking deliberate and specific to maiCare.

### 5.1 Design skills to install in your AI coding tool (before building)

| Skill | What it does | Its job here |
|---|---|---|
| **frontend-design** (official, by Anthropic) | Makes the AI commit to a deliberate visual direction (type, color, layout, motion) before writing UI code, and steers it away from generic AI looks. In Claude Code it switches on by itself for frontend work. | **Main taste guardrail** while building pages |
| **UI UX Pro Max** (`nextlevelbuilder/ui-ux-pro-max-skill`) | A searchable library of UI styles, color palettes, font pairings and UX rules (accessibility, contrast, touch-target sizes, responsive checks). Works with Claude Code and other AI coding tools. | **Reference and checklist**: sanity-check the palette and fonts, then review each finished page |

**Install notes:**
- **frontend-design:** comes from Anthropic's official Claude Code plugin marketplace (`anthropics/claude-code`, plugin `frontend-design`).
- **UI UX Pro Max:** install it from its GitHub repo using **the command in its README**. Third-party sites list different commands. Check the README for prerequisites too.
- **Safety:** a skill is a set of instructions (sometimes scripts) that runs inside your project. Install only from the official repos, and skim the files first.
- **Brand colors, refined for what works best:** keep the maiCare pink / olive / blush family from section 4. Use the skills to pick the best exact shades: tune a pink or olive for contrast, add lighter or darker tints, or choose a better accent. Don't swap in an unrelated palette. Fonts work the same way: keep the two-font idea and switch only if a pairing clearly reads better.

### 5.2 House rules (these go in the `CLAUDE.md` project rules file, Phase 1)
- **Banned:** purple/blue gradients, gradient text, glassmorphism, emoji used as icons, Inter or Roboto for everything, a dark overlay with centered text on every hero, animation on everything, fake testimonials or stats, and filler copy like "Empowering communities to thrive."
- **Be specific, not generic:** real place names (San Carlos City, Pangasinan), real program details, Filipino-context photos, and real names and quotes once you have them.
- **Vary the layouts:** mix split image-and-text sections, full-width photos, a goals strip, a timeline and a pull quote. Don't repeat "heading + 3 cards" all the way down the page.
- **One signature detail, used consistently:** the logo's butterfly line art, Fraunces italic accents, and a hand-drawn pink underline or heart. Keep everything else restrained.
- **Gentle motion only:** soft fade-ins and a slight lift on hover. Turn motion off when the visitor's device asks for reduced motion.
- **One icon set:** Lucide only, same stroke width everywhere.

### 5.3 Review loop for every page
1. **Before coding:** have the AI write a short design direction for the page (layout of each section, where the signature details go). frontend-design does this naturally.
2. **After building:** take screenshots at phone (360 px) and desktop (1280 px) widths.
3. **UX review:** run a UI UX Pro Max review (contrast, touch-target size, spacing, visual hierarchy, mobile layout) and fix what it finds.
4. **Slop test:** check the page against the house rules. If a section could belong to *any* charity, rewrite it with something specific to maiCare.

---

## 6. Site map & page contents

**On every page:**
- Sticky header: logo, 6 links, pink **Donate** button (goes to How to Donate); a menu button on mobile.
- Optional emergency banner.
- Footer: address, email, phone, Facebook, SEC registration number, quick links, Privacy Notice.

**Pages:**
1. **Home**
   - Hero: headline, tagline, Donate and Volunteer buttons, placeholder photo
   - Next-event strip (e.g. the launch)
   - "Who we help": students, storm-affected families, orphans and elderly
   - Impact or goals counters
   - "3 ways to help": Money, Goods, Time
   - Latest 3 events or news posts
   - One featured story or quote
   - Final "Get in touch to help" call-to-action
2. **About:** our story, Mission/Vision/Promise, how we work (LGU, schools, health workers, partners), officers and trustees, partner logos, legal and transparency info.
3. **Programs:** the 3 focus areas, each with a photo, who it helps, and what kind of help is needed, each linking to How to Donate.
4. **Get Involved**
   - **How to Donate:** the 3-step flow in section 7, with accepted goods and drop-off info
   - **Volunteer**
   - **Partner:** for companies and schools
   - FAQ
   - Every option ends at the contact form or email.
5. **Events & News:** upcoming events, past events with photo galleries, and news posts. Each item is one Markdown file with a cover photo, so adding an event means adding one file.
6. **Contact**
   - Form: name, email or mobile, "I would like to…" dropdown (Donate money / Donate clothes / Donate food / Volunteer / Partner / Other), message, consent checkbox
   - Address, phone, email, Google Maps embed, Facebook link, office hours
7. *(Small extra)* **Privacy Notice** page.

---

## 7. How donating works on the site (no online payment)
The site never handles money. It only explains and connects:
1. **Choose how to help:** money, clothes, food, time or partnership, each with a short explanation of where it goes.
2. **Contact us:** the contact form, `donate@` email, phone or Facebook. Donate buttons open the contact form with the right option already selected (e.g. "Donate food").
3. **We follow up:** the foundation replies by email or phone with the details (how to give, drop-off or pickup schedule) and acknowledges the donation.

**Shown publicly** so donors can prepare: accepted and not-accepted items, drop-off location and hours, and the "Our Promise" transparency statement.

---

## 8. Placeholder media, and how to swap it later
- **Sources:** Pexels, Unsplash and Pixabay. They're free for commercial use and need no attribution. Search Philippine terms ("Filipino volunteers," "typhoon relief Philippines," "Filipino students") so the site looks local.
- **Fixed file names:** every image gets one clear name in one folder per page (e.g. a `home` folder holding `hero`, `focus-students`, …). To replace a photo, save the new one with the same name and push. Astro resizes and compresses it automatically, so any photo size works.
- **Media list:** keep a simple list of each file, where it appears, its source, and whether it's a placeholder or real. That way no stock photo stays by accident.
- **Videos (if used):** compress to ~720p, under ~5 MB, muted, with a still "poster" image. Show a photo instead on mobile. Put longer clips on YouTube or Facebook and embed them.
- **Real photos of beneficiaries, especially minors:** get written consent from parents or guardians before publishing.

---

## 9. Build phases
The site is built in **11 small phases (0–10)**, not with one giant prompt. Each phase has a goal, a list of steps, and a **"Done when" checklist**. A phase only counts as finished when every box is ticked and you've checked it yourself. Then the next phase starts.

### 9.1 Progress tracker
This table also lives in the project as **`PROGRESS.md`**, created in Phase 1. The AI ticks the boxes when a phase closes, so you, and any new AI session, can always see where things stand.

| Phase | Name | What you get at the end | Status |
|---|---|---|---|
| 0 | Prep | Info, accounts and tools ready | ☐ |
| 1 | Project setup | An empty working site, design skills installed, rules file | ☐ |
| 2 | Design system | Approved colors, fonts, buttons and cards (style guide page) | ☐ |
| 3 | Site shell + first deploy | Header, footer, menu, emergency banner, empty pages, live preview link | ☐ |
| 4 | Home page | Finished Home page | ☐ |
| 5 | About + Programs | Two finished pages | ☐ |
| 6 | Get Involved + Contact | How to Donate flow, working form, Privacy Notice | ☐ |
| 7 | Events & News | Event and news system with 3 sample posts | ☐ |
| 8 | Brand refresh + Polish & QA | New logo, colors, fonts and brochure wording; then a whole-site quality pass | ☐ |
| 9 | Launch | Domain, email and analytics; real details filled in | ☐ |
| 10 | After launch | Ongoing upgrades | — |

### 9.2 The routine for every phase
1. **Start fresh:** open a new AI session and say *"Start Phase X."* The AI reads `CLAUDE.md` (the project rules, which Claude Code loads automatically) and `PROGRESS.md`.
2. **Plan first:** the AI explains how it will do the phase. You approve it or change it.
3. **Small steps:** build one section or component at a time, never the whole phase in one go.
4. **Review loop:** run section 5.3 on everything built.
5. **You check it:** look at it on your own phone and laptop. From Phase 3 on, that's the live preview link.
6. **Close the phase:** tick every "Done when" box and update `PROGRESS.md`. The AI shows a summary of what changed and, if you ask, a suggested commit message. **You** review the changes, then commit and push yourself (see section 12). Only then move on.

### Phase 0: Prep (no code)
**Goal:** have everything ready before building starts.
- Install Node.js (LTS), VS Code and Git. Create GitHub and Cloudflare accounts.
- Check that `maicarefoundation.org` is available. Don't buy it yet.
- Start gathering the section 10 info. The logo file matters most; anything missing can be a placeholder for now.
- Collect 15–25 placeholder photos (section 8) into one folder, each named for where it will go.

**Done when:**
- [ ] Tools installed and accounts created
- [ ] Logo file in hand
- [ ] Placeholder photos collected

### Phase 1: Project setup & design skills
**Goal:** an empty but working project, with the quality guardrails in place.
- Install **frontend-design** and **UI UX Pro Max** (section 5.1).
- Create the Astro + Tailwind project with clear folders: pages, shared parts, images (one folder per page), and events/news posts.
- Add **one settings file** for things that change often: contact details, the emergency banner on/off switch, and the goals/impact numbers.
- Write **`CLAUDE.md`** with the project rules: colors, fonts, folder and file-name rules, "no fake stats," "no online payments," the house rules from 5.2, "work one phase at a time," and the **Git rules from section 12**.
- Create **`PROGRESS.md`** with the tracker from 9.1.
- Put the project on GitHub: **you** create the repository, review the files, and make the first commit and push yourself, using your own Git identity. The AI can walk you through the steps.

**Done when:**
- [ ] A blank site runs on your computer
- [ ] Both design skills are installed
- [ ] `CLAUDE.md` and `PROGRESS.md` exist
- [ ] The code is on GitHub

### Phase 2: Design system
**Goal:** lock the look before building any page.
- Fine-tune the brand colors with UI UX Pro Max, including contrast checks. These become the final colors.
- Set the fonts (Plus Jakarta Sans + Fraunces Italic), text sizes, spacing, corner rounding and shadows.
- Build the basic pieces:
  - buttons (main, secondary, on dark backgrounds)
  - cards and section headings with small labels
  - icons and form fields
  - the butterfly decoration and the pink underline
- Show all of them on one hidden **style guide page** so you can review them together.

**Done when:**
- [ ] The style guide page looks good on phone and desktop
- [ ] All text passes the contrast check
- [ ] You've approved the final colors and fonts, which are now locked

### Phase 3: Site shell + first deploy
**Goal:** the skeleton of the whole site, live online so you can check it anywhere.
- **Shared layout:**
  - sticky header with the Donate button
  - mobile menu
  - footer with contact details, SEC number and Facebook
  - emergency banner controlled by the settings file
- **All 7 pages** created, with titles and placeholder blocks only.
- **Basics:** page titles and descriptions, a Facebook link-preview image, a favicon made from the logo, and a "page not found" page.
- **Go live:** connect GitHub to Cloudflare Pages to get a free `*.pages.dev` link. From now on, every push you make updates that link, so you can check progress on your phone anytime.

**Done when:**
- [ ] Every page can be reached from the header and footer, on phone and desktop
- [ ] The mobile menu works, and the emergency banner turns on and off from one setting
- [ ] The live preview link works

### Phase 4: Home page
**Goal:** the most important page, fully designed.
- Build it section by section, following the Home list in section 6. Use placeholder photos and honest goal numbers from the settings file.
- Run the review loop after each section, not only at the end.

**Done when:**
- [ ] Every Home section is finished on phone and desktop
- [ ] The review loop passed, with no banned patterns
- [ ] The Donate and Volunteer buttons go to the right places

### Phase 5: About + Programs
**Goal:** the "who we are / what we do" story.
- **About:** our story, Mission/Vision/Promise, how we work, officers (placeholders for now), partners, legal and transparency info.
- **Programs:** the 3 focus areas plus the formal program areas, each linking to How to Donate.

**Done when:**
- [ ] Both pages are finished and reviewed on phone and desktop
- [ ] Their layouts feel different from Home, not like copies of it

### Phase 6: Get Involved + Contact
**Goal:** a smooth path from "I want to help" to a message in the foundation's inbox.
- **Get Involved:**
  - How to Donate (the 3 steps in section 7)
  - accepted and not-accepted goods, drop-off info
  - Volunteer, Partner, FAQ
- **Contact:**
  - Web3Forms form with the "I would like to…" dropdown and a consent checkbox
  - Donate buttons open the form with the right option already picked
  - map and contact details
- **Privacy Notice** page.

**Done when:**
- [ ] A test message for each dropdown option arrives in the inbox
- [ ] A Donate button on any page opens the form with the right option picked
- [ ] The form is easy to fill in on a phone and shows clear success and error messages

### Phase 7: Events & News
**Goal:** a section the foundation can keep updating.
- An events and news list split into upcoming and past, a page for each item, and photo galleries for past events.
- 3 sample entries. Home shows the latest 3 automatically.
- A short "How to add an event or news post" guide for whoever updates the site.

**Done when:**
- [ ] Adding one new post file makes it appear everywhere it should
- [ ] Events move from "upcoming" to "past" automatically by date

### Phase 8: Brand refresh + Polish & QA
**Goal:** bring the whole site in line with the foundation's official logo and brochure, then make everything feel finished and consistent.

**Why this phase changed:** the foundation now has an official **logo** (`Images for references/logo.jpg`) and a printed **brochure** (`Images for references/text.jpg`). They differ from the earlier draft the site was built on:
- a new logo, with no butterfly
- greener and softer colors
- a handwritten-style tagline, "Kindness everywhere…"
- official wording

The brand refresh comes **first**, so the quality pass checks the final look.

**Decision: use the brochure's brand, not its print layout.** A folded brochure is designed for paper. A website has to be easy to read on a small phone.

| From the logo and brochure | On the website |
|---|---|
| New logo | **Yes.** Header, footer, favicon and link preview. It replaces the placeholder wordmark. |
| Colors: sage and forest green, rose pink, blush, cream | **Yes**, tuned for readable contrast (table below). |
| Official wording: About, Mission, Vision, Our Heart, Our Focus, taglines | **Yes.** It replaces the wording taken from the earlier draft. |
| Handwritten script lettering ("Kindness everywhere…") | **Yes, for short accent phrases only.** One script font replaces Fraunces Italic. It is never used for body text, buttons, menus, form labels or long headings. |
| Hearts with leaves, and a soft pink-and-green wave | **Yes, as the new signature detail.** They replace the butterfly, which isn't in the new logo. Line art plus one light wave divider, used sparingly. |
| Warm, sunlit feel | **A light touch:** warm cream backgrounds and warm photos. No sun rays across the page. |
| Sunburst glow, rainbow, watercolor texture behind text | **No.** It is slow to load on phones and makes text hard to read. The glowing version of the logo appears only in the link-preview image. |
| Script headings on every section | **No.** Script is hard to read at small sizes, so section labels stay in Plus Jakarta Sans. |
| The brochure's photos of children | **No.** They look AI-generated. Neither these nor any stock photo may be shown as the people the foundation helps. Use real photos only, with guardian consent. |

**Starting colors**, sampled from the two images. Phase 8 fine-tunes them and checks their contrast with UI UX Pro Max.

| Role | Sampled from | About | Notes |
|---|---|---|---|
| Logo rose pink | "Care" and the heart in the logo | #EA6489 / #F27C97 | Decoration and large display text only. Too light for normal text (about 3.2:1 on white). |
| Action pink | brochure's pink headings | #C3386B | Buttons, links, pink text. About 5:1 on white but only about 4.3:1 on blush, so it probably needs a slightly deeper shade. |
| Sage green | "mai" and FOUNDATION in the logo | #6A7364 | Logo, quiet accents, icons |
| Forest green | brochure's green headings | #1C543E | Headlines, dark sections, footer. Replaces olive. |
| Green-gray text | brochure's body text | #4B605B | Body text. Replaces warm gray. |
| Blush | brochure's pink panels | #FCE5EB | Tinted panels; about the same as today |
| Sage tint | brochure's green panels | #E9F0E4 | A second tint for panels |
| Cream | brochure paper | #F6F6EF | Page background option |

The plum emergency banner can stay or move to a deeper rose. Decide with the contrast check.

**Steps, in this order:**
1. **Get the source files.**
   - Ask the foundation for the original logo: an SVG, or a PNG with a see-through background.
   - Ask for the brochure's text file (Word, PDF or Canva). Copying wording from a photo risks typos.
   - If no original logo exists, redraw it as a clean SVG that matches `logo.jpg`, without the glow.
2. **Logo:**
   - Replace `Logo.astro` with the new logo, without the glow. Show "EST. 2026" and the tagline only where there's room.
   - Remake the favicon set. The heart over the "i" works well at small sizes.
   - Remake the link-preview image.
   - Update `MEDIA-LIST.md`.
3. **Colors:** update the color settings in `global.css`, the one place colors live. Re-run the style guide's contrast table until it says "All pairings pass". Every page uses these settings, so the whole site changes at once.
4. **Fonts:** choose a free script font that best matches the brochure's lettering, checked with UI UX Pro Max, to replace Fraunces Italic. Keep Plus Jakarta Sans, so there are still two fonts in total.
5. **Signature details:**
   - Replace the butterfly with heart-and-leaf line art.
   - Add the pink-and-green wave as a small, light divider, in at most 2–3 places on the whole site.
   - Keep the hand-drawn pink underline.
6. **Wording:**
   - Replace the draft-based wording with the brochure text: the About story, Mission, Vision, the new **Our Heart** section, and the taglines ("Kindness everywhere…", "Because kindness changes lives", "Together for a brighter tomorrow").
   - Rebuild the Programs page around the brochure's **four focus areas: Food Support, Healthcare Support, Education Support and Other Assistance**, and say who each one helps. The brochure puts children and families first.
   - **Ask the foundation** whether storm relief, the elderly and the five formal program areas still belong on the site, and whether "Our Promise" (it isn't in the brochure) stays.
   - Fix obvious typos only with your okay. For example, the Mission sentence ends "…bringing dignity, joy, hope into their lives and spread kindness everywhere."
7. **Re-approve the style guide** with the new logo, colors and fonts. Then write the new locked values into the Brand section of `CLAUDE.md`.
8. **Polish and quality pass:**
   - Run every check in section 11.
   - Proofread all text.
   - Fix spacing and alignment differences between pages.
   - Do a final slop check.
   - Finish the media list.

**Done when:**
- [ ] The new logo is in the header, footer, favicon and link preview, and no placeholder logo or butterfly is left
- [ ] The new colors and fonts are in place, every pairing passes on the style guide, and you've approved them (now locked)
- [ ] The brochure wording is on the site, and you've confirmed every change in meaning (programs, Our Promise, typo fixes)
- [ ] Every section 11 check passes
- [ ] No known bugs or rough spots remain

### Phase 9: Launch
**Goal:** go public.
- Buy the domain at Cloudflare and connect it to the site.
- Set up email forwarding for `info@` and `donate@`, and send the contact form to that address.
- Turn on Cloudflare Web Analytics.
- Swap in any real details from section 10 that are ready (contacts, SEC number). The logo is already done in Phase 8.
- Do a final check on the real domain, then share the link on the foundation's Facebook page.

**Done when:**
- [ ] The site is live on the domain with HTTPS (the padlock)
- [ ] Test emails to `info@` and `donate@` arrive
- [ ] Real contact details appear everywhere

### Phase 10: After launch (ongoing)
- Replace placeholder photos with real ones, using the media list. Turn goals into real numbers as results come in.
- Post events and news after each activity.
- Optional: add Pages CMS so non-technical staff can edit the site.

> **About the Nov 13 launch:** if you want the site public on launch day, Phases 0–4 plus the Contact part of Phase 6 make a solid first version. The rest can follow right after. Otherwise, go at your own pace; polish matters more than speed.

---

## 10. Information to gather before building
- Logo files (high-res PNG or SVG) and exact brand colors, if they exist. **For Phase 8:** the original file of the new logo (SVG, or PNG with a see-through background) and the brochure's text file (Word, PDF or Canva)
- SEC registration number, office address, phone, Facebook page link
- Which email should receive donation and contact inquiries
- Officers/trustees: names and photos (optional at launch)
- Accepted in-kind items, drop-off place and hours
- Final domain name

---

## 11. How to check it's done right (the full check list for Phase 8)
- Test on real phones (Android Chrome, iPhone Safari) and in the browser's responsive mode at 360 px, 768 px and 1280 px+ widths.
- **Google PageSpeed Insights:** aim for 90+ on mobile Performance and Accessibility.
- **Design check:** none of the banned patterns in section 5.2 remain, and every page passed the UI UX Pro Max review.
- **"Real or template?" test:** show the homepage to 2–3 people with no context. Ask whether it feels like a real local foundation or a template.
- Donate is one tap away on every page and leads to How to Donate. Every page can be reached from the header and footer.
- Submit the contact form once per dropdown option and confirm each email arrives with the right subject.
- Paste a page link into Facebook Messenger and check that the preview image and title look right.
- Replace one placeholder photo with a different one to confirm the swap workflow.

---

## 12. Git identity & commit rules (you own the history)
You are responsible for this repository and its Git history. The AI is your coding assistant, **not** a contributor to the repository. These rules go into `CLAUDE.md` in Phase 1, so every AI session follows them strictly:

- **No AI identity in Git:**
  - Never use an AI name, model name, company name or assistant identity in commits.
  - Never add `Co-authored-by` trailers or any AI attribution to commit messages.
  - Never add phrases like "Generated by Claude," "Powered by Copilot" or "AI-assisted."
- **Your identity only:** every commit uses your locally configured Git `user.name` and `user.email`. The AI never changes your global or local Git configuration without your permission.
- **You commit, not the AI:** the AI never runs `git commit` or `git push` on its own, and never rewrites Git history.
- **Review first:** you review every code change before it's committed.
- **Commit messages only on request:** if you ask, the AI writes a clean, professional message that describes only the code changes.
- **History stays as it is:** existing commit authorship and past commit messages are never changed unless you explicitly ask.

**How this fits the phases:** at the end of each phase (step 6 in 9.2), the AI summarizes what changed and, if you ask, suggests a commit message. You review the changes, then commit and push yourself.

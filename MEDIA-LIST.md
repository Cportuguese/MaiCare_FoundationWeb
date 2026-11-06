# MEDIA LIST

Every image on the site: where it is used, where it came from, and whether it is a **placeholder** or **real**. Check this list before launch (Phase 9) so no placeholder stays by accident. To replace a file, save the new one under the same name.

| File | Where it appears | Source | Status |
|---|---|---|---|
| `public/og-image.png` (1200x630) | Link preview when a page is shared on Facebook or Messenger | Made in Phase 3: blush background, text wordmark and the placeholder butterfly line art. No stock photo. | **Placeholder.** Replace with an image made from the real logo. |
| `public/favicon.svg` | Browser tab icon | Made in Phase 3: placeholder butterfly line art on a pink square. | **Placeholder.** Replace with the real logo. |
| `public/favicon-32.png`, `public/favicon.ico` | Browser tab icon (older browsers) | Same artwork as `favicon.svg`, exported at 32 px. | **Placeholder.** Redo when the logo arrives. |
| `public/apple-touch-icon.png` (180x180) | Icon when someone adds the site to their phone home screen | Same artwork as `favicon.svg`. | **Placeholder.** Redo when the logo arrives. |
| `src/assets/images/home/hero.jpg` | Home: hero photo | Wikimedia Commons, "6317Turac, San Carlos, Pangasinan 38.jpg" by Judgefloro. **CC0** (no rights reserved, no credit needed). Shows the barangay hall and day care center sign in Barangay Turac, San Carlos City. Resized to 1800 px wide. | **Placeholder.** Replace with a real maiCare photo of people. |
| `src/assets/images/home/focus-students.jpg` | Home: "Students" card | Wikimedia Commons, "6139Balite Sur, San Carlos, Pangasinan 01.jpg" by Judgefloro. **CC0.** An elementary school gate in San Carlos City (its sign is readable). Resized to 1800 px wide. | **Placeholder.** Replace with a real photo. The sign names a real school, so replace it before launch if the foundation has no link with that school. |
| `src/assets/images/home/focus-storm.jpg` | Home: "Families hit by typhoons" card | Pexels, photo 32988688 by Tear Cordez (free to use, no credit needed). A man on a cargo tricycle in a flooded street in Malabon, Metro Manila. Downloaded at 1400 px wide. | **Placeholder.** Replace with a real relief photo. It is not Pangasinan and not a beneficiary. |

Not images, but also placeholders until the real logo arrives: `src/components/Logo.astro` (text wordmark) and `src/components/Butterfly.astro` (line art).

About and Programs (Phase 5) use **no photos**: no honest picture of the foundation or the people it will help exists yet. Programs shows designed icon panels, and picks up a real photo automatically if you save one in `src/assets/images/programs/` as `students.jpg`, `storm-relief.jpg` or `orphans-elderly.jpg` (jpg, jpeg, png or webp). Photos of people, especially children, need written guardian consent first. The Programs photo slots are listed here so they are not forgotten:

| Slot | Where it appears | Status |
|---|---|---|
| `programs/students.jpg` | Programs: focus 1 | **Empty** (icon panel shown) |
| `programs/storm-relief.jpg` | Programs: focus 2 | **Empty** (icon panel shown) |
| `programs/orphans-elderly.jpg` | Programs: focus 3 | **Empty** (icon panel shown) |

Home (Phase 4) uses the three photos above. None of them is captioned, and none is described as a maiCare beneficiary. About, Programs, Get Involved and Events photos arrive in Phases 5 to 7. Nothing from `Images for references/` is used anywhere.

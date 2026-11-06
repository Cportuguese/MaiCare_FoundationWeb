# MEDIA LIST

Every image on the site: where it is used, where it came from, and whether it is a **placeholder** or **real**. Check this list before launch (Phase 9) so no placeholder stays by accident. To replace a file, save the new one under the same name.

| File | Where it appears | Source | Status |
|---|---|---|---|
| `public/og-image.png` (1200x630) | Link preview when a page is shared on Facebook or Messenger | Made in Phase 8: the redrawn logo, EST. 2026 and "Kindness everywhere…" on cream with a soft glow (the only place the glow is used), "San Carlos City, Pangasinan" and the pink-and-green wave. No photo. | **Real** (official logo, redrawn). Remake it if the foundation sends its original logo file. |
| `public/favicon.svg` | Browser tab icon | Made in Phase 8: the logo's pink "i" with its heart, on a blush rounded square. | **Real** (from the official logo). |
| `public/favicon-32.png`, `public/favicon.ico` | Browser tab icon (older browsers) | Same artwork as `favicon.svg`, exported at 32 px. | **Real.** |
| `public/apple-touch-icon.png` (180x180) | Icon when someone adds the site to their phone home screen | Same artwork, full square (phones round the corners themselves). | **Real.** |
| `src/assets/images/shared/logo.svg`, `logo-on-dark.svg` | Header and footer logo (`Logo.astro`), style guide | Redrawn in Phase 8 from the foundation's logo image (`logo.jpg`, which is never shipped). Lettering turned into shapes from Playfair Display ExtraBold and Plus Jakarta Sans (both SIL Open Font License), colors sampled from the logo, no glow. | **Real** (official logo, redrawn). If the foundation sends its original SVG or transparent PNG, save it over these two files. |
| `src/assets/images/home/hero.jpg` | Home: hero photo | Wikimedia Commons, "6317Turac, San Carlos, Pangasinan 38.jpg" by Judgefloro. **CC0** (no rights reserved, no credit needed). Shows the barangay hall and day care center sign in Barangay Turac, San Carlos City. Resized to 1800 px wide. | **Placeholder.** Replace with a real maiCare photo of people. |
| `src/assets/images/home/focus-students.jpg` | Home: "Students" card | Wikimedia Commons, "6139Balite Sur, San Carlos, Pangasinan 01.jpg" by Judgefloro. **CC0.** An elementary school gate in San Carlos City (its sign is readable). Resized to 1800 px wide. | **Placeholder.** Replace with a real photo. The sign names a real school, so replace it before launch if the foundation has no link with that school. |
| `src/assets/images/home/focus-storm.jpg` | Home: "Families hit by typhoons" card | Pexels, photo 32988688 by Tear Cordez (free to use, no credit needed). A man on a cargo tricycle in a flooded street in Malabon, Metro Manila. Downloaded at 1400 px wide. | **Placeholder.** Replace with a real relief photo. It is not Pangasinan and not a beneficiary. |

The old placeholder wordmark and butterfly line art were replaced in Phase 8 (the butterfly component was deleted; the new heart-and-leaf line art and wave are drawn in code, not image files).

About and Programs use **no photos**: no honest picture of the foundation or the people it will help exists yet. Programs shows designed icon panels, and picks up a real photo automatically if you save one in `src/assets/images/programs/` as `food.jpg`, `healthcare.jpg`, `education.jpg` or `other-assistance.jpg` (jpg, jpeg, png or webp). These names changed in Phase 8, when Programs was rebuilt around the brochure's four focus areas. Photos of people, especially children, need written guardian consent first. The Programs photo slots are listed here so they are not forgotten:

| Slot | Where it appears | Status |
|---|---|---|
| `programs/food.jpg` | Programs: Food support | **Empty** (icon panel shown) |
| `programs/healthcare.jpg` | Programs: Healthcare support | **Empty** (icon panel shown) |
| `programs/education.jpg` | Programs: Education support | **Empty** (icon panel shown) |
| `programs/other-assistance.jpg` | Programs: Other assistance | **Empty** (icon panel shown) |

Events & News (Phase 7) uses **no photos**: the three sample posts have no cover photo, so cards show an icon panel. Real event and news photos go in `src/assets/images/events/` (any name; each is pointed to from its post file) and must be added to this list. See `HOW-TO-ADD-POSTS.md`.

Home (Phase 4) uses the three photos above. None of them is captioned, and none is described as a maiCare beneficiary. Nothing from `Images for references/` is shipped: the logo was redrawn from `logo.jpg` and the brochure's wording was used, but never the files themselves or the brochure's photos.

**Swap workflow checked in Phase 8:** saving a different photo as `home/hero.jpg` changed the Home hero on the next build, and saving a photo as `programs/food.jpg` made the Food row show it. Both test files were removed again.

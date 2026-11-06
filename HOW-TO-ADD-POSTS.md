# How to add an event or a news post

Each event and each news post is **one text file**. Add a file and it appears on the **Events & News** page, on its own page, and (if it is one of the newest three) on the **Home** page. No code needs to change.

| Kind | Folder | Web address |
|---|---|---|
| Event | `src/content/events/` | `/events/<file-name>/` |
| News post | `src/content/news/` | `/news/<file-name>/` |

## 1. Add an event

1. In `src/content/events/`, make a new file. Name it in **lowercase-with-dashes**, ending in `.md`, e.g. `school-supplies-drive.md`. The file name becomes the web address.
2. Copy this and fill it in:

```md
---
title: "School supplies drive"
summary: "We are collecting notebooks, pens and bags for students in San Carlos City."
date: 2026-12-12
time: "9:00 AM to 12:00 NN"
place: "Barangay hall, Turac"
---

Write the details here, in plain words.

- **What** to bring
- **Where** to go
- **How to sign up** as a volunteer

The site takes no online payments. To give or help, send us a message.
```

3. Save, then commit and push (the site rebuilds by itself).

**What each line means**

| Line | Needed? | Notes |
|---|---|---|
| `title` | yes | Keep it short. |
| `summary` | yes | One or two sentences (up to 220 characters). Shown on cards and in link previews. |
| `date` | yes | **YYYY-MM-DD**, Philippine date. |
| `endDate` | no | Only if the event runs more than one day. |
| `time`, `place` | no | Leave the line out until confirmed. The page hides anything that is missing. |
| `cover`, `coverAlt` | no | A cover photo (see "Photos"). `coverAlt` is required with a cover. |
| `gallery` | no | Photos from the event (see "Photos"). |
| `draft: true` | no | Keeps the file in the project but does **not** publish it. Remove the line to publish. |
| `sample: true` | no | Marks a made-up example. Real posts must **not** have it. |

**Upcoming or past?** Automatic. An event is "upcoming" through its last day (`endDate`, or `date` if there is no `endDate`) and moves to "past" the day after. The site works this out when it is built, so see "Keeping dates fresh" below.

## 2. Add a news post

Same idea, in `src/content/news/`:

```md
---
title: "Thank you to everyone who came"
summary: "A short thank-you and what happens next."
date: 2026-11-14
---

Write the post here.
```

News has no `time`, `place` or `gallery`. It does take `cover` and `coverAlt`.

## 3. Photos

1. Save the photo in `src/assets/images/events/` with a clear name, e.g. `school-supplies-drive-cover.jpg`. Any size works: the site resizes and compresses it.
2. Point to it from the file (note the `../../`):

```md
cover: ../../assets/images/events/school-supplies-drive-cover.jpg
coverAlt: "Volunteers sorting notebooks on a table"
gallery:
  - image: ../../assets/images/events/school-supplies-drive-1.jpg
    alt: "A table of packed school bags"
  - image: ../../assets/images/events/school-supplies-drive-2.jpg
    alt: "Volunteers loading a tricycle"
```

3. Add the photo to `MEDIA-LIST.md` (where it appears, where it came from, "real").

**Rules for photos**
- Every photo needs a short description (`alt` or `coverAlt`) for people who cannot see it.
- **Photos of people, especially children, need written consent from the person, or a parent or guardian.** No consent, no photo.
- Never use a stock photo for a real event, and never caption any photo as "our beneficiaries" unless it is true and they agreed.

## 4. Writing the body

The body is simple Markdown: blank line between paragraphs, `- ` for bullet lists, `**bold**`, `## A heading`, `[link text](https://...)`. Write plain and warm. Name real places. Only use numbers that are real and confirmed. No bank, GCash or QR details: the site takes no online payments.

## 5. Remove the sample posts

The three files marked `sample: true` are examples:

- `src/content/events/sample-upcoming-event.md`
- `src/content/events/sample-past-event.md`
- `src/content/news/sample-news-post.md`

Delete them before launch (or once real posts exist). If you delete every post, the pages show a calm "we are just getting started" note instead.

## Keeping dates fresh

An event moves from "upcoming" to "past" when the site is **rebuilt**, not at midnight. Every push rebuilds it. If a week might pass without a push, set up a free daily rebuild in Cloudflare Pages (**Settings → Builds → Deploy hooks**, then call that hook once a day from a scheduler). This is optional and is yours to set up.

## If the build fails after adding a file

The error names the file and the line. The usual causes: the date is not written `YYYY-MM-DD`, `summary` is over 220 characters, a `cover` has no `coverAlt`, the `---` lines around the top block are missing, or the photo path is wrong.

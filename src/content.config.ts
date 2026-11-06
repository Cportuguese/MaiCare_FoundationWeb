/**
 * Content collections (Phase 7): one Markdown file per event or news post.
 *
 *   src/content/events/<name>.md   ->  /events/<name>/
 *   src/content/news/<name>.md     ->  /news/<name>/
 *
 * The file name becomes the web address, so use lowercase-kebab-case
 * (e.g. `school-supplies-drive.md`). How to add a post: see HOW-TO-ADD-POSTS.md.
 *
 * Dates are written as YYYY-MM-DD (e.g. 2026-12-12), Philippine date.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A calendar day. YAML turns an unquoted 2026-12-12 into a Date, so turn it back
// into plain text. Either way the file only ever holds YYYY-MM-DD.
const day = z.preprocess(
  (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value),
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Write the date as YYYY-MM-DD, e.g. 2026-12-12'),
);

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        /** One or two sentences, shown on cards and in link previews. */
        summary: z.string().min(1).max(220),
        /** First day of the event. The event moves to "past" on the day after it ends. */
        date: day,
        /** Only for events that run more than one day. */
        endDate: day.optional(),
        /** Free text, e.g. "9:00 AM to 12:00 NN". Leave out if not confirmed. */
        time: z.string().optional(),
        /** Free text, e.g. "Barangay hall, Turac". Leave out if not confirmed. */
        place: z.string().optional(),
        /** Cover photo, saved in src/assets/images/events/. */
        cover: image().optional(),
        /** Describe the cover photo for people who cannot see it. Required with a cover. */
        coverAlt: z.string().optional(),
        /** Photos from the event (usually added after it). Each needs a description. */
        gallery: z.array(z.object({ image: image(), alt: z.string().min(1) })).default([]),
        /** true = a made-up example. Shows a "Sample" label and is hidden from search engines. */
        sample: z.boolean().default(false),
        /** true = keep the file but do not publish it yet. */
        draft: z.boolean().default(false),
      })
      .refine((d) => !d.cover || Boolean(d.coverAlt), {
        message: 'A cover photo needs coverAlt (a short description of the photo).',
        path: ['coverAlt'],
      })
      .refine((d) => !d.endDate || d.endDate >= d.date, {
        message: 'endDate cannot be before date.',
        path: ['endDate'],
      }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        summary: z.string().min(1).max(220),
        /** The day the post is published. */
        date: day,
        cover: image().optional(),
        coverAlt: z.string().optional(),
        sample: z.boolean().default(false),
        draft: z.boolean().default(false),
      })
      .refine((d) => !d.cover || Boolean(d.coverAlt), {
        message: 'A cover photo needs coverAlt (a short description of the photo).',
        path: ['coverAlt'],
      }),
});

export const collections = { events, news };

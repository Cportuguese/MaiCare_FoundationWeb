/**
 * Events and news helpers (Phase 7).
 *
 * One place that reads the Markdown files and decides what is upcoming, what is
 * past, and what Home shows. Pages never sort or compare dates themselves.
 *
 * Upcoming vs past is worked out when the site is built, using today's date in
 * the Philippines. An event stays "upcoming" through its last day, then moves to
 * "past" on the next build. (See HOW-TO-ADD-POSTS.md for the daily rebuild tip.)
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type EventEntry = CollectionEntry<'events'>;
export type NewsEntry = CollectionEntry<'news'>;

const TZ = 'Asia/Manila';

/** Shown on every sample post, so nobody mistakes one for a real event. */
export const SAMPLE_NOTICE =
  'This is a sample post. It shows how events and news will look on this site. It is not a real event or announcement.';

/** Today as YYYY-MM-DD, Philippine time. */
export const todayInManila = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

/** A YYYY-MM-DD string as a Date at midnight Philippine time. */
const toDate = (day: string) => new Date(`${day}T00:00:00+08:00`);

export const formatDay = (day: string, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-PH', { timeZone: TZ, ...opts }).format(toDate(day));

/**
 * Philippine style, month first: "Fri, Nov 13, 2026". A multi-day event reads
 * "Nov 12 to 14, 2026", "Nov 28 to Dec 2, 2026" or "Dec 30, 2026 to Jan 2, 2027".
 */
export function formatDateRange(date: string, endDate?: string, weekday = true) {
  if (!endDate || endDate === date) {
    return formatDay(date, { weekday: weekday ? 'short' : undefined, month: 'short', day: 'numeric', year: 'numeric' });
  }
  const full = (d: string) => formatDay(d, { month: 'short', day: 'numeric', year: 'numeric' });
  if (date.slice(0, 4) !== endDate.slice(0, 4)) return `${full(date)} to ${full(endDate)}`;
  const monthDay = (d: string) => formatDay(d, { month: 'short', day: 'numeric' });
  const year = date.slice(0, 4);
  if (date.slice(0, 7) === endDate.slice(0, 7)) {
    return `${monthDay(date)} to ${formatDay(endDate, { day: 'numeric' })}, ${year}`;
  }
  return `${monthDay(date)} to ${monthDay(endDate)}, ${year}`;
}

/** The shape every card and list uses, for both events and news. */
export type Post = {
  kind: 'event' | 'news';
  slug: string;
  href: string;
  title: string;
  summary: string;
  date: string;
  endDate?: string;
  dateLabel: string;
  time?: string;
  place?: string;
  cover?: ImageMetadata;
  coverAlt?: string;
  sample: boolean;
  /** Events only: true until the day after the last day. */
  upcoming: boolean;
};

const byDateAsc = (a: Post, b: Post) => a.date.localeCompare(b.date);
const byDateDesc = (a: Post, b: Post) => b.date.localeCompare(a.date);

export const eventToPost = (entry: EventEntry, today = todayInManila()): Post => ({
  kind: 'event',
  slug: entry.id,
  href: `/events/${entry.id}/`,
  title: entry.data.title,
  summary: entry.data.summary,
  date: entry.data.date,
  endDate: entry.data.endDate,
  dateLabel: formatDateRange(entry.data.date, entry.data.endDate),
  time: entry.data.time,
  place: entry.data.place,
  cover: entry.data.cover,
  coverAlt: entry.data.coverAlt,
  sample: entry.data.sample,
  upcoming: (entry.data.endDate ?? entry.data.date) >= today,
});

export const newsToPost = (entry: NewsEntry): Post => ({
  kind: 'news',
  slug: entry.id,
  href: `/news/${entry.id}/`,
  title: entry.data.title,
  summary: entry.data.summary,
  date: entry.data.date,
  dateLabel: formatDateRange(entry.data.date, undefined, false),
  cover: entry.data.cover,
  coverAlt: entry.data.coverAlt,
  sample: entry.data.sample,
  upcoming: false,
});

/** Published (not draft) entries only. */
export const getPublishedEvents = () => getCollection('events', ({ data }) => !data.draft);
export const getPublishedNews = () => getCollection('news', ({ data }) => !data.draft);

/** Events split by date. Upcoming: soonest first. Past: most recent first. */
export async function getEventLists() {
  const today = todayInManila();
  const all = (await getPublishedEvents()).map((e) => eventToPost(e, today));
  return {
    upcoming: all.filter((p) => p.upcoming).sort(byDateAsc),
    past: all.filter((p) => !p.upcoming).sort(byDateDesc),
  };
}

/** News, newest first. */
export async function getNewsList() {
  return (await getPublishedNews()).map(newsToPost).sort(byDateDesc);
}

/** The newest `count` posts of either kind (used by Home). */
export async function getLatestPosts(count = 3) {
  const { upcoming, past } = await getEventLists();
  const news = await getNewsList();
  return [...upcoming, ...past, ...news].sort(byDateDesc).slice(0, count);
}

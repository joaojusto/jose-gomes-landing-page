import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    description: z.string().optional().or(z.null()),
    descriptionEn: z.string().optional().or(z.null()),
    url: z.string().optional().or(z.null()),
    dateTime: z.union([z.string(), z.date()]),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().or(z.null()),
    descriptionEn: z.string().optional().or(z.null()),
    url: z.string().optional().or(z.null()),
    dateTime: z.union([z.string(), z.date()]),
  }),
});

const translations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    'navbar.agenda': z.string(),
    'navbar.biography': z.string(),
    'navbar.news': z.string(),
    'navbar.gallery': z.string(),
    'navbar.contact': z.string(),
    'hero.subtitle': z.string(),
    'hero.title': z.string(),
    quote: z.string(),
    'agenda.title': z.string(),
    'news.title': z.string(),
    'biography.title': z.string(),
    'biography.excerpt': z.string(),
    'biography.cta': z.string(),
    'biography.file': z.string(),
    'galery.title': z.string(),
    'contact.title': z.string(),
    'galery.images': z.string(),
    'galery.videos': z.string(),
  }),
});

export const collections = {
  events,
  news,
  translations,
};
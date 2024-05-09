import { defineCollection, z } from 'astro:content';

const products = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		imgCard: z.string(),
		imgAlt: z.string().optional(),
		section: z.enum(["Featured", "Most Wanted", "Last seen"]),
		url: z.string(),

	}),

})

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		insert: z.string().max(150),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		imageAlt: z.string().optional(),

	}),
});

export const collections = { blog , products };

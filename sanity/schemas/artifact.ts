import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'artifact',
  title: 'Artifact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Label',
      type: 'string',
      description: 'Display label, e.g., "16TH CENTURY COIN"',
      validation: (Rule) => Rule.required().max(50)
    }),
    defineField({
      name: 'image',
      title: 'Artifact Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'prompt',
      title: 'Prompt',
      type: 'text',
      description: 'Hidden from public, copied to clipboard only',
      rows: 6,
      validation: (Rule) => Rule.required().max(5000)
    }),
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'X (Twitter)', value: 'x' },
          { title: 'Website', value: 'web' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Link to original tweet or website',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] })
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.required().positive().integer()
    })
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }
  ],
  preview: {
    select: { title: 'title', media: 'image', subtitle: 'sourceType' }
  }
})

import { defineField, defineType } from 'sanity';

export const quote = defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
    }),
    defineField({
      name: 'citation',
      type: 'string',
      title: 'Citation',
    }),
    defineField({
      name: 'floatRight',
      type: 'boolean',
      title: 'Float Right',
    }),
  ],
});
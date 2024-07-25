import { defineField } from 'sanity';

export const imageFields = [
  defineField({
    title: 'Alt',
    name: 'alt',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    title: 'Link',
    name: 'link',
    type: 'url',
  }),
  defineField({
    title: 'Caption',
    name: 'caption',
    type: 'string',
  }),
];
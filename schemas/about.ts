import { defineType, defineField, defineArrayMember } from 'sanity';
import { imageFields } from './image';

export const about = defineType({
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    defineField({ title: 'Title', name: 'title', type: 'string' }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Full Width Image',
          name: 'fullWidthImage',
          type: 'image',
          fields: imageFields,
        }),
        defineArrayMember({
          title: 'Half Width Image',
          name: 'halfWidthImage',
          type: 'image',
          fields: [
            ...imageFields,
            defineField({
              title: 'Float Right',
              name: 'floatRight',
              type: 'boolean',
            }),
          ],
        }),
        defineArrayMember({
          title: 'BodyContent',
          name: 'bodyContent',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Section Heading', value: 'h3' },
          ],
        }),
      ],
    }),
  ],
});
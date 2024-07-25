import { defineArrayMember, defineField, defineType } from 'sanity';
import { imageFields } from './image';

export const project = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Start Year',
      name: 'startYear',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tools',
      name: 'tools',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
    defineField({
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      fields: imageFields,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({ type: 'url', validation: (Rule) => Rule.uri({ allowRelative: true }) }),
      ],
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: imageFields,
        }),
      ],
    }),
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
          title: 'Full Width Quote',
          name: 'fullWidthQuote',
          type: 'quote',
        }),
        defineArrayMember({
          title: 'Half Width Quote',
          name: 'halfWidthQuote',
          type: 'quote',
        }),
        defineArrayMember({
          title: 'BodyContent',
          name: 'bodyContent',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Section Heading', value: 'h3' },
            { title: 'Title', value: 'h1' },
          ],
        }),
      ],
    }),
  ],
});
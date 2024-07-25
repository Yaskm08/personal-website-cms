import { defineField, defineType } from 'sanity';
import { imageFields } from './image';

export const career = defineType({
  title: 'Career',
  name: 'career',
  type: 'document',
  fields: [
    defineField({
      title: 'Company',
      name: 'company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Department',
      name: 'department',
      type: 'string',
    }),
    defineField({
      title: 'Team',
      name: 'team',
      type: 'string',
    }),
    defineField({
      title: 'Title',
      name: 'title',
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
      title: 'Start Year',
      name: 'startYear',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'End Year',
      name: 'endYear',
      type: 'number',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: imageFields,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const education = defineType({
  title: 'Education',
  name: 'education',
  type: 'document',
  fields: [
    defineField({
      title: 'School',
      name: 'school',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Degree',
      name: 'degree',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Major',
      name: 'major',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'GPA',
      name: 'gpa',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Start Year',
      name: 'startYear',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'End Year',
      name: 'endYear',
      type: 'number',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: imageFields,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
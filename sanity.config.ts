import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Yassine Kraiem',

  projectId: 'ask0x32c',
  dataset: 'yassinekraiempersonalwebsite',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

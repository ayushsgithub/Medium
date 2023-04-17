// import {defineConfig} from 'sanity/lib/exports'
import {defineConfig} from 'sanity'
// import {defineConfig} from '../mediumbuild/sanity.cli'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'medium_build',

  projectId: 'j7dr6pln',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import { createClient } from 'next-sanity'

const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').trim()
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()

// Validate projectId format (a-z, 0-9, dashes only)
const isValidProjectId = /^[a-z0-9-]+$/.test(projectId) && projectId.length > 0

export const client = isValidProjectId ? createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
}) : null

export const isConfigured = isValidProjectId

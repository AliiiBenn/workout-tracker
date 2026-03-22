import type { CollectionConfig } from 'payload'

export const PayloadAdmins: CollectionConfig = {
  slug: 'payload-admins',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

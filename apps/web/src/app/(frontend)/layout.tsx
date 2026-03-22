import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { RootProvider } from '@/components/providers'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import './globals.css'

export const metadata: Metadata = {
  description: 'The elite training platform.',
  title: 'Strong',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <RootProvider>
          <NuqsAdapter>
            <main>{children}</main>
          </NuqsAdapter>
        </RootProvider>
      </body>
    </html>
  )
}

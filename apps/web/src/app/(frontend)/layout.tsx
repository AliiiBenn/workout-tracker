import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { RootProvider } from '@/components/providers'
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
          <main>{children}</main>
        </RootProvider>
      </body>
    </html>
  )
}

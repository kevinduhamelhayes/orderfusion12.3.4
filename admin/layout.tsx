import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/admin/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Order Fusion',
  description: 'Tu menu digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}

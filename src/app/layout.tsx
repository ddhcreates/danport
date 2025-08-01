import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dan - Creative Technologist | Portfolio',
  description: 'I build tools and tell stories. From custom GPT automations to creative decks and data dashboards—I help you move faster, think clearer, and look good doing it.',
  keywords: 'GPT automation, AI dashboards, web design, creative technologist, React developer, data visualization',
  authors: [{ name: 'Dan' }],
  openGraph: {
    title: 'Dan - Creative Technologist',
    description: 'Custom GPT automations, AI-powered dashboards, and creative solutions that help you work smarter.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dan - Creative Technologist',
    description: 'Custom GPT automations, AI-powered dashboards, and creative solutions that help you work smarter.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
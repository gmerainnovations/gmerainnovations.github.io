import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GMEra Innovations - Innovating Tomorrow\'s Technology Today',
  description: 'GMEra Innovations delivers cutting-edge IT solutions and services that empower businesses to thrive in the digital age.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AblyElectrical - Your Trusted Partner in Electrical Solutions',
  keywords: [
    'AblyElectrical',
    'Electrical Solutions',
    'EV Chargers',
    'UPS Systems',  ],
  description: 'Created with zerihun kibret',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

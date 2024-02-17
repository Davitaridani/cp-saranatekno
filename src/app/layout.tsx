import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavbarCompt from '@/components/Navbar'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'PT. Sarana Teknologi Dwi Abadi',
  description: 'Sarana Tekno has several products, products that we have developed and used in several work areas in banking and other industries in accordance with the needs of each business are the work of our RnD.',
}

export default function RootLayout({
  children,
}: {
children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={montserrat.className}>
        <NavbarCompt />
        {children}
      </body>
    </html>
  )
}

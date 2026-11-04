import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'A mobile responsive ToDo application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={`${inter.className} bg-slate-950 text-slate-100 m-0 p-0`}>
        <div className="mobile-shell">
          <div className="mobile-viewport">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
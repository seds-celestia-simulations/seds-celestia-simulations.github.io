import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Instrument_Serif } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './globals.css'

const pragmatica = localFont({
  src: '../fonts/pragmatica.otf',
  variable: '--font-pragmatica',
  display: 'swap',
})

const monument = localFont({
  src: '../fonts/monument.woff2',
  variable: '--font-monument',
  display: 'swap',
})

const neueHelvetica = localFont({
  src: '../fonts/neue-helvetica-regular.woff2',
  variable: '--font-neue-helvetica',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SEDS Celestia Simulations',
  description: 'University student club advancing space exploration through computational simulations, astrophysics research, and collaborative innovation.',
  icons: {
    icon: '/logo.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ color: '#05080f' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${pragmatica.variable} ${monument.variable} ${neueHelvetica.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}

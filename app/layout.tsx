import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Wettmarkt Vergleich – Quoten & Plattformen im Check', template: '%s | Wettmarkt Vergleich' },
  description: 'Wettmarkt Vergleich: Sportwetten-Anbieter, Quoten und Margen im direkten Vergleich. Warum Prediction Markets die bessere Alternative sind.',
  keywords: ['Wettmarkt Vergleich', 'Sportwetten Vergleich', 'Quoten Vergleich', 'Buchmacher Vergleich', 'Wettanbieter Test'],
  authors: [{ name: 'Atlas Market', url: 'https://atlasmarkets.de' }],
  metadataBase: new URL('https://wettmarkt-vergleich.de'),
  openGraph: { type: 'website', locale: 'de_DE', siteName: 'Wettmarkt Vergleich' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

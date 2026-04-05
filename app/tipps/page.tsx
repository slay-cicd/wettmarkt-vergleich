import type { Metadata } from 'next'
import TippsClient from './TippsClient'

export const metadata: Metadata = {
  title: 'Bundesliga Wett-Tipps – Spieltag 34 Prognosen 2026',
  description: 'Aktuelle Bundesliga Wett-Tipps für Spieltag 34: Formanalyse, Head-to-Head und fundierte Prognosen von unseren Experten. Plus: die besten Quoten im Vergleich.',
  keywords: ['Bundesliga Tipps', 'Wett-Tipps Bundesliga', 'Bundesliga Prognosen', 'Spieltag 34 Tipps', 'Sportwetten Tipps'],
  openGraph: {
    title: 'Bundesliga Wett-Tipps – Spieltag 34 Prognosen 2026',
    description: 'Fundierte Bundesliga Wett-Tipps für Spieltag 34 mit Formanalyse und Quotenvergleich.',
    url: 'https://wettmarkt-vergleich.de/tipps',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bundesliga Wett-Tipps Spieltag 34',
  description: 'Prognosen und Tipps für alle Spiele des 34. Spieltags der Bundesliga 2025/26',
  numberOfItems: 5,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SC Freiburg vs FC Bayern München', url: 'https://wettmarkt-vergleich.de/tipps/freiburg-bayern-munchen' },
    { '@type': 'ListItem', position: 2, name: 'Eintracht Frankfurt vs 1. FC Köln', url: 'https://wettmarkt-vergleich.de/tipps/frankfurt-koln' },
    { '@type': 'ListItem', position: 3, name: 'VfL Wolfsburg vs TSG Hoffenheim', url: 'https://wettmarkt-vergleich.de/tipps/wolfsburg-hoffenheim' },
    { '@type': 'ListItem', position: 4, name: 'Borussia Dortmund vs RB Leipzig', url: 'https://wettmarkt-vergleich.de/tipps/dortmund-leipzig' },
    { '@type': 'ListItem', position: 5, name: 'Bayer Leverkusen vs Borussia Mönchengladbach', url: 'https://wettmarkt-vergleich.de/tipps/leverkusen-gladbach' },
  ],
}

export default function TippsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ paddingTop: '100px', paddingBottom: '4rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
            Bundesliga · Spieltag 34
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1.25rem' }}
          >
            Wett-Tipps: Der letzte Spieltag der Saison
          </h1>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '2rem' }}>
            Spieltag 34 – der Abschluss einer nervenstarken Bundesliga-Saison 2025/26. Fünf Spiele, fünf Analysen: Wir schauen auf Form, Head-to-Head, Motivation und Quoten. Alle Tipps inklusive Begründung und empfohlenem Trade bei Atlas Market.
          </p>
          <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', borderTop: '1px solid #E5E5E0', paddingTop: '1rem' }}>
            ⚠️ Sportwetten-Tipps sind keine Gewinngarantie. Immer nur Beträge einsetzen, deren Verlust verkraftbar ist. 18+.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.25rem 2rem' }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '42%', borderRadius: '12px', overflow: 'hidden', background: '#F3F3EE' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
            alt="Fußball Spieltag Bundesliga Wett-Tipps"
            loading="lazy"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <TippsClient />
    </>
  )
}

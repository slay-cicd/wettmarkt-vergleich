'use client'
import Link from 'next/link'

export default function Footer() {
  const networkLinks = [
    { href: 'https://atlasmarkets.de', label: 'Atlas Markets' },
    { href: 'https://torjaeger-ranking.de', label: 'Torjäger Ranking' },
    { href: 'https://bundesliga-prognose.de', label: 'Bundesliga Prognose' },
    { href: 'https://champions-league-analyse.de', label: 'Champions League Analyse' },
    { href: 'https://prediction-market-guide.de', label: 'Prediction Market Guide' },
  ]

  const siteLinks = [
    { href: '/wettanbieter', label: 'Wettanbieter' },
    { href: '/tipps', label: 'Wett-Tipps' },
    { href: '/bundesliga-tabelle', label: 'Bundesliga Tabelle' },
    { href: '/strategien', label: 'Wettstrategien' },
    { href: '/tools/margin-rechner', label: 'Margin-Rechner' },
    { href: '/quoten-vergleich', label: 'Quoten-Vergleich' },
  ]

  return (
    <footer className="mt-24 border-t" style={{ borderColor: '#E5E5E0', backgroundColor: '#F3F3EE' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-4" style={{ gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div>
            <p className="font-serif" style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
              Wettmarkt Vergleich
            </p>
            <p style={{ fontSize: '0.75rem', lineHeight: '1.7', color: '#6B7280' }}>
              Unabhängige Vergleiche von Sportwetten-Märkten, Quoten und Anbietern. Ein Projekt von Atlas Market.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
              Inhalte
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {siteLinks.map(link => (
                <li key={link.href} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200"
                    style={{ fontSize: '0.75rem', color: '#6B7280', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
              Netzwerk
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {networkLinks.map(link => (
                <li key={link.href} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ fontSize: '0.75rem', color: '#6B7280', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#16a34a')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
              Rechtliches
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/impressum', label: 'Impressum' },
                { href: '/datenschutz', label: 'Datenschutz' },
              ].map(link => (
                <li key={link.href} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200"
                    style={{ fontSize: '0.75rem', color: '#6B7280', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '1.5rem' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ gap: '0.75rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>© 2026 Atlas Market. Alle Rechte vorbehalten.</p>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', textAlign: 'center' }}>18+ | Glücksspiel kann süchtig machen. Spiel verantwortungsbewusst.</p>
          <a
            href="https://atlasmarkets.de"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ fontSize: '0.75rem', fontWeight: 500, color: '#16a34a', textDecoration: 'none' }}
          >
            atlasmarkets.de
          </a>
        </div>
      </div>
    </footer>
  )
}

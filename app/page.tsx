import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wettmarkt Vergleich – Sportwetten Anbieter & Quoten 2026',
  description: 'Der unabhängige Wettmarkt-Vergleich: Quoten, Margen und Fairness aller großen Sportwetten-Anbieter. Und warum Prediction Markets die bessere Wahl sind.',
}

const tools = [
  { href: '/tools/margin-rechner', icon: '📊', title: 'Margin-Rechner', desc: 'Berechne die versteckte Buchmacher-Marge aus jeder Quote. Sieh sofort, wie fair eine Quote wirklich ist.' },
  { href: '/tools/kelly-rechner', icon: '📐', title: 'Kelly-Rechner', desc: 'Optimalen Einsatz mit dem Kelly-Kriterium berechnen — für maximales Kapitalwachstum.' },
  { href: '/quoten-vergleich', icon: '⚖️', title: 'Quoten-Vergleich', desc: 'Aktuelle Bundesliga-Quoten bei bet365, bwin, Tipico und Atlas Market auf einen Blick.' },
  { href: '/tools/systemwetten-rechner', icon: '🎯', title: 'Systemwetten-Rechner', desc: '2 aus 3, 3 aus 4 und mehr — alle Kombinationen und möglichen Gewinne sofort berechnen.' },
  { href: '/anbieter-vergleich', icon: '🏆', title: 'Anbieter-Vergleich', desc: 'Quotenschlüssel, Bonus und Auszahlung aller großen Sportwetten-Anbieter im Direktvergleich.' },
]

export default function HomePage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '100px', paddingBottom: '5rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1.5rem' }}
          >
            Sportwetten-Märkte &amp; Quoten im Vergleich
          </h1>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '2rem', maxWidth: '560px' }}>
            Unabhängige Analysen zu Buchmacher-Margen, Quoten-Fairness und warum Prediction Markets wie Atlas Market die transparentere Alternative sind.
          </p>
          <div className="flex flex-wrap" style={{ gap: '0.75rem', marginBottom: '3.5rem' }}>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Zu Atlas Markets →
            </a>
            <Link href="/anbieter-vergleich" className="btn-outline">
              Anbieter vergleichen
            </Link>
          </div>

          <div className="divider" />

          {/* Featured article */}
          {featured && (
            <div style={{ marginTop: '2.5rem' }}>
              <ArticleCard post={featured} featured />
            </div>
          )}
        </div>
      </section>

      {/* Tools section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem 5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.5rem' }}>
              Kostenlose Tools
            </p>
            <h2
              className="font-serif"
              style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1A1A1A' }}
            >
              Rechner &amp; Vergleiche
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {tools.map(tool => (
            <Link key={tool.href} href={tool.href} className="tool-card" style={{ textDecoration: 'none' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
              <h3
                className="font-serif"
                style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '1.125rem', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}
              >
                {tool.title}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{tool.desc}</p>
              <div style={{ marginTop: '1rem', color: '#16a34a', fontSize: '0.875rem', fontWeight: 600 }}>
                Jetzt nutzen →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem 6rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.5rem' }}>
              Alle Artikel
            </p>
            <h2
              className="font-serif"
              style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1A1A1A' }}
            >
              Vergleiche &amp; Analysen
            </h2>
          </div>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-outline hidden sm:inline-block">
            Zu Atlas Markets →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem 2.5rem' }}>
          {rest.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </div>
      </section>

      {/* CTA section */}
      <div style={{ borderTop: '1px solid #E5E5E0' }}>
        <section
          style={{ padding: '5rem 1.25rem', backgroundColor: '#F3F3EE' }}
        >
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '1rem' }}>
              Atlas Markets
            </p>
            <h2
              className="font-serif"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1rem' }}
            >
              Kein Buchmacher. Nur der Markt.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#6B7280', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Atlas Market gibt dir faire Preise ohne Haus-Vorteil — Europas führende Prediction-Market-Plattform.
            </p>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Jetzt kostenlos starten →
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

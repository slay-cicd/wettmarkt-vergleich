import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wettstrategien 2026 – Die besten Systeme für Sportwetten',
  description: 'Profitiere von bewährten Wettstrategien: Value Betting, Bankroll Management, Live-Wetten und mehr. Alle Strategien erklärt – plus warum Atlas Market das ideale Umfeld bietet.',
  keywords: ['Wettstrategien', 'Sportwetten Strategie', 'Value Betting', 'Bankroll Management', 'Live-Wetten Strategie', 'Sportwetten System'],
  openGraph: {
    title: 'Wettstrategien 2026 – Die besten Systeme für Sportwetten',
    description: 'Bewährte Wettstrategien erklärt: Value Betting, Bankroll-Verwaltung, Live-Wetten und mehr.',
    url: 'https://wettmarkt-vergleich.de/strategien',
    type: 'website',
  },
}

const strategies = [
  {
    href: '/strategien/value-betting',
    icon: '💡',
    title: 'Value Betting',
    subtitle: 'Die Grundlage profitabler Wetten',
    desc: 'Value Betting ist die einzige Strategie, die langfristig funktioniert. Du suchst Wetten, bei denen die Wahrscheinlichkeit eines Ereignisses höher ist als die implizierte Wahrscheinlichkeit der Quote – und schöpfst diesen Vorteil konsequent ab.',
    available: true,
    tags: ['Für Fortgeschrittene', 'Mathematisch', 'Langfristig'],
  },
  {
    href: '/strategien/bankroll-management',
    icon: '📊',
    title: 'Bankroll Management',
    subtitle: 'Kapital schützen, Verluste begrenzen',
    desc: 'Das beste System bringt nichts, wenn du dein Kapital in drei schlechten Spielen verbrennt. Bankroll Management ist die Disziplin hinter dem Erfolg – und wird von 90% der Sportwetter unterschätzt.',
    available: true,
    tags: ['Für alle', 'Disziplin', 'Risikomanagement'],
  },
  {
    href: '/strategien/live-wetten',
    icon: '⚡',
    title: 'Live-Wetten Strategie',
    subtitle: 'In-Play-Vorteile nutzen',
    desc: 'Live-Wetten bieten Chancen, die Prä-Match-Quoten nicht haben: Taktikwechsel, Rote Karten, Spielfluss-Informationen. Wer schnell denkt und die richtigen Plattformen nutzt, kann systematisch Vorteile finden.',
    available: true,
    tags: ['Reaktionsschnell', 'Erfahrung nötig', 'High Intensity'],
  },
  {
    href: '/strategien/matched-betting',
    icon: '🔄',
    title: 'Matched Betting',
    subtitle: 'Bonusangebote risikoarm ausnutzen',
    desc: 'Matched Betting nutzt die mathematische Schwäche von Buchmacher-Bonusangeboten. Mit Laybet-Kombinationen werden Freiwetten in echtes Geld umgewandelt – fast risikolos.',
    available: false,
    tags: ['Für Einsteiger', 'Risikoarm', 'Bonus-fokussiert'],
  },
  {
    href: '/strategien/kelly-kriterium',
    icon: '📐',
    title: 'Kelly-Kriterium',
    subtitle: 'Optimale Einsatzberechnung',
    desc: 'Das Kelly-Kriterium berechnet den mathematisch optimalen Wetteinsatz in Abhängigkeit von Kantengröße und Kapital. Korrekt angewendet maximiert es das langfristige Kapitalwachstum.',
    available: false,
    tags: ['Mathematisch', 'Fortgeschritten', 'Kapitaloptimierung'],
  },
  {
    href: '/strategien/asian-handicap',
    icon: '🎯',
    title: 'Asian Handicap',
    subtitle: 'Marktineffizienzen im Handicap-Markt',
    desc: 'Asian Handicap-Wetten eliminieren das Unentschieden als Möglichkeit und bieten dadurch schärfere Quoten und weniger Marge. Ein Pflichtinstrument für ernsthaftere Sportwetter.',
    available: false,
    tags: ['Fußball-fokussiert', 'Marktkenntnis', 'Weniger Marge'],
  },
]

export default function StrategienPage() {
  return (
    <>
      <section style={{ paddingTop: '100px', paddingBottom: '4rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
            Wettstrategien & Systeme
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1.25rem' }}
          >
            Sportwetten-Strategien, die wirklich funktionieren
          </h1>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '0.75rem' }}>
            Die meisten Sportwetter verlieren langfristig – nicht weil sie Pech haben, sondern weil sie keine klare Strategie haben. Diese Seite erklärt die besten Systeme der Welt, von Value Betting bis Bankroll Management.
          </p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6B7280' }}>
            Wichtig: Die fairsten Quoten für jede Strategie findest du bei <a href="https://atlasmarkets.de" style={{ color: '#16a34a', fontWeight: 600, textDecoration: 'none' }}>Atlas Market</a> – dem einzigen Anbieter ohne Buchmacher-Marge.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.25rem 2rem' }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '38%', borderRadius: '12px', overflow: 'hidden', background: '#F3F3EE' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Sportwetten Strategien Datenanalyse Dashboard"
            loading="lazy"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.25rem 6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {strategies.map(s => (
            <div
              key={s.href}
              style={{
                border: '1px solid #E5E5E0',
                borderRadius: '10px',
                padding: '1.75rem',
                backgroundColor: '#fff',
                position: 'relative',
                opacity: s.available ? 1 : 0.7,
              }}
            >
              {!s.available && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#9CA3AF',
                  backgroundColor: '#F3F3EE',
                  padding: '2px 6px',
                  borderRadius: '3px',
                }}>
                  Demnächst
                </div>
              )}
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.25rem' }}>
                {s.subtitle}
              </p>
              <h2
                className="font-serif"
                style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '1.25rem', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}
              >
                {s.title}
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.7rem', backgroundColor: '#F3F3EE', color: '#6B7280', padding: '2px 8px', borderRadius: '4px' }}>
                    {tag}
                  </span>
                ))}
              </div>
              {s.available ? (
                <Link href={s.href} style={{ fontSize: '0.875rem', fontWeight: 600, color: '#16a34a', textDecoration: 'none' }}>
                  Strategie lesen →
                </Link>
              ) : (
                <span style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>Bald verfügbar</span>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px' }}>
          <p className="font-serif" style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
            Warum Strategie bei Atlas Market doppelt so gut funktioniert
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Jede Strategie – egal ob Value Betting oder Kelly-Kriterium – funktioniert besser, wenn die Marge geringer ist. Bei einem klassischen Buchmacher frisst die 7–10% Marge einen Großteil des strategischen Vorteils. Bei Atlas Market gibt es keine Marge: 100% des Einsatzes geht an die Gewinner. Das ist der Unterschied zwischen einem System, das funktioniert, und einem, das trotz richtiger Analyse nur die Taschen des Buchmachers füllt.
          </p>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Jetzt bei Atlas Market starten →
          </a>
        </div>
      </section>
    </>
  )
}

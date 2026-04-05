'use client'
import Link from 'next/link'

const matches = [
  {
    slug: 'freiburg-bayern-munchen',
    home: 'SC Freiburg',
    away: 'FC Bayern München',
    date: 'Sa, 18. Mai 2026',
    time: '15:30 Uhr',
    tip: 'Bayern München Sieg',
    odds: '1.55',
    confidence: 'Hoch',
    preview: 'Bayern schließt die Meistersaison mit einem Pflichtsieg ab. Freiburg kämpft um Europapokal-Plätze – doch gegen diese Bayern-Maschine ist das eine undankbare Aufgabe.',
  },
  {
    slug: 'frankfurt-koln',
    home: 'Eintracht Frankfurt',
    away: '1. FC Köln',
    date: 'Sa, 18. Mai 2026',
    time: '15:30 Uhr',
    tip: 'Beide Teams treffen',
    odds: '1.75',
    confidence: 'Mittel',
    preview: 'Ein Hessen-Rheinland-Duell mit offenem Ausgang. Frankfurt will den Europa-Platz sichern, Köln kämpft gegen den Abstieg. Beide Mannschaften brauchen Tore.',
  },
  {
    slug: 'wolfsburg-hoffenheim',
    home: 'VfL Wolfsburg',
    away: 'TSG Hoffenheim',
    date: 'Sa, 18. Mai 2026',
    time: '15:30 Uhr',
    tip: 'Über 2,5 Tore',
    odds: '1.90',
    confidence: 'Mittel',
    preview: 'Zwei offensive Mannschaften ohne größeren Druck. Das verspricht Tore. Beide Teams haben in der Rückserie im Schnitt über 3 Tore pro Spiel geliefert.',
  },
  {
    slug: 'dortmund-leipzig',
    home: 'Borussia Dortmund',
    away: 'RB Leipzig',
    date: 'Sa, 18. Mai 2026',
    time: '18:30 Uhr',
    tip: 'Unentschieden oder Leipzig',
    odds: '1.85',
    confidence: 'Mittel',
    preview: 'Dortmunds Saison war ein Auf und Ab. Leipzig reist mit starker Rückrunde an. Das Spitzenspiel des Tages verspricht Spannung, aber keinen sicheren BVB-Sieg.',
  },
  {
    slug: 'leverkusen-gladbach',
    home: 'Bayer Leverkusen',
    away: 'Borussia Mönchengladbach',
    date: 'So, 19. Mai 2026',
    time: '17:30 Uhr',
    tip: 'Leverkusen Sieg & Over 2.5',
    odds: '2.10',
    confidence: 'Mittel-Hoch',
    preview: 'Der amtierende Meister verabschiedet sich vor heimischer Kulisse. Gegen Gladbach war Leverkusen in den letzten Jahren dominant – und offensiv ohnehin kaum zu bremsen.',
  },
]

function ConfidenceBadge({ level }: { level: string }) {
  const color = level === 'Hoch' ? '#16a34a' : level === 'Mittel-Hoch' ? '#2563eb' : '#f59e0b'
  return (
    <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const, color, backgroundColor: `${color}15`, padding: '2px 8px', borderRadius: '4px' }}>
      {level}
    </span>
  )
}

export default function TippsClient() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.25rem 6rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.25rem' }}>
        {matches.map((match) => (
          <Link
            key={match.slug}
            href={`/tipps/${match.slug}`}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div
              style={{
                border: '1px solid #E5E5E0',
                borderRadius: '10px',
                padding: '1.5rem',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#16a34a'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(22,163,74,0.08)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E5E0'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' as const, gap: '0.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '4px' }}>
                    {match.date} · {match.time}
                  </p>
                  <h2
                    className="font-serif"
                    style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', letterSpacing: '-0.01em', margin: 0 }}
                  >
                    {match.home} <span style={{ color: '#9CA3AF', fontWeight: 400 }}>vs</span> {match.away}
                  </h2>
                </div>
                <ConfidenceBadge level={match.confidence} />
              </div>

              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B7280', marginBottom: '1rem' }}>
                {match.preview}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' as const }}>
                <div style={{ backgroundColor: '#f0fdf4', borderRadius: '6px', padding: '0.5rem 1rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#16a34a', marginBottom: '2px' }}>Unser Tipp</p>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1A1A1A' }}>{match.tip}</p>
                </div>
                <div style={{ backgroundColor: '#F3F3EE', borderRadius: '6px', padding: '0.5rem 1rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '2px' }}>Quote (Atlas Market)</p>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1A1A1A' }}>{match.odds}</p>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#16a34a', fontWeight: 600, marginLeft: 'auto' }}>
                  Vollanalyse lesen →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: '1rem' }}>
        <div>
          <p className="font-serif" style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '1rem', marginBottom: '0.25rem' }}>
            Jetzt auf Bundesliga wetten
          </p>
          <p style={{ fontSize: '0.8125rem', color: '#6B7280' }}>
            Beste Quoten ohne Marge. Direkt bei Atlas Market.
          </p>
        </div>
        <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Zu Atlas Market →
        </a>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bundesliga Tabelle 2025/26 – Aktueller Stand & Wettquoten',
  description: 'Aktuelle Bundesliga Tabelle 2025/26 mit allen Statistiken: Siege, Unentschieden, Niederlagen, Tore, Tordifferenz und Punkte. Plus: Wettquoten und CTA bei Atlas Market.',
  keywords: ['Bundesliga Tabelle 2026', 'Bundesliga Standings', 'Bundesliga aktuell', 'Bundesliga Punkte', 'Fußball Tabelle Deutschland'],
  openGraph: {
    title: 'Bundesliga Tabelle 2025/26 – Aktueller Tabellenstand',
    description: 'Aktuelle Bundesliga Tabelle mit allen Statistiken und Wettquoten.',
    url: 'https://wettmarkt-vergleich.de/bundesliga-tabelle',
    type: 'website',
  },
}

const table = [
  { pos: 1, team: 'FC Bayern München', sp: 33, w: 26, d: 4, l: 3, gf: 89, ga: 38, gd: 51, pts: 82, trend: ['W','W','W','W','W'], badge: 'Meister' },
  { pos: 2, team: 'Bayer 04 Leverkusen', sp: 33, w: 24, d: 5, l: 4, gf: 81, ga: 42, gd: 39, pts: 77, trend: ['W','W','W','D','W'], badge: 'CL' },
  { pos: 3, team: 'RB Leipzig', sp: 33, w: 22, d: 6, l: 5, gf: 74, ga: 44, gd: 30, pts: 72, trend: ['W','W','D','W','W'], badge: 'CL' },
  { pos: 4, team: 'Borussia Dortmund', sp: 33, w: 19, d: 7, l: 7, gf: 69, ga: 51, gd: 18, pts: 64, trend: ['L','W','D','L','W'], badge: 'CL' },
  { pos: 5, team: 'Eintracht Frankfurt', sp: 33, w: 18, d: 5, l: 10, gf: 63, ga: 52, gd: 11, pts: 59, trend: ['W','W','W','W','D'], badge: 'EL' },
  { pos: 6, team: 'VfB Stuttgart', sp: 33, w: 16, d: 8, l: 9, gf: 59, ga: 49, gd: 10, pts: 56, trend: ['D','W','L','W','W'], badge: 'EL' },
  { pos: 7, team: 'SC Freiburg', sp: 33, w: 15, d: 8, l: 10, gf: 55, ga: 48, gd: 7, pts: 53, trend: ['W','L','D','W','L'], badge: 'CONF' },
  { pos: 8, team: 'Borussia Mönchengladbach', sp: 33, w: 14, d: 9, l: 10, gf: 52, ga: 50, gd: 2, pts: 51, trend: ['D','W','D','L','W'], badge: null },
  { pos: 9, team: 'TSG Hoffenheim', sp: 33, w: 13, d: 9, l: 11, gf: 57, ga: 57, gd: 0, pts: 48, trend: ['W','L','W','D','W'], badge: null },
  { pos: 10, team: 'VfL Wolfsburg', sp: 33, w: 12, d: 9, l: 12, gf: 51, ga: 53, gd: -2, pts: 45, trend: ['W','D','L','W','D'], badge: null },
  { pos: 11, team: 'FC Augsburg', sp: 33, w: 11, d: 10, l: 12, gf: 46, ga: 54, gd: -8, pts: 43, trend: ['D','L','W','D','L'], badge: null },
  { pos: 12, team: 'Werder Bremen', sp: 33, w: 10, d: 11, l: 12, gf: 50, ga: 56, gd: -6, pts: 41, trend: ['L','D','W','D','D'], badge: null },
  { pos: 13, team: 'Mainz 05', sp: 33, w: 10, d: 8, l: 15, gf: 44, ga: 58, gd: -14, pts: 38, trend: ['L','D','L','W','L'], badge: null },
  { pos: 14, team: 'Union Berlin', sp: 33, w: 9, d: 9, l: 15, gf: 40, ga: 59, gd: -19, pts: 36, trend: ['D','L','D','D','W'], badge: null },
  { pos: 15, team: 'FC Heidenheim', sp: 33, w: 8, d: 8, l: 17, gf: 38, ga: 62, gd: -24, pts: 32, trend: ['L','D','L','L','W'], badge: null },
  { pos: 16, team: '1. FC Köln', sp: 33, w: 7, d: 8, l: 18, gf: 36, ga: 66, gd: -30, pts: 29, trend: ['L','L','D','L','L'], badge: 'Relegation' },
  { pos: 17, team: 'Bochum', sp: 33, w: 5, d: 9, l: 19, gf: 33, ga: 70, gd: -37, pts: 24, trend: ['L','L','L','D','L'], badge: 'Abstieg' },
  { pos: 18, team: 'Darmstadt 98', sp: 33, w: 3, d: 7, l: 23, gf: 28, ga: 79, gd: -51, pts: 16, trend: ['L','L','L','L','D'], badge: 'Abstieg' },
]

function TrendBadge({ result }: { result: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    W: { bg: '#dcfce7', color: '#16a34a' },
    D: { bg: '#fef3c7', color: '#d97706' },
    L: { bg: '#fee2e2', color: '#dc2626' },
  }
  const c = colors[result] || { bg: '#F3F3EE', color: '#6B7280' }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '4px', backgroundColor: c.bg, color: c.color, fontSize: '0.7rem', fontWeight: 700 }}>
      {result === 'W' ? 'S' : result === 'L' ? 'N' : 'U'}
    </span>
  )
}

function PositionBadge({ badge }: { badge: string | null }) {
  if (!badge) return null
  const colors: Record<string, { bg: string; color: string }> = {
    Meister: { bg: '#fef3c7', color: '#d97706' },
    CL: { bg: '#dbeafe', color: '#1d4ed8' },
    EL: { bg: '#ede9fe', color: '#7c3aed' },
    CONF: { bg: '#dcfce7', color: '#16a34a' },
    Relegation: { bg: '#fef3c7', color: '#d97706' },
    Abstieg: { bg: '#fee2e2', color: '#dc2626' },
  }
  const c = colors[badge] || { bg: '#F3F3EE', color: '#6B7280' }
  return (
    <span style={{ fontSize: '0.65rem', fontWeight: 600, backgroundColor: c.bg, color: c.color, padding: '1px 5px', borderRadius: '3px', marginLeft: '4px', letterSpacing: '0.02em' }}>
      {badge}
    </span>
  )
}

export default function BundesligaTabellenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    name: 'Bundesliga Tabelle 2025/26 – Spieltag 33',
    description: 'Aktuelle Bundesliga Tabelle mit Punktestand, Toren und Tordifferenz nach dem 33. Spieltag.',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ paddingTop: '100px', paddingBottom: '4rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
            Saison 2025/26 · Nach Spieltag 33
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1.25rem' }}
          >
            Bundesliga Tabelle 2025/26
          </h1>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#6B7280', maxWidth: '620px', marginBottom: '2rem' }}>
            Aktueller Tabellenstand der Fußball-Bundesliga nach dem 33. Spieltag. FC Bayern München ist Meister, das Rennen um Europacup-Plätze und gegen den Abstieg ist noch offen.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.75rem' }}>
            {[
              { badge: 'Meister', label: 'Meister' },
              { badge: 'CL', label: 'Champions League' },
              { badge: 'EL', label: 'Europa League' },
              { badge: 'CONF', label: 'Conference League' },
              { badge: 'Relegation', label: 'Relegation' },
              { badge: 'Abstieg', label: 'Direkter Abstieg' },
            ].map(l => (
              <span key={l.badge} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280' }}>
                <PositionBadge badge={l.badge} /> {l.label}
              </span>
            ))}
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid #E5E5E0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#F3F3EE', borderBottom: '2px solid #E5E5E0' }}>
                  {['#', 'Team', 'Sp', 'S', 'U', 'N', 'Tore', 'TD', 'Pkt', 'Form'].map(h => (
                    <th
                      key={h}
                      style={{
                        padding: '0.75rem 1rem',
                        textAlign: h === 'Team' ? 'left' : 'center',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#9CA3AF',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => {
                  const isZoneBorder = [4, 6, 15, 16].includes(row.pos)
                  const borderStyle = isZoneBorder ? '2px solid' : '1px solid #F3F3EE'
                  const borderColor = row.pos === 4 ? '#1d4ed8' : row.pos === 6 ? '#7c3aed' : row.pos === 15 ? '#d97706' : row.pos === 16 ? '#dc2626' : undefined

                  return (
                    <tr
                      key={row.team}
                      style={{
                        borderBottom: borderStyle,
                        borderBottomColor: borderColor || '#F3F3EE',
                        backgroundColor: row.pos === 1 ? '#fefce8' : i % 2 === 0 ? '#fff' : '#FAFAF7',
                        transition: 'background 0.15s',
                      }}
                    >
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 700, color: row.pos <= 4 ? '#1A1A1A' : '#6B7280', width: '40px' }}>
                        {row.pos}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: row.pos <= 3 ? 700 : 400, color: '#1A1A1A', whiteSpace: 'nowrap' }}>
                        {row.team}
                        <PositionBadge badge={row.badge} />
                      </td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#6B7280' }}>{row.sp}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#16a34a', fontWeight: 600 }}>{row.w}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#6B7280' }}>{row.d}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#dc2626' }}>{row.l}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#4A4A4A' }}>{row.gf}:{row.ga}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: row.gd > 0 ? '#16a34a' : row.gd < 0 ? '#dc2626' : '#6B7280', fontWeight: 600 }}>
                        {row.gd > 0 ? '+' : ''}{row.gd}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 700, fontSize: '1rem', color: '#1A1A1A' }}>{row.pts}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <div style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                          {row.trend.map((t, ti) => <TrendBadge key={ti} result={t} />)}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '1rem' }}>
            Stand: nach Spieltag 33 der Bundesliga-Saison 2025/26. Form: S = Sieg, U = Unentschieden, N = Niederlage (letzten 5 Spiele).
          </p>

          {/* CTA */}
          <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="font-serif" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1A1A1A', marginBottom: '0.25rem' }}>
                Trade auf die Bundesliga bei Atlas Market
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                Faire Quoten ohne Buchmacher-Marge. Jetzt Konto eröffnen und auf Meister, Abstieg oder den Spieltag wetten.
              </p>
            </div>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Jetzt bei Atlas Market →
            </a>
          </div>

          {/* Related links */}
          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '1rem' }}>
              Weiterführende Inhalte
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tipps" style={{ fontSize: '0.875rem', color: '#16a34a', textDecoration: 'none', fontWeight: 600 }}>Spieltag 34 Tipps →</Link>
              <Link href="/strategien" style={{ fontSize: '0.875rem', color: '#16a34a', textDecoration: 'none', fontWeight: 600 }}>Wettstrategien →</Link>
              <Link href="/wettanbieter" style={{ fontSize: '0.875rem', color: '#16a34a', textDecoration: 'none', fontWeight: 600 }}>Wettanbieter Vergleich →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

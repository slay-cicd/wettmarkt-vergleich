import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bundesliga Quoten-Vergleich – Beste Wettquoten 2026',
  description: 'Direktvergleich der aktuellen Bundesliga-Quoten bei bet365, bwin, Tipico, betway, Unibet und Atlas Market. Beste Quoten sofort sehen.',
  keywords: ['Quoten Vergleich', 'Bundesliga Quoten', 'Sportwetten Quoten', 'Beste Quoten', 'Buchmacher Vergleich'],
}

const bookmakers = ['bet365', 'bwin', 'Tipico', 'betway', 'Unibet', 'Atlas Market']

type MatchOdds = {
  home: number
  draw: number
  away: number
}

type Match = {
  date: string
  home: string
  away: string
  odds: Record<string, MatchOdds>
}

const matches: Match[] = [
  {
    date: '12.04.2026',
    home: 'Bayern München',
    away: 'Borussia Dortmund',
    odds: {
      'bet365':     { home: 1.85, draw: 3.50, away: 4.20 },
      'bwin':       { home: 1.82, draw: 3.45, away: 4.15 },
      'Tipico':     { home: 1.80, draw: 3.40, away: 4.10 },
      'betway':     { home: 1.87, draw: 3.55, away: 4.25 },
      'Unibet':     { home: 1.86, draw: 3.52, away: 4.22 },
      'Atlas Market': { home: 1.95, draw: 3.75, away: 4.55 },
    },
  },
  {
    date: '12.04.2026',
    home: 'Bayer Leverkusen',
    away: 'RB Leipzig',
    odds: {
      'bet365':     { home: 2.10, draw: 3.30, away: 3.60 },
      'bwin':       { home: 2.08, draw: 3.25, away: 3.55 },
      'Tipico':     { home: 2.05, draw: 3.20, away: 3.50 },
      'betway':     { home: 2.12, draw: 3.35, away: 3.65 },
      'Unibet':     { home: 2.11, draw: 3.32, away: 3.62 },
      'Atlas Market': { home: 2.22, draw: 3.55, away: 3.88 },
    },
  },
  {
    date: '12.04.2026',
    home: 'Eintracht Frankfurt',
    away: 'VfB Stuttgart',
    odds: {
      'bet365':     { home: 2.25, draw: 3.20, away: 3.25 },
      'bwin':       { home: 2.22, draw: 3.15, away: 3.20 },
      'Tipico':     { home: 2.20, draw: 3.10, away: 3.18 },
      'betway':     { home: 2.28, draw: 3.22, away: 3.28 },
      'Unibet':     { home: 2.26, draw: 3.21, away: 3.26 },
      'Atlas Market': { home: 2.40, draw: 3.42, away: 3.48 },
    },
  },
  {
    date: '13.04.2026',
    home: 'Borussia Mönchengladbach',
    away: 'Werder Bremen',
    odds: {
      'bet365':     { home: 2.00, draw: 3.40, away: 3.80 },
      'bwin':       { home: 1.98, draw: 3.35, away: 3.75 },
      'Tipico':     { home: 1.95, draw: 3.30, away: 3.70 },
      'betway':     { home: 2.02, draw: 3.42, away: 3.82 },
      'Unibet':     { home: 2.01, draw: 3.41, away: 3.81 },
      'Atlas Market': { home: 2.12, draw: 3.62, away: 4.05 },
    },
  },
  {
    date: '13.04.2026',
    home: 'SC Freiburg',
    away: '1. FC Köln',
    odds: {
      'bet365':     { home: 1.75, draw: 3.50, away: 5.00 },
      'bwin':       { home: 1.72, draw: 3.45, away: 4.90 },
      'Tipico':     { home: 1.70, draw: 3.40, away: 4.80 },
      'betway':     { home: 1.77, draw: 3.55, away: 5.10 },
      'Unibet':     { home: 1.76, draw: 3.52, away: 5.05 },
      'Atlas Market': { home: 1.88, draw: 3.75, away: 5.40 },
    },
  },
  {
    date: '14.04.2026',
    home: 'Hamburger SV',
    away: 'Hertha BSC',
    odds: {
      'bet365':     { home: 2.30, draw: 3.10, away: 3.10 },
      'bwin':       { home: 2.27, draw: 3.05, away: 3.05 },
      'Tipico':     { home: 2.25, draw: 3.00, away: 3.00 },
      'betway':     { home: 2.32, draw: 3.12, away: 3.12 },
      'Unibet':     { home: 2.31, draw: 3.11, away: 3.11 },
      'Atlas Market': { home: 2.45, draw: 3.32, away: 3.32 },
    },
  },
]

function getBestOdds(matches: Match[], bookie: string, matchIdx: number, type: 'home' | 'draw' | 'away') {
  const allOdds = bookmakers.map(b => matches[matchIdx].odds[b]?.[type] ?? 0)
  const val = matches[matchIdx].odds[bookie]?.[type] ?? 0
  const max = Math.max(...allOdds)
  return { val, isBest: val === max && max > 0 }
}

function calcMarginForMatch(odds: MatchOdds) {
  const total = 1/odds.home + 1/odds.draw + 1/odds.away
  return ((total - 1) * 100).toFixed(1) + '%'
}

export default function QuotenVergleichPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>📊 34. Spieltag · Bundesliga 2025/26</span>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#1A1A1A' }}
          >
            Bundesliga Quoten-Vergleich
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8, maxWidth: '700px' }}>
            Direkte Gegenüberstellung der Quoten bei allen großen Buchmachers — beste Quote grün markiert. Atlas Market zeigt, wie fairer Markt aussieht.
          </p>
        </div>
      </section>

      {/* Tables per match */}
      <section style={{ padding: '0 1.25rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        {matches.map((match, mi) => (
          <div key={mi} style={{ marginBottom: '2rem', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', overflow: 'hidden' }}>
            {/* Match header */}
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E5E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', backgroundColor: '#F3F3EE' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{match.date} · Bundesliga</div>
                <h2 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A' }}>
                  {match.home} <span style={{ color: '#9CA3AF', fontWeight: 400 }}>vs.</span> {match.away}
                </h2>
              </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="compare-table" style={{ minWidth: '580px' }}>
                <thead>
                  <tr>
                    <th>Anbieter</th>
                    <th style={{ textAlign: 'center' }}>🏠 Heim</th>
                    <th style={{ textAlign: 'center' }}>X Unentschieden</th>
                    <th style={{ textAlign: 'center' }}>✈ Auswärts</th>
                    <th style={{ textAlign: 'center' }}>Marge</th>
                  </tr>
                </thead>
                <tbody>
                  {bookmakers.map((bm) => {
                    const isAtlas = bm === 'Atlas Market'
                    const home = getBestOdds(matches, bm, mi, 'home')
                    const draw = getBestOdds(matches, bm, mi, 'draw')
                    const away = getBestOdds(matches, bm, mi, 'away')
                    const margin = calcMarginForMatch(match.odds[bm])

                    return (
                      <tr key={bm} className={isAtlas ? 'atlas-row' : ''}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: isAtlas ? 700 : 500, color: isAtlas ? '#16a34a' : '#1A1A1A', fontSize: '0.9375rem' }}>
                              {bm}
                            </span>
                            {isAtlas && <span className="tag-pill">0% Marge</span>}
                          </div>
                        </td>
                        {[home, draw, away].map((o, oi) => (
                          <td key={oi} style={{ textAlign: 'center' }}>
                            <span className={o.isBest ? 'best-odds' : ''} style={{
                              fontWeight: o.isBest ? 700 : 400,
                              fontSize: '1rem',
                              background: o.isBest ? '#DCFCE7' : 'transparent',
                              padding: o.isBest ? '0.2rem 0.5rem' : '0.2rem 0',
                              borderRadius: o.isBest ? '6px' : '0',
                              display: 'inline-block',
                            }}>
                              {o.val.toFixed(2)}
                            </span>
                          </td>
                        ))}
                        <td style={{ textAlign: 'center' }}>
                          <span style={{ fontWeight: 600, fontSize: '0.875rem', color: isAtlas ? '#16a34a' : '#9CA3AF' }}>
                            {isAtlas ? '0.0%' : margin}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.8125rem', color: '#9CA3AF', padding: '1rem 0' }}>
          <span><span style={{ background: '#DCFCE7', color: '#16a34a', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>2.45</span> = Beste Quote</span>
          <span>Quoten ohne Garantie · Zuletzt aktualisiert: 05.04.2026</span>
        </div>
      </section>

      {/* CTA */}
      <div style={{ borderTop: '1px solid #E5E5E0' }}>
        <section style={{ padding: '4rem 1.25rem', textAlign: 'center', backgroundColor: '#F3F3EE' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2
              className="font-serif"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}
            >
              Warum Atlas Market immer vorne liegt
            </h2>
            <p style={{ color: '#6B7280', lineHeight: 1.8, marginBottom: '2rem' }}>
              Andere Buchmacher bieten schlechtere Quoten, weil sie eine Marge einbauen — ihren Profit. Atlas Market ist ein echter Markt: Du handelst gegen andere Nutzer, nicht gegen das Haus. Deshalb sind die Quoten fair und die Marge 0%.
            </p>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Jetzt zu Atlas Markets →
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

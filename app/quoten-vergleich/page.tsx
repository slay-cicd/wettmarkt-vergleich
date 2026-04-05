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
      <section style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1e3a 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid #1e2d4a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>📊 34. SPIELTAG · BUNDESLIGA 2025/26</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#ffffff' }}>
            Bundesliga<br /><span style={{ color: '#00ff88' }}>Quoten-Vergleich</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '700px' }}>
            Direkte Gegenüberstellung der Quoten bei allen großen Buchmachers — beste Quote grün markiert. Atlas Market zeigt, wie fairer Markt aussieht.
          </p>
        </div>
      </section>

      {/* Tables per match */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {matches.map((match, mi) => (
          <div key={mi} style={{ marginBottom: '2.5rem', background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', overflow: 'hidden' }}>
            {/* Match header */}
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #1e2d4a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#718096', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '0.25rem' }}>{match.date} · BUNDESLIGA</div>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                  {match.home} <span style={{ color: '#718096', fontWeight: 400 }}>vs.</span> {match.away}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#718096' }}>
                <span>🏠 Heimsieg · X Unentschieden · ✈ Auswärtssieg</span>
              </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
                <thead>
                  <tr style={{ background: '#0f1628' }}>
                    <th style={{ padding: '0.75rem 1.25rem', textAlign: 'left', color: '#718096', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.06em' }}>ANBIETER</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.8rem' }}>🏠 HEIM</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.8rem' }}>X DRAW</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.8rem' }}>✈ AUSWÄRTS</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.8rem' }}>MARGE</th>
                  </tr>
                </thead>
                <tbody>
                  {bookmakers.map((bm, bi) => {
                    const isAtlas = bm === 'Atlas Market'
                    const home = getBestOdds(matches, bm, mi, 'home')
                    const draw = getBestOdds(matches, bm, mi, 'draw')
                    const away = getBestOdds(matches, bm, mi, 'away')
                    const margin = calcMarginForMatch(match.odds[bm])

                    return (
                      <tr key={bm} style={{
                        borderTop: '1px solid #1e2d4a',
                        background: isAtlas ? 'rgba(0,255,136,0.04)' : 'transparent',
                      }}>
                        <td style={{ padding: '0.875rem 1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: isAtlas ? 800 : 600, color: isAtlas ? '#00ff88' : '#ffffff', fontSize: '0.95rem' }}>
                              {bm}
                            </span>
                            {isAtlas && <span style={{ background: 'rgba(0,255,136,0.15)', color: '#00ff88', fontSize: '0.7rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px' }}>0% Marge</span>}
                          </div>
                        </td>
                        {[home, draw, away].map((o, oi) => (
                          <td key={oi} style={{ padding: '0.875rem 1rem', textAlign: 'center' }}>
                            <span style={{
                              fontWeight: 800,
                              fontSize: '1rem',
                              color: o.isBest ? '#00ff88' : (isAtlas ? '#a0e8c8' : '#c8d6e8'),
                              background: o.isBest ? 'rgba(0,255,136,0.12)' : 'transparent',
                              padding: o.isBest ? '0.2rem 0.6rem' : '0.2rem 0',
                              borderRadius: o.isBest ? '6px' : '0',
                            }}>
                              {o.val.toFixed(2)}
                            </span>
                          </td>
                        ))}
                        <td style={{ padding: '0.875rem 1rem', textAlign: 'center' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.88rem', color: isAtlas ? '#00ff88' : '#718096' }}>
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
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#718096', padding: '1rem 0' }}>
          <span><span style={{ background: 'rgba(0,255,136,0.12)', color: '#00ff88', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>2.45</span> = Beste Quote</span>
          <span>Quoten ohne Garantie · Zuletzt aktualisiert: 05.04.2026</span>
        </div>
      </section>

      {/* CTA + explanation */}
      <section style={{ background: '#0f1628', borderTop: '1px solid #1e2d4a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Warum Atlas Market immer vorne liegt</h2>
          <p style={{ color: '#a0aec0', lineHeight: 1.8, marginBottom: '2rem' }}>
            Andere Buchmacher bieten schlechtere Quoten, weil sie eine Marge einbauen — ihren Profit. Atlas Market ist ein echter Markt: Du wettest gegen andere Nutzer, nicht gegen das Haus. Deshalb sind die Quoten fair und die Marge 0%.
          </p>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.85rem 2.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
            Jetzt zu Atlas Market →
          </a>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import KellyRechnerClient from './KellyRechnerClient'

export const metadata: Metadata = {
  title: 'Kelly-Kriterium Rechner – Optimalen Wetteinsatz berechnen',
  description: 'Berechne deinen optimalen Sportwetten-Einsatz mit dem Kelly-Kriterium. Vollständig, halb und viertel Kelly — inkl. Erwartungswert-Analyse. Kostenlos.',
  keywords: ['Kelly Kriterium', 'Kelly Rechner', 'Sportwetten Einsatz', 'Value Betting', 'Bankroll Management'],
}

export default function KellyRechnerPage() {
  return (
    <>
      <section style={{ paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>Kostenloses Tool</span>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#1A1A1A' }}
          >
            Kelly-Kriterium Rechner
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8, maxWidth: '600px' }}>
            Das Kelly-Kriterium berechnet mathematisch den optimalen Einsatz für eine Wette — basierend auf deiner eigenen Wahrscheinlichkeitsschätzung. Nie wieder zu viel oder zu wenig setzen.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <KellyRechnerClient />
      </section>

      <section style={{ borderTop: '1px solid #E5E5E0', padding: '4rem 1.25rem', backgroundColor: '#F3F3EE' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Was ist das Kelly-Kriterium?
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <p style={{ color: '#4A4A4A', lineHeight: 1.8 }}>
              Das <strong style={{ color: '#1A1A1A' }}>Kelly-Kriterium</strong> ist eine mathematische Formel für optimales Bankroll-Management. Es berechnet den Prozentsatz deines Kapitals, den du auf eine Wette setzen solltest, um langfristiges Kapitalwachstum zu maximieren.
            </p>
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 className="font-serif" style={{ color: '#1A1A1A', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.125rem' }}>
                Die Formel
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#4A4A4A', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                <strong>f* = (b·p − q) / b</strong>
              </p>
              <ul style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                <li><strong style={{ color: '#1A1A1A' }}>f*</strong> = optimaler Einsatz als Anteil der Bankroll</li>
                <li><strong style={{ color: '#1A1A1A' }}>b</strong> = Netto-Quote (Quote − 1)</li>
                <li><strong style={{ color: '#1A1A1A' }}>p</strong> = deine geschätzte Gewinnwahrscheinlichkeit</li>
                <li><strong style={{ color: '#1A1A1A' }}>q</strong> = 1 − p (Verlustwahrscheinlichkeit)</li>
              </ul>
            </div>
            <p style={{ color: '#4A4A4A', lineHeight: 1.8 }}>
              In der Praxis empfehlen viele Profis den <strong style={{ color: '#1A1A1A' }}>Halb-Kelly</strong> — dieser reduziert die Volatilität deutlich bei nur leicht geringeren Ertragserwartungen.
            </p>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #E5E5E0' }}>
        <section style={{ padding: '4rem 1.25rem', textAlign: 'center', backgroundColor: '#F3F3EE' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <h2
              className="font-serif"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}
            >
              Faire Quoten für bessere Kalkulationen.
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Auf Atlas Market handelst du zu Marktpreisen ohne Buchmacher-Marge — perfekt für Value Betting.
            </p>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Zu Atlas Markets →
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

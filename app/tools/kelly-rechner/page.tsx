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
      <section style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1e3a 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid #1e2d4a' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>🔧 KOSTENLOSES TOOL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#ffffff' }}>
            Kelly-Kriterium<br /><span style={{ color: '#00ff88' }}>Rechner</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '600px' }}>
            Das Kelly-Kriterium berechnet mathematisch den optimalen Einsatz für eine Wette — basierend auf deiner eigenen Wahrscheinlichkeitsschätzung. Nie wieder zu viel oder zu wenig setzen.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <KellyRechnerClient />
      </section>

      {/* Explanation */}
      <section style={{ background: '#0f1628', borderTop: '1px solid #1e2d4a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>Das Kelly-Kriterium erklärt</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ color: '#00ff88', fontWeight: 700, marginBottom: '0.75rem' }}>Die Formel</h3>
              <div style={{ background: '#0a0f1c', borderRadius: '8px', padding: '1rem', fontFamily: 'monospace', fontSize: '0.95rem', color: '#00ff88', textAlign: 'center', letterSpacing: '0.02em' }}>
                f* = (b × p − q) / b
              </div>
              <div style={{ marginTop: '0.875rem', fontSize: '0.88rem', color: '#a0aec0', lineHeight: 1.7 }}>
                <strong style={{ color: '#ffffff' }}>f*</strong> = optimaler Anteil der Bankroll<br />
                <strong style={{ color: '#ffffff' }}>b</strong> = Nettogewinn bei Sieg (Quote − 1)<br />
                <strong style={{ color: '#ffffff' }}>p</strong> = geschätzte Gewinnwahrscheinlichkeit<br />
                <strong style={{ color: '#ffffff' }}>q</strong> = Verlustwahrscheinlichkeit (1 − p)
              </div>
            </div>
            <div style={{ color: '#c8d6e8', lineHeight: 1.8 }}>
              <p>
                Das Kelly-Kriterium wurde 1956 von John L. Kelly Jr. entwickelt und maximiert langfristig das logarithmische Kapitalwachstum. Professionelle Sportwetter und Trader nutzen es seit Jahrzehnten.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Voll-Kelly', desc: 'Maximales Wachstum, aber hohe Schwankungen. Nur für Experten mit sehr genauen Wahrscheinlichkeiten.', color: '#ff9500' },
                { title: 'Halb-Kelly', desc: 'Halbierter Einsatz, deutlich weniger Volatilität, ~75% des maximalen Wachstums.', color: '#00ff88' },
                { title: 'Viertel-Kelly', desc: 'Sehr konservativ, kaum Drawdown-Risiko. Ideal für Einsteiger.', color: '#00ccff' },
              ].map(opt => (
                <div key={opt.title} style={{ background: '#141d35', border: `1px solid ${opt.color}22`, borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <div style={{ fontWeight: 700, color: opt.color, marginBottom: '0.4rem' }}>{opt.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#a0aec0', lineHeight: 1.6 }}>{opt.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f1e3a 0%, #0a1628 100%)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: '16px', margin: '0 1.5rem 4rem', maxWidth: '1200px', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Faire Preise, echter Markt.</h2>
        <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Mit 0% Marge bei Atlas Market funktioniert Value-Betting so wie es soll — ohne Buchmacher-Vorteil der deine Rendite auffrisst.</p>
        <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.85rem 2.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
          Jetzt kostenlos starten →
        </a>
      </section>
    </>
  )
}

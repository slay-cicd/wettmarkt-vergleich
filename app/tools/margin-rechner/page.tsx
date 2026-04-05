import type { Metadata } from 'next'
import MarginRechnerClient from './MarginRechnerClient'

export const metadata: Metadata = {
  title: 'Sportwetten Margin-Rechner – Buchmacher-Marge berechnen',
  description: 'Berechne die versteckte Buchmacher-Marge aus jeder Quote. Zeige faire Quoten an und vergleiche mit Atlas Market (0% Marge). Kostenlos & sofort.',
  keywords: ['Margin Rechner', 'Buchmacher Marge', 'Sportwetten Marge', 'Overround berechnen', 'faire Quoten'],
}

export default function MarginRechnerPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1e3a 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid #1e2d4a' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>🔧 KOSTENLOSES TOOL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#ffffff' }}>
            Sportwetten<br /><span style={{ color: '#00ff88' }}>Margin-Rechner</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '600px' }}>
            Gib die Quoten eines Buchmacher-Markts ein — wir zeigen dir, wie viel der Buchmacher einbehält, was die fairen Quoten sind, und wie Atlas Market abschneidet.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <MarginRechnerClient />
      </section>

      {/* Explanation */}
      <section style={{ background: '#0f1628', borderTop: '1px solid #1e2d4a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>Was ist die Buchmacher-Marge?</h2>
          <div style={{ display: 'grid', gap: '1.5rem', color: '#c8d6e8', lineHeight: 1.8 }}>
            <p>
              Die <strong style={{ color: '#ffffff' }}>Marge</strong> (auch Overround oder Vig genannt) ist der eingebaute Vorteil des Buchmachers. Sie entsteht dadurch, dass die angebotenen Quoten schlechter sind als die echten Wahrscheinlichkeiten — der Buchmacher kassiert die Differenz.
            </p>
            <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ color: '#00ff88', fontWeight: 700, marginBottom: '0.75rem' }}>Rechenbeispiel</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Ein fairer Münzwurf hat je 50% Wahrscheinlichkeit. Faire Quoten wären <strong style={{ color: '#ffffff' }}>2,00</strong> auf jede Seite.<br />
                Ein Buchmacher bietet vielleicht <strong style={{ color: '#ff9500' }}>1,90</strong> — das entspricht 52,6% pro Seite = 105,2% gesamt.<br />
                Die <strong style={{ color: '#ff9500' }}>5,2% Marge</strong> ist sein Profit auf jeden Euro Einsatz.
              </p>
            </div>
            <p>
              <strong style={{ color: '#00ff88' }}>Atlas Market</strong> funktioniert als echter Markt: Käufer und Verkäufer handeln direkt miteinander. Die Marge ist <strong style={{ color: '#ffffff' }}>0%</strong> — du bekommst immer faire Preise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f1e3a 0%, #0a1628 100%)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: '16px', margin: '0 1.5rem 4rem', maxWidth: '1200px', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>0% Marge — immer.</h2>
        <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Bei Atlas Market wettest du gegen den Markt, nicht gegen einen Buchmacher. Kein Haus-Vorteil, faire Preise.</p>
        <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.85rem 2.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
          Jetzt kostenlos starten →
        </a>
      </section>
    </>
  )
}

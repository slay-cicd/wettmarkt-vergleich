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
      <section style={{ paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>Kostenloses Tool</span>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#1A1A1A' }}
          >
            Sportwetten Margin-Rechner
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8, maxWidth: '600px' }}>
            Gib die Quoten eines Buchmacher-Markts ein — wir zeigen dir, wie viel der Buchmacher einbehält, was die fairen Quoten sind, und wie Atlas Market abschneidet.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section style={{ padding: '0 1.25rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <MarginRechnerClient />
      </section>

      {/* Explanation */}
      <section style={{ borderTop: '1px solid #E5E5E0', padding: '4rem 1.25rem', backgroundColor: '#F3F3EE' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Was ist die Buchmacher-Marge?
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <p style={{ color: '#4A4A4A', lineHeight: 1.8 }}>
              Die <strong style={{ color: '#1A1A1A' }}>Marge</strong> (auch Overround oder Vig genannt) ist der eingebaute Vorteil des Buchmachers. Sie entsteht dadurch, dass die angebotenen Quoten schlechter sind als die echten Wahrscheinlichkeiten — der Buchmacher kassiert die Differenz.
            </p>
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 className="font-serif" style={{ color: '#1A1A1A', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.125rem' }}>
                Rechenbeispiel
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#4A4A4A', lineHeight: 1.8 }}>
                Ein fairer Münzwurf hat je 50% Wahrscheinlichkeit. Faire Quoten wären <strong style={{ color: '#1A1A1A' }}>2,00</strong> auf jede Seite.<br />
                Ein Buchmacher bietet vielleicht <strong style={{ color: '#ea580c' }}>1,90</strong> — das entspricht 52,6% pro Seite = 105,2% gesamt.<br />
                Die <strong style={{ color: '#ea580c' }}>5,2% Marge</strong> ist sein Profit auf jeden Euro Einsatz.
              </p>
            </div>
            <p style={{ color: '#4A4A4A', lineHeight: 1.8 }}>
              <strong style={{ color: '#16a34a' }}>Atlas Market</strong> funktioniert als echter Markt: Käufer und Verkäufer handeln direkt miteinander. Die Marge ist <strong style={{ color: '#1A1A1A' }}>0%</strong> — du bekommst immer faire Preise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ borderTop: '1px solid #E5E5E0' }}>
        <section style={{ padding: '4rem 1.25rem', textAlign: 'center', backgroundColor: '#F3F3EE' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <h2
              className="font-serif"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}
            >
              0% Marge — immer.
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Bei Atlas Market wettest du gegen den Markt, nicht gegen einen Buchmacher. Kein Haus-Vorteil, faire Preise.
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

import type { Metadata } from 'next'
import SystemWettenClient from './SystemWettenClient'

export const metadata: Metadata = {
  title: 'Systemwetten Rechner – 2 aus 3, 3 aus 4 & mehr berechnen',
  description: 'Systemwetten kostenlos berechnen: Alle Kombinationen, Einsatz pro Wette und mögliche Gewinne auf einen Blick. 2 aus 3, 3 aus 4 und mehr.',
  keywords: ['Systemwetten Rechner', 'System Wette', '2 aus 3', '3 aus 4', 'Kombinationswette'],
}

export default function SystemWettenPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1e3a 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid #1e2d4a' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>🔧 KOSTENLOSES TOOL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#ffffff' }}>
            Systemwetten<br /><span style={{ color: '#00ff88' }}>Rechner</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '600px' }}>
            Berechne alle Kombinationen für deine Systemwette — von 2 aus 3 bis 5 aus 8. Sieh sofort, was du bei welcher Kombination gewinnst.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <SystemWettenClient />
      </section>

      <section style={{ background: '#0f1628', borderTop: '1px solid #1e2d4a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>Was sind Systemwetten?</h2>
          <div style={{ display: 'grid', gap: '1.25rem', color: '#c8d6e8', lineHeight: 1.8 }}>
            <p>Bei einer <strong style={{ color: '#ffffff' }}>Systemwette</strong> kombinierst du mehrere Einzelwetten so, dass nicht alle treffen müssen. Beim System „2 aus 3" zum Beispiel gewinnst du, wenn mindestens 2 von 3 Auswahlen korrekt sind.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {[
                { label: '2 aus 3', combos: '3 Kombis', desc: 'Mindestens 2 von 3 müssen treffen' },
                { label: '3 aus 4', combos: '4 Kombis', desc: 'Mindestens 3 von 4 müssen treffen' },
                { label: '3 aus 5', combos: '10 Kombis', desc: 'Mindestens 3 von 5 müssen treffen' },
                { label: '4 aus 6', combos: '15 Kombis', desc: 'Mindestens 4 von 6 müssen treffen' },
              ].map(s => (
                <div key={s.label} style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ fontWeight: 800, color: '#00ff88', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: '#718096', marginBottom: '0.25rem' }}>{s.combos}</div>
                  <div style={{ fontSize: '0.85rem', color: '#a0aec0' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #0f1e3a 0%, #0a1628 100%)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: '16px', margin: '0 1.5rem 4rem', maxWidth: '1200px', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Fairer wetten mit Atlas Market</h2>
        <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Keine versteckten Margen, echte Marktquoten. Systemwetten funktionieren am besten mit fairen Ausgangsquoten.</p>
        <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.85rem 2.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
          Jetzt kostenlos starten →
        </a>
      </section>
    </>
  )
}

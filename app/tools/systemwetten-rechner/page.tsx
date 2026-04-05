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
      <section style={{ paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>Kostenloses Tool</span>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#1A1A1A' }}
          >
            Systemwetten Rechner
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8, maxWidth: '600px' }}>
            Berechne alle Kombinationen für deine Systemwette — von 2 aus 3 bis 5 aus 8. Sieh sofort, was du bei welcher Kombination gewinnst.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <SystemWettenClient />
      </section>

      <section style={{ borderTop: '1px solid #E5E5E0', padding: '4rem 1.25rem', backgroundColor: '#F3F3EE' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Was sind Systemwetten?
          </h2>
          <p style={{ color: '#4A4A4A', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Bei einer <strong style={{ color: '#1A1A1A' }}>Systemwette</strong> wählst du mehrere Ereignisse und kombinierst sie in mehreren Wetten. Im Gegensatz zu einem Kombiwettschein musst du nicht alle Tipps richtig haben — ein gewisser Anteil reicht für einen Gewinn.
          </p>
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 className="font-serif" style={{ color: '#1A1A1A', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.125rem' }}>Beispiel: 2 aus 3</h3>
            <p style={{ fontSize: '0.9375rem', color: '#4A4A4A', lineHeight: 1.8 }}>
              Du wählst 3 Spiele und spielst alle Zweier-Kombinationen (3 Wetten). Du gewinnst, wenn mindestens 2 von 3 Tipps stimmen — selbst wenn ein Spiel falsch liegt.
            </p>
          </div>
          <p style={{ color: '#4A4A4A', lineHeight: 1.8 }}>
            Der Nachteil: Der mögliche Gewinn ist geringer als bei einem reinen Kombiwettschein. Der Vorteil: Du bist gegen einen Fehltipp abgesichert.
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #E5E5E0' }}>
        <section style={{ padding: '4rem 1.25rem', textAlign: 'center', backgroundColor: '#F3F3EE' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <h2
              className="font-serif"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}
            >
              Faire Quoten für alle Spiele.
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Systemwetten funktionieren besonders gut, wenn du faire Quoten bekommst. Atlas Market bietet 0% Marge.
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

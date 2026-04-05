import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bankroll Management – Sportwetten Kapital richtig verwalten',
  description: 'Professionelles Bankroll Management für Sportwetter: Einsatzgrößen, Staking-Systeme, Psychologie und Fehler vermeiden. Mit Beispielen und praktischen Regeln.',
  keywords: ['Bankroll Management Sportwetten', 'Einsatz Strategie Wetten', 'Wetteinsatz berechnen', 'Staking Plan', 'Kapital Sportwetten', 'Verluste begrenzen Wetten'],
  openGraph: {
    title: 'Bankroll Management – Sportwetten Kapital richtig verwalten',
    description: 'Professionelles Bankroll Management: Einsatzgrößen, Staking-Pläne und Fehler vermeiden.',
    url: 'https://wettmarkt-vergleich.de/strategien/bankroll-management',
    type: 'article',
  },
}

export default function BankrollManagementPage() {
  return (
    <article style={{ paddingTop: '100px', paddingBottom: '6rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <nav style={{ marginBottom: '2rem', fontSize: '0.8125rem', color: '#9CA3AF' }}>
          <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Startseite</Link>
          {' / '}
          <Link href="/strategien" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Strategien</Link>
          {' / '}
          <span style={{ color: '#4A4A4A' }}>Bankroll Management</span>
        </nav>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {['Für alle', 'Disziplin', 'Risikomanagement'].map(tag => (
            <span key={tag} style={{ fontSize: '0.7rem', backgroundColor: '#F3F3EE', color: '#6B7280', padding: '3px 8px', borderRadius: '4px' }}>{tag}</span>
          ))}
        </div>

        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1rem' }}
        >
          Bankroll Management: Das Fundament, das alle ignorieren
        </h1>

        <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '2.5rem', borderBottom: '1px solid #E5E5E0', paddingBottom: '2rem' }}>
          Du kannst die beste Analyse der Welt haben – wenn du dein Kapital falsch verwaltest, wirst du trotzdem verlieren. Bankroll Management ist das, was zwischen einem kurzen Erlebnis und einer nachhaltigen Sportwetten-Karriere steht. Und es wird von 90% aller Wetter komplett ignoriert.
        </p>

          {/* Hero image */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '48%', borderRadius: '12px', overflow: 'hidden', background: '#F3F3EE', marginBottom: '2.5rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80"
              alt="Bankroll Management Geldverwaltung"
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        <div className="article-prose">

          <h2>Was ist eine Bankroll?</h2>
          <p>
            Deine Bankroll ist das Geld, das du speziell für Sportwetten reserviert hast – getrennt von deinem Lebensunterhalt, deinen Ersparnissen, deinen anderen Ausgaben. Dieser Betrag steht dir vollständig zur Verfügung, und du kannst seinen vollständigen Verlust verkraften, ohne in finanzielle Schwierigkeiten zu geraten.
          </p>
          <p>
            Die erste Regel des Bankroll Managements: <strong>Bestimme deine Bankroll, bevor du anfängst.</strong> Nicht "so viel wie ich gerade habe", sondern ein bewusst gesetztes Limit. Wer keine klare Bankroll hat, hat auch kein Fundament für eine Strategie.
          </p>

          <h2>Die goldene Regel: Feste Einheiten</h2>
          <p>
            Das einfachste und effektivste System ist das Flat-Staking: Du setzt immer denselben festen Prozentsatz deiner Bankroll ein – typischerweise 1–3% pro Wette. Bei einer Bankroll von 500 Euro bedeutet das: 5–15 Euro pro Wette, unabhängig davon, wie "sicher" du dir fühlst.
          </p>
          <div style={{ backgroundColor: '#F3F3EE', borderRadius: '8px', padding: '1.25rem', margin: '1.5rem 0' }}>
            <p className="font-serif" style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '0.75rem', fontSize: '1rem' }}>Empfohlene Einsatzgrößen nach Strategie</p>
            {[
              { level: 'Einsteiger / Hobby', pct: '1–2%', example: '5–10 € bei 500 € Bankroll' },
              { level: 'Fortgeschrittene', pct: '2–3%', example: '10–15 € bei 500 € Bankroll' },
              { level: 'Value Bettor', pct: 'Kelly-Kriterium', example: 'Je nach berechnetem Vorteil' },
              { level: 'Maximum', pct: '5%', example: '25 € bei 500 € Bankroll – nicht überschreiten' },
            ].map(r => (
              <div key={r.level} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #E5E5E0', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#4A4A4A' }}>{r.level}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A' }}>{r.pct}</span>
                <span style={{ fontSize: '0.8125rem', color: '#6B7280' }}>{r.example}</span>
              </div>
            ))}
          </div>

          <h2>Warum feste Einheiten, nicht feste Beträge?</h2>
          <p>
            Stell dir vor, du startest mit 500 Euro und setzt immer 20 Euro. Nach zehn Niederlagen hast du noch 300 Euro – aber setzt immer noch 20 Euro, was jetzt 6,7% deiner Bankroll sind. Das ist zu viel. Das Risiko des Totalverlustes wächst exponentiell.
          </p>
          <p>
            Wenn du stattdessen immer 4% einsetzt: Bei 500 Euro sind das 20 Euro. Bei 300 Euro sind das 12 Euro. Die absolute Zahl sinkt automatisch mit deiner Bankroll. So bleibst du länger im Spiel – und gibst dem System Zeit, sich zu entfalten.
          </p>

          <h2>Psychologie: Der größte Feind des Bankroll Managements</h2>
          <p>
            Nach einem Verlust wollen wir "aufholen". Nach einem Gewinn fühlen wir uns unbesiegbar und setzen mehr. Beides ist irrational und gefährlich.
          </p>
          <p>
            <strong>Chase-Verhalten:</strong> Höhere Einsätze nach Verlusten, um schnell ins Plus zu kommen. Das ist die schnellste Route zum Totalverlust. Ein schlechter Lauf kann sich über 20–30 Wetten erstrecken, auch wenn deine Strategie langfristig positiv ist. Wer in dieser Phase die Einsätze erhöht, ist raus.
          </p>
          <p>
            <strong>Gewinner-Effekt:</strong> Nach einem guten Monat fühlt sich 5% pro Wette "zu wenig" an. Dieser Impuls ist gefährlich. Bleib bei deinem System, auch wenn es sich langweilig anfühlt. Gerade das ist der Punkt.
          </p>

          <h2>Bankroll-Protokoll: Führe Buch</h2>
          <p>
            Jede ernst genommene Sportwett-Strategie braucht eine Aufzeichnung. Was wurde gesetzt? Auf was? Zu welcher Quote? Mit welchem Ergebnis? Ohne diese Daten kannst du nicht lernen, nicht optimieren, nicht wissen, ob deine Strategie funktioniert.
          </p>
          <p>
            Ein einfaches Excel-Sheet reicht. Track: Datum, Veranstaltung, Markt, Quote, Einsatz, Ergebnis, Gewinn/Verlust, Bankrollstand. Nach 100 Wetten weißt du mehr über dein Wettverhalten als nach 1000 Wetten ohne Protokoll.
          </p>

          <h2>Sonderfall: Kombiwetten und Bankroll</h2>
          <p>
            Kombiwetten sind der schnellste Weg, eine Bankroll zu leeren. Wenn du drei Ereignisse kombinierst, multiplizieren sich nicht nur die Quoten – auch die Wahrscheinlichkeit eines Verlustes steigt exponentiell. Eine Kombi mit drei 60%-Favoriten hat nur eine Gewinnchance von 21,6%.
          </p>
          <p>
            Wenn überhaupt Kombis: Nie mehr als 1% der Bankroll. Und nur wenn du wirklich unabhängige Ereignisse kombinierst – keine korrelierten Märkte (z.B. Heimsieg und Under 2.5 im gleichen Spiel können korreliert sein).
          </p>

          <h2>Atlas Market und Bankroll Management</h2>
          <p>
            Bei <a href="https://atlasmarkets.de" style={{ color: '#16a34a', fontWeight: 600 }}>Atlas Market</a> kannst du dein Kapital transparent tracken, da alle Transaktionen klar sichtbar sind. Die fehlende Buchmacher-Marge hilft ebenfalls: Weniger versteckte Kosten bedeuten, dass deine Bankroll weniger Druck hat und du mehr Spielraum für die natürliche Varianz hast.
          </p>
          <p>
            Außerdem gibt es keine Limits. Ein klassischer Buchmacher kann dich limitieren, wenn du zu gut wirst – was deine Bankroll-Strategie faktisch unterläuft. Bei Atlas Market wettest du gegen andere Teilnehmer. Wer gut ist, darf so viel setzen, wie der Markt trägt.
          </p>

          <h2>Die drei unverbrüchlichen Regeln</h2>
          <p>
            Wenn du nur drei Dinge mitnehmen kannst: Erstens, niemals mehr als 5% deiner Bankroll auf eine einzige Wette. Zweitens, führe ein Protokoll – immer. Drittens, erhöhe niemals den Einsatz, um Verluste aufzuholen. Das ist keine Frage der Disziplin, sondern der Mathematik.
          </p>

        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Mit fairem Bankroll-Schutz bei Atlas Market →
          </a>
          <Link href="/strategien/live-wetten" className="btn-outline">
            Nächste Strategie: Live-Wetten
          </Link>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/strategien" style={{ fontSize: '0.875rem', color: '#16a34a', textDecoration: 'none', fontWeight: 600 }}>
            ← Alle Wettstrategien
          </Link>
        </div>
      </div>
    </article>
  )
}

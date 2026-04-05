import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SC Freiburg – FC Bayern München Tipp & Prognose | Spieltag 34',
  description: 'Tipp und Analyse für Freiburg vs Bayern München (Spieltag 34, 18. Mai 2026): Formcheck, Head-to-Head, Quotenvergleich und unsere Empfehlung.',
  keywords: ['Freiburg Bayern Tipp', 'Freiburg Bayern Prognose', 'Bundesliga Spieltag 34', 'Bayern Wette', 'Freiburg vs Bayern Quoten'],
  openGraph: {
    title: 'SC Freiburg – FC Bayern München Tipp & Prognose',
    description: 'Vollständige Analyse: Freiburg vs Bayern München, Spieltag 34.',
    url: 'https://wettmarkt-vergleich.de/tipps/freiburg-bayern-munchen',
    type: 'article',
  },
}

export default function FreiburgBayernPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'SC Freiburg – FC Bayern München: Tipp & Prognose Spieltag 34',
    description: 'Fundierte Analyse und Wett-Tipp für Freiburg gegen Bayern München am letzten Bundesliga-Spieltag.',
    author: { '@type': 'Organization', name: 'Wettmarkt Vergleich' },
    publisher: { '@type': 'Organization', name: 'Wettmarkt Vergleich', url: 'https://wettmarkt-vergleich.de' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article style={{ paddingTop: '100px', paddingBottom: '6rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <nav style={{ marginBottom: '2rem', fontSize: '0.8125rem', color: '#9CA3AF' }}>
            <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Startseite</Link>
            {' / '}
            <Link href="/tipps" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Tipps</Link>
            {' / '}
            <span style={{ color: '#4A4A4A' }}>Freiburg – Bayern</span>
          </nav>

          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
            Bundesliga · Spieltag 34 · Sa, 18. Mai 2026 · 15:30 Uhr
          </p>

          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1.25rem' }}
          >
            SC Freiburg – FC Bayern München: Tipp & Prognose
          </h1>

          {/* Tipp-Box */}
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '4px' }}>Unser Tipp</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#16a34a' }}>Bayern München</p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '4px' }}>Quote Atlas Market</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A' }}>1.55</p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '4px' }}>Konfidenz</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#16a34a' }}>Hoch</p>
              </div>
            </div>
          </div>

          <div className="article-prose">

            <h2>Die Ausgangslage: Titelfeiern im Breisgau</h2>
            <p>
              Wenn der FC Bayern München am letzten Spieltag beim SC Freiburg antritt, ist die Titelfrage längst geklärt. Die Münchner haben die Meisterschale bereits sicher – und reisen mit dem Rückenwind einer souveränen Saison in den Breisgau. Für die Gastgeber geht es noch um etwas: Freiburg benötigt einen Punkt, um den siebten Tabellenplatz und damit die Conference-League-Qualifikation zu sichern.
            </p>
            <p>
              Das macht die Partie interessant, aber nicht unvorhersehbar. Bayern hat in solchen Saisonabschlüssen zuletzt immer noch Vollgas gegeben – Spieler kämpfen um Plätze, Einsatzzeiten, persönliche Statistiken. Der Rhythmus eines Champions-Kalibers lässt sich nicht einfach abschalten.
            </p>

            <h2>Formcheck: SC Freiburg</h2>
            <p>
              Freiburg hat in den letzten fünf Spielen eine durchwachsene Bilanz vorzuweisen: zwei Siege, ein Remis, zwei Niederlagen. Das ist die typische Freiburg-Rückrunde – solide, aber nicht konstant genug für die oberen Ränge. Der Kern der Mannschaft um Vincenzo Grifo ist technisch stark, defensiv aber anfällig gegen schnelle Konter.
            </p>
            <p>
              Das Heimspiel im Europa-Park Stadion gibt Freiburg Energie – die Fans pushen, die Atmosphäre ist dicht. Doch auch das hat seine Grenzen, wenn der Gegner FC Bayern heißt. In den letzten zehn Heimspielen gegen die Münchner hat Freiburg nur einmal gewonnen.
            </p>

            <h2>Formcheck: FC Bayern München</h2>
            <p>
              Bayern hat die letzten fünf Ligaspiele alle gewonnen und dabei 17 Tore erzielt. Die Offensive unter Trainer Vincent Kompany läuft wie am Schnürchen – Kane trifft, Musiala kreiert, Sané und Gnabry kombinieren. Das Pressing ist intensiv, das Pressing-Gegenpressing strukturiert. Eine Maschine.
            </p>
            <p>
              Auch auswärts ist Bayern stark: Nur zwei Niederlagen in der gesamten Hinrunde auf fremdem Platz. Freiburg hat zuhause eine ordentliche Defensive – aber gegen Bayerns Angriffsmaschinerie reicht ordentlich nicht.
            </p>

            <h2>Head-to-Head</h2>
            <p>
              In den letzten zehn Direktbegegnungen hat Bayern acht Mal gewonnen, Freiburg einmal, einmal trennten sich die Teams remis. In Freiburg ist die Bilanz etwas ausgeglichener: Fünf Bayern-Siege, ein Remis, zwei Freiburg-Siege in den letzten acht Heimspielen. Doch in dieser Form und mit diesem Saisonkontext spricht wenig für eine Freiburg-Überraschung.
            </p>

            <h2>Schlüsselduelle & Taktik</h2>
            <p>
              Freiburgs Offensivreihe wird versuchen, Bayerns hohe Abwehrlinie mit langen Bällen zu überwinden – ein taktisches Mittel, das Freiburg im Stile von Christian Streichs Erbe beherrscht. Doch Bayerns Innenverteidigung reagiert schnell, und die defensive Mittelfeldlinie schirmt die Räume gut ab.
            </p>
            <p>
              Das Entscheidende: Harry Kane gegen Freiburgs Innenverteidigung ist schlicht ein Mismatch auf Bundesliga-Niveau. Wenn Musiala die Räume bespielt und Kane die Abschlüsse übernimmt, wird es für die Breisgauer sehr unangenehm.
            </p>

            <h2>Quotenvergleich</h2>
            <div style={{ backgroundColor: '#F3F3EE', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div><p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.08em' }}>Anbieter</p></div>
                <div><p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.08em' }}>Freiburg</p></div>
                <div><p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.08em' }}>Unentschieden</p></div>
                <div><p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.08em' }}>Bayern</p></div>
                {[
                  { name: '🏆 Atlas Market', h: '6.80', d: '4.50', a: '1.55' },
                  { name: 'bet365', h: '6.50', d: '4.20', a: '1.50' },
                  { name: 'bwin', h: '6.25', d: '4.10', a: '1.48' },
                  { name: 'Tipico', h: '6.00', d: '4.00', a: '1.45' },
                ].map(r => (
                  <>
                    <div key={r.name+'n'} style={{ textAlign: 'left' }}><p style={{ fontSize: '0.875rem', fontWeight: r.name.includes('Atlas') ? 700 : 400, color: r.name.includes('Atlas') ? '#16a34a' : '#4A4A4A' }}>{r.name}</p></div>
                    <div key={r.name+'h'}><p style={{ fontSize: '0.875rem', color: '#4A4A4A' }}>{r.h}</p></div>
                    <div key={r.name+'d'}><p style={{ fontSize: '0.875rem', color: '#4A4A4A' }}>{r.d}</p></div>
                    <div key={r.name+'a'}><p style={{ fontSize: '0.875rem', fontWeight: r.name.includes('Atlas') ? 700 : 400, color: r.name.includes('Atlas') ? '#16a34a' : '#4A4A4A' }}>{r.a}</p></div>
                  </>
                ))}
              </div>
            </div>

            <h2>Unser Tipp: Bayern München gewinnt</h2>
            <p>
              Die Ausgangslage ist klar: Bayern ist in Topform, motiviert und spielerisch überlegen. Freiburg hat Heimvorteil und Motivation, aber keinen strukturellen Vorteil gegen dieses Team. Der Auswärtssieg der Münchner ist keine aufregende Wette – aber eine fundierte.
            </p>
            <p>
              Empfehlung: Bayern München (Auswärtssieg) zu Quote 1.55 bei <a href="https://atlasmarkets.de" style={{ color: '#16a34a', fontWeight: 600 }}>Atlas Market</a>. Wer mehr Risiko will: Bayern Sieg & Over 2.5 Tore zu 1.90 – wir erwarten mindestens drei Tore in diesem Spiel.
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginTop: '2rem', borderTop: '1px solid #E5E5E0', paddingTop: '1rem' }}>
              ⚠️ Tipp-Analysen basieren auf öffentlich verfügbaren Daten und Statistiken. Kein Tipp ist eine Garantie. 18+, Spielsuchthotline: 0800 1372700.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/tipps" style={{ fontSize: '0.875rem', color: '#16a34a', textDecoration: 'none', fontWeight: 600 }}>
              ← Alle Tipps für Spieltag 34
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

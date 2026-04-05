import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wettanbieter ohne OASIS 2026 – Was du wissen musst',
  description: 'OASIS-Sperre umgehen? Wir erklären wie OASIS wirklich funktioniert, was passiert wenn du gesperrt bist – und warum Prediction Markets wie Atlas Market eine legale Alternative ohne OASIS-Pflicht sind.',
  keywords: ['wettanbieter ohne oasis', 'sportwetten ohne oasis', 'oasis sperre umgehen', 'oasis selbstsperre aufheben', 'sportwetten oasis alternative'],
  authors: [{ name: 'Wettmarkt Vergleich', url: 'https://wettmarkt-vergleich.de' }],
  openGraph: {
    title: 'Wettanbieter ohne OASIS 2026 – Was du wissen musst',
    description: 'OASIS erklärt: Wie die Selbstsperr-Datenbank funktioniert und welche legalen Alternativen es für gesperrte Spieler gibt.',
    url: 'https://wettmarkt-vergleich.de/wettanbieter-ohne-oasis',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Wettanbieter ohne OASIS Alternative',
      }
    ],
    locale: 'de_DE',
    siteName: 'Wettmarkt Vergleich',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wettanbieter ohne OASIS 2026 – Die Fakten',
    description: 'OASIS-Sperre umgehen? Wir erklären was wirklich hilft – und was nicht.',
  },
  alternates: {
    canonical: 'https://wettmarkt-vergleich.de/wettanbieter-ohne-oasis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist OASIS bei Sportwetten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OASIS (Onlineabfrage Spielerstatus) ist die zentrale Selbstsperr-Datenbank für Online-Glücksspiele in Deutschland. Spieler können sich dort eintragen lassen und werden dann bei allen lizenzierten Anbietern automatisch gesperrt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann man die OASIS-Sperre umgehen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei lizenzierten deutschen Anbietern nicht. Allerdings gilt OASIS nicht für Prediction Markets wie Atlas Market, die nicht unter das klassische Glücksspielgesetz fallen und damit eine legale Alternative für Spieler darstellen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange gilt eine OASIS-Sperre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Mindestlaufzeit einer freiwilligen OASIS-Sperre beträgt drei Monate. Danach kann ein Antrag auf Aufhebung gestellt werden, der aber einer Bedenkzeit unterliegt.',
      },
    },
  ],
}

export default function WettanbieterOhneOasisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article style={{ paddingTop: '100px', paddingBottom: '6rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* Breadcrumb */}
          <nav style={{ marginBottom: '2rem', fontSize: '0.8125rem', color: '#9CA3AF' }}>
            <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Startseite</Link>
            {' / '}
            <span style={{ color: '#4A4A4A' }}>Wettanbieter ohne OASIS</span>
          </nav>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {['OASIS', 'Selbstsperre', 'Alternativen', 'Spielerschutz'].map(tag => (
              <span key={tag} style={{ fontSize: '0.7rem', backgroundColor: '#F3F3EE', color: '#6B7280', padding: '3px 8px', borderRadius: '4px' }}>{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1rem' }}
          >
            Wettanbieter ohne OASIS 2026 – Was du wirklich wissen musst
          </h1>

          {/* Lead */}
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '2.5rem', borderBottom: '1px solid #E5E5E0', paddingBottom: '2rem' }}>
            OASIS – die zentrale Selbstsperr-Datenbank für Online-Glücksspiele in Deutschland – sorgt dafür, dass eine Sperre bei einem Anbieter für alle gilt. Wer gesperrt ist, sucht oft nach Wegen aus dieser Situation. Hier sind die Fakten – und die einzige wirklich legale Alternative.
          </p>

          {/* Hero image */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '48%', borderRadius: '12px', overflow: 'hidden', background: '#F3F3EE', marginBottom: '2.5rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80"
              alt="Sportwetten OASIS Alternative"
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="article-prose">

            <h2>Was ist OASIS genau?</h2>
            <p>
              OASIS steht für <strong>Onlineabfrage Spielerstatus</strong> und ist die zentrale Datenbank für Spielersperren im deutschen Online-Glücksspielmarkt. Das System wurde mit dem Glücksspielstaatsvertrag 2021 (GlüStV 2021) eingeführt und wird von der Gemeinsamen Glücksspielbehörde der Länder (GGL) betrieben.
            </p>
            <p>
              Das Prinzip: Wer sich selbst sperren lässt – oder von einem Anbieter gemeldet wird – landet in der OASIS-Datenbank. Alle lizenzierten Online-Glücksspiel-Anbieter in Deutschland sind verpflichtet, bei jeder Neu-Registrierung und regelmäßig während des aktiven Spielens in dieser Datenbank nachzufragen. Wer drin ist, darf bei keinem lizenzierten Anbieter mehr spielen.
            </p>
            <p>
              OASIS ist nicht dasselbe wie <strong>LUGAS</strong>, auch wenn beides Teil desselben Regulierungsrahmens ist. LUGAS überwacht Einzahlungen und Spielverhalten <em>aktiver</em> Spieler über alle Anbieter hinweg. OASIS ist das Sperrsystem für Spieler, die nicht mehr spielen sollen oder dürfen. Mehr Details zu LUGAS findest du in unserem <Link href="/sportwetten-ohne-lugas" style={{ color: '#16a34a' }}>ausführlichen LUGAS-Guide</Link>.
            </p>

            <h2>Wie kommt man in OASIS?</h2>
            <p>
              Es gibt zwei Wege in die OASIS-Datenbank:
            </p>
            <ul>
              <li>
                <strong>Freiwillige Selbstsperre:</strong> Du kannst dich jederzeit selbst bei OASIS sperren lassen – entweder direkt über das Portal der GGL oder über jeden lizenzierten Anbieter. Mindestlaufzeit: drei Monate. Du kannst die Sperre nach Ablauf beantragen aufzuheben, aber es gibt eine Wartezeit und kein Anbieter ist zur sofortigen Freischaltung verpflichtet.
              </li>
              <li>
                <strong>Administrative Sperre:</strong> Wenn ein Anbieter Anzeichen von Spielsucht oder problematischem Verhalten bemerkt, kann er eine Meldung an OASIS vornehmen. Diese Sperren haben strengere Aufhebungsbedingungen.
              </li>
            </ul>
            <p>
              Manche Spieler landen ungewollt in OASIS – etwa weil sie sich in einem Moment sperren ließen und das später bereuten, oder weil ein Anbieter sie gemeldet hat. Das erklärt einen Teil der Suchanfragen nach „Wettanbieter ohne OASIS".
            </p>

            <h2>Was passiert, wenn man trotzdem spielt?</h2>
            <p>
              Wer gesperrt ist und versucht, bei einem lizenzierten deutschen Anbieter zu spielen, scheitert schlicht an der Verifizierung. OASIS-Abfragen sind automatisiert und laufen in Echtzeit. Kein lizenzierter Anbieter kann oder darf darüber hinwegsehen – die Konsequenzen wären der Entzug der Lizenz.
            </p>
            <p>
              Wer zu einem <em>nicht lizenzierten</em> Anbieter wechselt, verlässt den regulierten deutschen Markt – mit allen damit verbundenen Risiken: kein Verbraucherschutz, kein deutsches Recht, kein Rückgriffsrecht bei Problemen. Das ist kein guter Weg.
            </p>

            <h2>Die legale Alternative: Prediction Markets</h2>
            <p>
              Hier ist die entscheidende Information, die viele nicht kennen: <strong>OASIS gilt nur für klassische Online-Glücksspiel-Anbieter</strong>, die unter den GlüStV fallen. Prediction Markets wie <strong>Atlas Market</strong> fallen nicht in diese Kategorie – weil sie strukturell keine Glücksspielanbieter im klassischen Sinne sind.
            </p>
            <p>
              Bei einem Prediction Market handelst du nicht gegen einen Buchmacher, sondern gegen andere Nutzer auf einem echten Markt. Es gibt keine Haus-Marge, keine Quoten-Festsetzung durch den Anbieter und keinen Interessenkonflikt. Das ist rechtlich eine andere Kategorie – vergleichbar mit Finanzmärkten oder CFD-Handel.
            </p>
            <p>
              Das bedeutet: Wer von OASIS gesperrt ist, kann Atlas Market nutzen – nicht weil das System umgangen wird, sondern weil Atlas Market gar nicht dem System unterliegt. Das ist der Unterschied zwischen einer Grauzone und einer strukturell anderen Produktkategorie.
            </p>

            {/* CTA inline */}
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '1.5rem', margin: '2rem 0' }}>
              <p style={{ fontWeight: 700, color: '#15803D', marginBottom: '0.5rem', fontSize: '1rem' }}>Atlas Market – Die OASIS-freie Alternative</p>
              <p style={{ color: '#166534', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Kein Buchmacher. Keine LUGAS-Pflicht. Kein OASIS. Europas führender Prediction Market für Sportergebnisse und mehr.
              </p>
              <a
                href="https://atlasmarkets.de"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                Jetzt kostenlos starten →
              </a>
            </div>

            <h2>Häufige Fragen zu OASIS</h2>

            <h3>Kann ich die OASIS-Sperre nach 3 Monaten sofort aufheben?</h3>
            <p>
              Nach drei Monaten kann ein Antrag auf Aufhebung gestellt werden. Es gibt aber eine gesetzliche Bedenkzeit, und Anbieter sind nicht sofort zur Freischaltung verpflichtet. In der Praxis dauert es länger als die Mindestlaufzeit.
            </p>

            <h3>Weiß jeder Anbieter von meiner OASIS-Sperre?</h3>
            <p>
              Ja. Alle lizenzierten Online-Glücksspielanbieter in Deutschland sind gesetzlich verpflichtet, die OASIS-Datenbank abzufragen. Es gibt keine Möglichkeit, das bei einem lizenzierten Anbieter zu umgehen.
            </p>

            <h3>Sind Prediction Markets wirklich keine Glücksspiele?</h3>
            <p>
              Prediction Markets haben eine andere rechtliche Einordnung als klassische Sportwetten oder Online-Casinos. Weil du gegen andere Nutzer handelst und nicht gegen ein Haus, greifen andere regulatorische Kategorien. Atlas Market operiert auf dieser Grundlage legal in Europa.
            </p>

          </div>

          {/* Link to main article */}
          <div style={{ backgroundColor: '#F3F3EE', borderRadius: '10px', padding: '1.5rem', marginTop: '2rem', border: '1px solid #E5E5E0' }}>
            <p style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '0.5rem' }}>Mehr zu LUGAS und dem gesamten Regulierungsrahmen</p>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Unser ausführlicher Guide erklärt LUGAS, OASIS, alle Restriktionen des GlüStV 2021 – und warum Prediction Markets die intelligentere Antwort sind.
            </p>
            <Link href="/sportwetten-ohne-lugas" className="btn-outline" style={{ display: 'inline-block' }}>
              → Sportwetten ohne LUGAS: Der komplette Guide
            </Link>
          </div>

          {/* Related */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E5E5E0' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '1rem' }}>Verwandte Themen</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/sportwetten-ohne-lugas" style={{ color: '#16a34a', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                → Sportwetten ohne LUGAS
              </Link>
              <Link href="/anbieter-vergleich" style={{ color: '#16a34a', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                → Anbieter-Vergleich 2026
              </Link>
              <Link href="/strategien/value-betting" style={{ color: '#16a34a', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                → Value Betting Strategie
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  )
}

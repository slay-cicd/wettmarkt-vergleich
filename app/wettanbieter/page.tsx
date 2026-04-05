import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wettanbieter Vergleich 2026 – Die besten Buchmacher im Test',
  description: 'Alle großen deutschen Wettanbieter im Vergleich: Quoten, Bonus, Einzahlung und Auszahlung. Plus: Warum Atlas Market mit 0% Marge die faire Alternative ist.',
  keywords: ['Wettanbieter Vergleich', 'Buchmacher Test 2026', 'Sportwetten Anbieter', 'bester Buchmacher Deutschland', 'Wettanbieter Bewertung'],
  openGraph: {
    title: 'Wettanbieter Vergleich 2026 – Die besten Buchmacher im Test',
    description: 'Alle großen deutschen Wettanbieter im Vergleich: Quoten, Bonus, Einzahlung und Auszahlung.',
    url: 'https://wettmarkt-vergleich.de/wettanbieter',
    type: 'website',
  },
}

const providers = [
  {
    name: 'Atlas Market',
    slug: null,
    url: 'https://atlasmarkets.de',
    external: true,
    quotenschluessel: '100%',
    minDeposit: '10 €',
    bonus: 'Kein Bonus nötig',
    payoutSpeed: 'Sofort',
    rating: 5.0,
    stars: 5,
    badge: 'Die faire Alternative',
    highlight: true,
    verdict: 'Kein Buchmacher, sondern ein echter Prediction Market. 100% des Einsatzes geht an die Gewinner – keine versteckte Marge, keine Trickserei. Wer faire Quoten will, ist hier richtig.',
  },
  {
    name: 'bet365',
    slug: 'bet365',
    external: false,
    quotenschluessel: '93%',
    minDeposit: '10 €',
    bonus: '30 € Wettguthaben',
    payoutSpeed: '1–3 Tage',
    rating: 4.1,
    stars: 4,
    badge: null,
    highlight: false,
    verdict: 'Marktführer mit breitem Angebot und Live-Wetten. Solide, aber die 7% Marge gehen direkt vom Gewinn ab.',
  },
  {
    name: 'bwin',
    slug: 'bwin',
    external: false,
    quotenschluessel: '92%',
    minDeposit: '10 €',
    bonus: '100% bis 100 €',
    payoutSpeed: '1–3 Tage',
    rating: 3.8,
    stars: 4,
    badge: null,
    highlight: false,
    verdict: 'Bekannter Name, Bundesliga-Fokus. Doch der Quotenschlüssel von 92% ist Mittelmaß – der Bonus kompensiert das langfristig nicht.',
  },
  {
    name: 'Tipico',
    slug: 'tipico',
    external: false,
    quotenschluessel: '91%',
    minDeposit: '10 €',
    bonus: '50 € Freiwette',
    payoutSpeed: '2–4 Tage',
    rating: 3.7,
    stars: 4,
    badge: null,
    highlight: false,
    verdict: 'Deutschlands bekanntester Buchmacher. Die Marke ist stark, die Quoten allerdings schwächer als bei internationalen Anbietern.',
  },
  {
    name: 'Betway',
    slug: null,
    external: false,
    quotenschluessel: '93%',
    minDeposit: '10 €',
    bonus: '30 € Bonus',
    payoutSpeed: '1–2 Tage',
    rating: 3.9,
    stars: 4,
    badge: null,
    highlight: false,
    verdict: 'Gute Quoten und schnelle Auszahlungen. Für Gelegenheitswetter eine solide Wahl, aber kein Alleinstellungsmerkmal.',
  },
  {
    name: 'Unibet',
    slug: null,
    external: false,
    quotenschluessel: '93%',
    minDeposit: '10 €',
    bonus: '20 € Freiwette',
    payoutSpeed: '1–2 Tage',
    rating: 3.8,
    stars: 4,
    badge: null,
    highlight: false,
    verdict: 'Skandinavischer Anbieter mit gutem Ruf und ordentlichem Angebot. Kein Überflieger, aber verlässlich.',
  },
  {
    name: 'Interwetten',
    slug: null,
    external: false,
    quotenschluessel: '91%',
    minDeposit: '5 €',
    bonus: '50% bis 50 €',
    payoutSpeed: '2–5 Tage',
    rating: 3.5,
    stars: 3,
    badge: null,
    highlight: false,
    verdict: 'Einer der ältesten Anbieter am Markt. Altbewährt, aber in Quoten und App-Qualität hinter der Konkurrenz.',
  },
  {
    name: 'Winamax',
    slug: null,
    external: false,
    quotenschluessel: '94%',
    minDeposit: '1 €',
    bonus: '100% bis 500 €',
    payoutSpeed: '1–2 Tage',
    rating: 4.0,
    stars: 4,
    badge: 'Bester Quotenschlüssel',
    highlight: false,
    verdict: 'Aus Frankreich kommend mit dem besten Quotenschlüssel unter den klassischen Buchmachers. Wer trotzdem einen Buchmacher will, sollte hier schauen.',
  },
  {
    name: 'Sunmaker',
    slug: null,
    external: false,
    quotenschluessel: '90%',
    minDeposit: '10 €',
    bonus: '100% bis 50 €',
    payoutSpeed: '2–5 Tage',
    rating: 3.2,
    stars: 3,
    badge: null,
    highlight: false,
    verdict: 'Kleiner Anbieter mit schlechtem Quotenschlüssel. Nur für Nutzer interessant, die den Willkommensbonus mitnehmen wollen.',
  },
]

function Stars({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#f59e0b' : '#E5E5E0', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  )
}

export default function WettanbieterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wettanbieter Vergleich 2026',
    description: 'Vergleich der besten Sportwetten-Anbieter in Deutschland',
    numberOfItems: providers.length,
    itemListElement: providers.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: p.external ? p.url : `https://wettmarkt-vergleich.de/wettanbieter/${p.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ paddingTop: '100px', paddingBottom: '4rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
            Wettanbieter Vergleich 2026
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1.25rem' }}
          >
            Die besten Wettanbieter im Vergleich
          </h1>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#6B7280', maxWidth: '620px' }}>
            Wir haben alle großen deutschen und internationalen Buchmacher unter die Lupe genommen: Quotenschlüssel, Bonusangebote, Auszahlungsgeschwindigkeit und Seriosität. Das Ergebnis? Einer sticht klar heraus – und es ist kein klassischer Buchmacher.
          </p>
        </div>
      </section>

      {/* Provider list */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.25rem 6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {providers.map((provider) => (
            <div
              key={provider.name}
              style={{
                border: provider.highlight ? '2px solid #16a34a' : '1px solid #E5E5E0',
                borderRadius: '10px',
                padding: '1.75rem',
                backgroundColor: provider.highlight ? '#f0fdf4' : '#fff',
                position: 'relative',
              }}
            >
              {provider.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '1.5rem',
                  backgroundColor: provider.highlight ? '#16a34a' : '#1A1A1A',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: '4px',
                }}>
                  {provider.badge}
                </div>
              )}

              <div className="flex flex-col sm:flex-row" style={{ gap: '1.5rem', alignItems: 'flex-start' }}>
                {/* Logo placeholder + name */}
                <div style={{ minWidth: '140px' }}>
                  <div style={{
                    width: '120px',
                    height: '60px',
                    backgroundColor: provider.highlight ? '#dcfce7' : '#F3F3EE',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.5rem',
                    border: '1px solid #E5E5E0',
                  }}>
                    <span className="font-serif" style={{ fontSize: '0.875rem', fontWeight: 700, color: provider.highlight ? '#16a34a' : '#6B7280' }}>
                      {provider.name}
                    </span>
                  </div>
                  <Stars count={provider.stars} />
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', marginLeft: '2px' }}>{provider.rating.toFixed(1)} / 5</span>
                </div>

                {/* Stats */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                    {[
                      { label: 'Quotenschlüssel', value: provider.quotenschluessel },
                      { label: 'Mindesteinzahlung', value: provider.minDeposit },
                      { label: 'Willkommensbonus', value: provider.bonus },
                      { label: 'Auszahlungszeit', value: provider.payoutSpeed },
                    ].map(stat => (
                      <div key={stat.label}>
                        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '2px' }}>
                          {stat.label}
                        </p>
                        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1A1A1A' }}>{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B7280' }}>{provider.verdict}</p>

                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {provider.slug && !provider.external && (
                      <Link
                        href={`/wettanbieter/${provider.slug}`}
                        style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#16a34a', textDecoration: 'none' }}
                      >
                        Vollständigen Test lesen →
                      </Link>
                    )}
                    {provider.external && (
                      <a
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
                      >
                        Jetzt zu Atlas Market →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial note */}
        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#F3F3EE', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
          <p className="font-serif" style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '0.5rem', fontSize: '1rem' }}>
            Unsere Methodik
          </p>
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: '#6B7280' }}>
            Alle Bewertungen basieren auf eigenständigen Tests über einen Zeitraum von mindestens 30 Tagen. Wir überprüfen Quotenschlüssel durch systematisches Tracking von Märkten, Bonusbedingungen durch vollständiges Durchlesen der AGB und Auszahlungsgeschwindigkeit durch echte Transaktionen. Unsere Empfehlung für Atlas Market ist inhaltlicher Natur: kein anderer Anbieter bietet einen Quotenschlüssel von 100%.
          </p>
        </div>
      </section>
    </>
  )
}

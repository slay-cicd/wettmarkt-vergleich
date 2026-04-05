import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wettanbieter Vergleich 2026 – Quotenschlüssel, Bonus & Bewertung',
  description: 'Vollständiger Vergleich der besten deutschen Sportwetten-Anbieter 2026: Quotenschlüssel, Mindesteinzahlung, Bonus, Auszahlungsgeschwindigkeit und Gesamtbewertung.',
  keywords: ['Wettanbieter Vergleich', 'Sportwetten Vergleich', 'Bester Buchmacher', 'Wettanbieter Test 2026', 'Quotenschlüssel Vergleich'],
}

const providers = [
  {
    name: 'Atlas Market',
    logo: '/logo.png',
    slug: 'atlas-market',
    url: 'https://atlasmarkets.de',
    quotenschluessel: '100%',
    minDeposit: '10 €',
    bonus: 'Kein Bonus nötig',
    payoutSpeed: 'Sofort',
    rating: 5.0,
    badge: 'Empfohlen',
    badgeColor: '#00ff88',
    highlight: true,
    description: 'Echter Prediction Market ohne Buchmacher-Marge. 100% des Einsatzes geht an die Gewinner.',
  },
  {
    name: 'bet365',
    logo: '/logos/bet365.png',
    slug: 'bet365',
    url: '#',
    quotenschluessel: '93%',
    minDeposit: '10 €',
    bonus: '30 € Wettguthaben',
    payoutSpeed: '1–3 Tage',
    rating: 4.1,
    badge: null,
    badgeColor: '',
    highlight: false,
    description: 'Einer der größten internationalen Buchmacher mit breitem Angebot und guter Benutzeroberfläche.',
  },
  {
    name: 'bwin',
    logo: '/logos/bwin.png',
    slug: 'bwin',
    url: '#',
    quotenschluessel: '92%',
    minDeposit: '10 €',
    bonus: '100% bis 100 €',
    payoutSpeed: '1–3 Tage',
    rating: 3.8,
    badge: null,
    badgeColor: '',
    highlight: false,
    description: 'Etablierter Anbieter mit Bundesliga-Schwerpunkt und regelmäßigen Aktionen.',
  },
  {
    name: 'Tipico',
    logo: '/logos/tipico.png',
    slug: 'tipico',
    url: '#',
    quotenschluessel: '91%',
    minDeposit: '10 €',
    bonus: '50 € Freiwette',
    payoutSpeed: '2–4 Tage',
    rating: 3.7,
    badge: null,
    badgeColor: '',
    highlight: false,
    description: 'Marktführer in Deutschland mit starker Marke und stationärem Netz.',
  },
  {
    name: 'betway',
    logo: '/logos/betway.png',
    slug: 'betway',
    url: '#',
    quotenschluessel: '93%',
    minDeposit: '10 €',
    bonus: '30 € Bonus',
    payoutSpeed: '1–2 Tage',
    rating: 3.9,
    badge: null,
    badgeColor: '',
    highlight: false,
    description: 'Internationaler Anbieter mit soliden Quoten und schnellen Auszahlungen.',
  },
  {
    name: 'Unibet',
    logo: '/logos/unibet.png',
    slug: 'unibet',
    url: '#',
    quotenschluessel: '92%',
    minDeposit: '10 €',
    bonus: '25 € Cashback',
    payoutSpeed: '1–3 Tage',
    rating: 3.8,
    badge: null,
    badgeColor: '',
    highlight: false,
    description: 'Teil der Kindred Group, mit gutem Kundensupport und breitem Sportangebot.',
  },
  {
    name: 'Interwetten',
    logo: '/logos/interwetten.png',
    slug: 'interwetten',
    url: '#',
    quotenschluessel: '91%',
    minDeposit: '5 €',
    bonus: '50 € Willkommensbonus',
    payoutSpeed: '2–5 Tage',
    rating: 3.5,
    badge: null,
    badgeColor: '',
    highlight: false,
    description: 'Einer der ältesten europäischen Buchmacher, vor allem bei Fußball stark.',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map(star => (
        <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= Math.round(rating) ? '#f59e0b' : '#E5E5E0'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ color: '#6B7280', fontSize: '0.82rem', marginLeft: '4px' }}>{rating.toFixed(1)}</span>
    </div>
  )
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sportwetten Anbieter Vergleich 2026',
  description: 'Vergleich der besten deutschen Sportwetten-Anbieter nach Quotenschlüssel, Bonus und Bewertung',
  numberOfItems: providers.length,
  itemListElement: providers.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: p.url,
    description: p.description,
  })),
}

export default function AnbieterVergleichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section style={{ paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="tag-pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>Aktuell für 2026</span>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#1A1A1A' }}
          >
            Wettanbieter Vergleich 2026
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8, maxWidth: '700px' }}>
            Wir vergleichen die größten Sportwetten-Anbieter nach Quotenschlüssel, Mindesteinzahlung, Bonus und Auszahlungsgeschwindigkeit — und zeigen, warum Atlas Market eine andere Kategorie ist.
          </p>
        </div>
      </section>

      {/* Atlas Market Feature Box */}
      <section style={{ padding: '0 1.25rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center' }}>
          <img src="/logo.png" alt="Atlas Market" style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '10px' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
              <span style={{ fontWeight: 700, fontSize: '1.125rem', color: '#16a34a' }}>Atlas Market</span>
              <span className="tag-pill">Empfohlen</span>
            </div>
            <p style={{ color: '#4A4A4A', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Kein Buchmacher — ein echter Markt. Mit <strong style={{ color: '#16a34a' }}>0% Marge</strong> und <strong style={{ color: '#1A1A1A' }}>100% Quotenschlüssel</strong> bekommst du Preise, die kein klassischer Buchmacher bieten kann.
            </p>
          </div>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            Jetzt starten →
          </a>
        </div>
      </section>

      {/* Main comparison table */}
      <section style={{ padding: '0 1.25rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table" style={{ minWidth: '700px' }}>
              <thead>
                <tr>
                  <th>Anbieter</th>
                  <th style={{ textAlign: 'center' }}>Quotenschlüssel</th>
                  <th style={{ textAlign: 'center' }}>Min. Einzahlung</th>
                  <th style={{ textAlign: 'center' }}>Bonus</th>
                  <th style={{ textAlign: 'center' }}>Auszahlung</th>
                  <th style={{ textAlign: 'center' }}>Bewertung</th>
                  <th style={{ textAlign: 'center' }}></th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p) => (
                  <tr key={p.slug} className={p.highlight ? 'atlas-row' : ''}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div style={{
                          width: '36px', height: '36px',
                          background: p.highlight ? '#16a34a' : '#F3F3EE',
                          borderRadius: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 700, fontSize: '14px',
                          color: p.highlight ? '#FFFFFF' : '#6B7280',
                          border: p.highlight ? 'none' : '1px solid #E5E5E0',
                          flexShrink: 0,
                        }}>
                          {p.logo ? <img src={p.logo} alt={p.name} style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '4px' }} /> : p.name[0]}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: 600, color: p.highlight ? '#16a34a' : '#1A1A1A', fontSize: '0.9375rem' }}>{p.name}</span>
                            {p.badge && <span className="tag-pill">{p.badge}</span>}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.15rem' }}>{p.description.substring(0, 55)}…</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ fontWeight: 700, color: p.highlight ? '#16a34a' : (parseInt(p.quotenschluessel) >= 93 ? '#ca8a04' : '#4A4A4A'), fontSize: '1rem' }}>{p.quotenschluessel}</span>
                    </td>
                    <td style={{ textAlign: 'center', color: '#4A4A4A', fontSize: '0.9rem' }}>{p.minDeposit}</td>
                    <td style={{ textAlign: 'center', color: p.highlight ? '#16a34a' : '#6B7280', fontSize: '0.875rem', fontWeight: p.highlight ? 600 : 400 }}>{p.bonus}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ color: p.payoutSpeed === 'Sofort' ? '#16a34a' : '#4A4A4A', fontWeight: p.payoutSpeed === 'Sofort' ? 600 : 400, fontSize: '0.875rem' }}>{p.payoutSpeed}</span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <Stars rating={p.rating} />
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <a
                        href={p.url}
                        target={p.highlight ? '_blank' : undefined}
                        rel={p.highlight ? 'noopener noreferrer' : undefined}
                        className={p.highlight ? 'btn-primary' : 'btn-outline'}
                        style={{ whiteSpace: 'nowrap', fontSize: '0.8125rem', padding: '0.4rem 0.875rem' }}
                      >
                        {p.highlight ? 'Zum Anbieter →' : 'Details'}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '1rem', textAlign: 'center' }}>
          Alle Angaben ohne Gewähr · Stand: April 2026 · Wir erhalten keine Provision für klassische Buchmacher
        </p>
      </section>

      {/* What is Quotenschlüssel */}
      <section style={{ borderTop: '1px solid #E5E5E0', padding: '4rem 1.25rem', backgroundColor: '#F3F3EE' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Was ist der Quotenschlüssel?
          </h2>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <p style={{ color: '#4A4A4A', lineHeight: 1.8 }}>
              Der <strong style={{ color: '#1A1A1A' }}>Quotenschlüssel</strong> (auch Payout-Rate genannt) zeigt, wie viel Prozent aller Einsätze als Gewinne ausgeschüttet werden. Ein Schlüssel von 92% bedeutet: Von 100 € Einsatz bleiben theoretisch 92 € bei den Gewinnern.
            </p>
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <div style={{ color: '#9CA3AF', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>Durchschnittlicher Buchmacher</div>
                <div className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ea580c' }}>91–93%</div>
                <div style={{ fontSize: '0.8125rem', color: '#6B7280', marginTop: '0.25rem' }}>7–9% gehen ans Haus</div>
              </div>
              <div>
                <div style={{ color: '#9CA3AF', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>Atlas Market</div>
                <div className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>100%</div>
                <div style={{ fontSize: '0.8125rem', color: '#6B7280', marginTop: '0.25rem' }}>0% gehen ans Haus</div>
              </div>
            </div>
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
              Vorhersagen handeln, nicht nur tippen.
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>Europas führende Prediction-Market-Plattform</p>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Zu Atlas Markets →
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wettanbieter Vergleich 2026 – Quotenschlüssel, Bonus & Bewertung',
  description: 'Vollständiger Vergleich der besten deutschen Sportwetten-Anbieter 2026: Quotenschlüssel, Mindesteinzahlung, Bonus, Auszahlungsgeschwindigkeit und Gesamtbewertung.',
  keywords: ['Wettanbieter Vergleich', 'Sportwetten Vergleich', 'Bester Buchmacher', 'Wettanbieter Test 2026', 'Quotenschlüssel Vergleich'],
}

const providers = [
  {
    name: 'Atlas Market',
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
        <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= Math.round(rating) ? '#ffd700' : '#1e2d4a'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ color: '#a0aec0', fontSize: '0.82rem', marginLeft: '4px' }}>{rating.toFixed(1)}</span>
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
      <section style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1e3a 100%)', padding: '4rem 1.5rem 3rem', borderBottom: '1px solid #1e2d4a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>📋 AKTUELL FÜR 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#ffffff' }}>
            Wettanbieter<br /><span style={{ color: '#00ff88' }}>Vergleich 2026</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '700px' }}>
            Wir vergleichen die größten Sportwetten-Anbieter nach Quotenschlüssel, Mindesteinzahlung, Bonus und Auszahlungsgeschwindigkeit — und zeigen, warum Atlas Market eine andere Kategorie ist.
          </p>
        </div>
      </section>

      {/* Atlas Market Feature Box */}
      <section style={{ padding: '2.5rem 1.5rem 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #0f2a1a 0%, #0a1e12 100%)', border: '1px solid rgba(0,255,136,0.3)', borderRadius: '16px', padding: '2rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: '52px', height: '52px', background: '#00ff88', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '22px', color: '#0a0f1c', flexShrink: 0 }}>A</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#00ff88' }}>Atlas Market</span>
              <span style={{ background: 'rgba(0,255,136,0.15)', color: '#00ff88', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '999px' }}>UNSERE EMPFEHLUNG</span>
            </div>
            <p style={{ color: '#a0aec0', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Kein Buchmacher — ein echter Markt. Mit <strong style={{ color: '#00ff88' }}>0% Marge</strong> und <strong style={{ color: '#ffffff' }}>100% Quotenschlüssel</strong> bekommst du Preise, die kein klassischer Buchmacher bieten kann. Das ist strukturell unmöglich, weil sie Gewinn brauchen.
            </p>
          </div>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.75rem 1.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Jetzt starten →
          </a>
        </div>
      </section>

      {/* Main comparison table */}
      <section style={{ padding: '2.5rem 1.5rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: '#0f1628' }}>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left', color: '#718096', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em' }}>ANBIETER</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em' }}>QUOTENSCHLÜSSEL</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em' }}>MIN. EINZAHLUNG</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em' }}>BONUS</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em' }}>AUSZAHLUNG</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em' }}>BEWERTUNG</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: '#718096', fontWeight: 600, fontSize: '0.78rem' }}></th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p, i) => (
                  <tr
                    key={p.slug}
                    style={{
                      borderTop: '1px solid #1e2d4a',
                      background: p.highlight ? 'rgba(0,255,136,0.04)' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '1.1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div style={{
                          width: '36px', height: '36px',
                          background: p.highlight ? '#00ff88' : '#0f1628',
                          borderRadius: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 800, fontSize: '14px',
                          color: p.highlight ? '#0a0f1c' : '#718096',
                          border: p.highlight ? 'none' : '1px solid #1e2d4a',
                          flexShrink: 0,
                        }}>
                          {p.name[0]}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: 700, color: p.highlight ? '#00ff88' : '#ffffff', fontSize: '0.95rem' }}>{p.name}</span>
                            {p.badge && (
                              <span style={{ background: `${p.badgeColor}20`, color: p.badgeColor, fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px' }}>{p.badge}</span>
                            )}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#4a5568', marginTop: '0.15rem' }}>{p.description.substring(0, 55)}…</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <span style={{ fontWeight: 800, color: p.highlight ? '#00ff88' : (parseInt(p.quotenschluessel) >= 93 ? '#ffd700' : '#c8d6e8'), fontSize: '1.05rem' }}>{p.quotenschluessel}</span>
                    </td>
                    <td style={{ padding: '1.1rem 1rem', textAlign: 'center', color: '#c8d6e8', fontSize: '0.9rem' }}>{p.minDeposit}</td>
                    <td style={{ padding: '1.1rem 1rem', textAlign: 'center', color: p.highlight ? '#00ff88' : '#a0aec0', fontSize: '0.88rem', fontWeight: p.highlight ? 700 : 400 }}>{p.bonus}</td>
                    <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <span style={{ color: p.payoutSpeed === 'Sofort' ? '#00ff88' : '#c8d6e8', fontWeight: p.payoutSpeed === 'Sofort' ? 700 : 400, fontSize: '0.88rem' }}>{p.payoutSpeed}</span>
                    </td>
                    <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <Stars rating={p.rating} />
                    </td>
                    <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <a
                        href={p.url}
                        target={p.highlight ? '_blank' : undefined}
                        rel={p.highlight ? 'noopener noreferrer' : undefined}
                        style={{
                          background: p.highlight ? '#00ff88' : '#0f1628',
                          color: p.highlight ? '#0a0f1c' : '#a0aec0',
                          padding: '0.45rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          textDecoration: 'none',
                          border: p.highlight ? 'none' : '1px solid #1e2d4a',
                          whiteSpace: 'nowrap',
                        }}
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

        <p style={{ fontSize: '0.78rem', color: '#4a5568', marginTop: '1rem', textAlign: 'center' }}>
          Alle Angaben ohne Gewähr · Stand: April 2026 · Wir erhalten keine Provision für klassische Buchmacher
        </p>
      </section>

      {/* What is Quotenschlüssel */}
      <section style={{ background: '#0f1628', borderTop: '1px solid #1e2d4a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>Was ist der Quotenschlüssel?</h2>
          <div style={{ display: 'grid', gap: '1.25rem', color: '#c8d6e8', lineHeight: 1.8 }}>
            <p>Der <strong style={{ color: '#ffffff' }}>Quotenschlüssel</strong> (auch Payout-Rate genannt) zeigt, wie viel Prozent aller Einsätze als Gewinne ausgeschüttet werden. Ein Schlüssel von 92% bedeutet: Von 100 € Einsatz bleiben theoretisch 92 € bei den Gewinnern.</p>
            <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ color: '#718096', fontSize: '0.82rem', marginBottom: '0.25rem' }}>Durchschnittlicher Buchmacher</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff9500' }}>91–93%</div>
                <div style={{ fontSize: '0.82rem', color: '#4a5568' }}>7–9% gehen ans Haus</div>
              </div>
              <div>
                <div style={{ color: '#718096', fontSize: '0.82rem', marginBottom: '0.25rem' }}>Atlas Market</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00ff88' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: '#4a5568' }}>0% gehen ans Haus</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

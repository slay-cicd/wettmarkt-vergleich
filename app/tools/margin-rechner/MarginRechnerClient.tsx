'use client'
import { useState, useEffect } from 'react'

type Outcome = {
  name: string
  odds: string
}

const defaultOutcomes: Outcome[] = [
  { name: 'Heimsieg', odds: '' },
  { name: 'Unentschieden', odds: '' },
  { name: 'Auswärtssieg', odds: '' },
]

function calcMargin(outcomes: Outcome[]) {
  const valid = outcomes.filter(o => {
    const v = parseFloat(o.odds)
    return !isNaN(v) && v > 1
  })
  if (valid.length < 2) return null

  const impliedProbs = valid.map(o => 1 / parseFloat(o.odds))
  const totalImplied = impliedProbs.reduce((a, b) => a + b, 0)
  const margin = (totalImplied - 1) * 100
  const fairProbs = impliedProbs.map(p => p / totalImplied)
  const fairOdds = fairProbs.map(p => 1 / p)

  return { impliedProbs, totalImplied, margin, fairProbs, fairOdds, valid }
}

function getMarginColor(margin: number) {
  if (margin <= 1) return '#00ff88'
  if (margin <= 4) return '#ffd700'
  if (margin <= 7) return '#ff9500'
  return '#ff4444'
}

function getMarginLabel(margin: number) {
  if (margin <= 1) return 'Sehr fair'
  if (margin <= 4) return 'Fair'
  if (margin <= 7) return 'Durchschnittlich'
  return 'Hoch'
}

export default function MarginRechnerClient() {
  const [outcomes, setOutcomes] = useState<Outcome[]>(defaultOutcomes)
  const [result, setResult] = useState<ReturnType<typeof calcMargin>>(null)
  const [marketType, setMarketType] = useState<'3way' | '2way'>('3way')

  useEffect(() => {
    if (marketType === '2way') {
      setOutcomes([{ name: 'Heimsieg', odds: '' }, { name: 'Auswärtssieg', odds: '' }])
    } else {
      setOutcomes([
        { name: 'Heimsieg', odds: '' },
        { name: 'Unentschieden', odds: '' },
        { name: 'Auswärtssieg', odds: '' },
      ])
    }
  }, [marketType])

  useEffect(() => {
    setResult(calcMargin(outcomes))
    // Mixpanel tracking
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      const filled = outcomes.filter(o => o.odds).length
      if (filled >= 2) {
        ;(window as any).mixpanel.track('margin_calculator_used', { outcomes_filled: filled })
      }
    }
  }, [outcomes])

  function updateOdds(index: number, value: string) {
    const updated = [...outcomes]
    updated[index] = { ...updated[index], odds: value }
    setOutcomes(updated)
  }

  function updateName(index: number, value: string) {
    const updated = [...outcomes]
    updated[index] = { ...updated[index], name: value }
    setOutcomes(updated)
  }

  function addOutcome() {
    setOutcomes([...outcomes, { name: `Auswahl ${outcomes.length + 1}`, odds: '' }])
  }

  function removeOutcome(index: number) {
    if (outcomes.length <= 2) return
    setOutcomes(outcomes.filter((_, i) => i !== index))
  }

  const marginColor = result ? getMarginColor(result.margin) : '#a0aec0'

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* Market type selector */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[
          { key: '3way', label: '3-Weg (1X2)' },
          { key: '2way', label: '2-Weg (Sieg/Niederlage)' },
        ].map(opt => (
          <button
            key={opt.key}
            onClick={() => setMarketType(opt.key as '3way' | '2way')}
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid',
              borderColor: marketType === opt.key ? '#00ff88' : '#1e2d4a',
              background: marketType === opt.key ? 'rgba(0,255,136,0.1)' : '#141d35',
              color: marketType === opt.key ? '#00ff88' : '#a0aec0',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Input grid */}
      <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>Quoten eingeben</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {outcomes.map((outcome, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 140px auto', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                value={outcome.name}
                onChange={e => updateName(i, e.target.value)}
                style={{
                  background: '#0f1628', border: '1px solid #1e2d4a', borderRadius: '8px',
                  color: '#ffffff', padding: '0.65rem 1rem', fontSize: '0.95rem', outline: 'none',
                }}
                placeholder="Ausgangslage"
              />
              <input
                type="number"
                value={outcome.odds}
                onChange={e => updateOdds(i, e.target.value)}
                style={{
                  background: '#0f1628', border: '1px solid',
                  borderColor: outcome.odds && parseFloat(outcome.odds) > 1 ? 'rgba(0,255,136,0.4)' : '#1e2d4a',
                  borderRadius: '8px', color: '#ffffff', padding: '0.65rem 1rem',
                  fontSize: '1rem', fontWeight: 700, outline: 'none', textAlign: 'right',
                }}
                placeholder="z.B. 2.10"
                step="0.01"
                min="1.01"
              />
              {outcomes.length > 2 ? (
                <button onClick={() => removeOutcome(i)} style={{ background: 'none', border: 'none', color: '#4a5568', cursor: 'pointer', padding: '0.5rem', fontSize: '1.2rem' }}>×</button>
              ) : (
                <div style={{ width: '32px' }} />
              )}
            </div>
          ))}
        </div>
        <button
          onClick={addOutcome}
          style={{ marginTop: '1rem', background: 'none', border: '1px dashed #1e2d4a', borderRadius: '8px', color: '#4a5568', padding: '0.5rem 1.25rem', cursor: 'pointer', fontSize: '0.88rem', width: '100%' }}
        >
          + Auswahl hinzufügen
        </button>
      </div>

      {/* Results */}
      {result ? (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {/* Main margin display */}
          <div style={{ background: '#141d35', border: `1px solid ${marginColor}33`, borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '0.06em' }}>BUCHMACHER-MARGE</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: marginColor, letterSpacing: '-0.03em', lineHeight: 1 }}>
              {result.margin.toFixed(2)}%
            </div>
            <div style={{ fontSize: '0.9rem', color: marginColor, marginTop: '0.5rem', fontWeight: 600 }}>
              {getMarginLabel(result.margin)}
            </div>

            {/* Atlas Market compare */}
            <div style={{ marginTop: '1.5rem', background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: '12px', padding: '1rem 1.5rem', display: 'inline-block' }}>
              <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
                Bei <strong style={{ color: '#00ff88' }}>Atlas Market</strong> beträgt die Marge{' '}
                <strong style={{ color: '#00ff88', fontSize: '1.1rem' }}>0%</strong> — du zahlst nicht für den Buchmacher-Profit.
              </span>
            </div>
          </div>

          {/* Outcome breakdown */}
          <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>Wahrscheinlichkeits-Analyse</h3>
            <div style={{ display: 'grid', gap: '0.875rem' }}>
              {result.valid.map((outcome, i) => {
                const impliedPct = (result.impliedProbs[i] * 100).toFixed(1)
                const fairPct = (result.fairProbs[i] * 100).toFixed(1)
                const fairOdd = result.fairOdds[i].toFixed(2)
                const barWidth = result.fairProbs[i] * 100

                return (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                      <span style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>{outcome.name}</span>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem' }}>
                        <span style={{ color: '#718096' }}>Impliziert: <strong style={{ color: '#a0aec0' }}>{impliedPct}%</strong></span>
                        <span style={{ color: '#718096' }}>Fair: <strong style={{ color: '#00ff88' }}>{fairPct}%</strong></span>
                        <span style={{ color: '#718096' }}>Faire Quote: <strong style={{ color: '#00ff88' }}>{fairOdd}</strong></span>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div style={{ background: '#0a0f1c', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                      <div style={{ width: `${barWidth}%`, height: '100%', background: 'linear-gradient(90deg, #00ff88, #00cc6a)', borderRadius: '4px', transition: 'width 0.4s ease' }} />
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #1e2d4a', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: '#718096', fontSize: '0.88rem' }}>Gesamtwahrscheinlichkeit (impliziert)</span>
              <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{(result.totalImplied * 100).toFixed(2)}%</span>
            </div>
          </div>

          {/* What it means */}
          <div style={{ background: 'rgba(255,68,68,0.05)', border: '1px solid rgba(255,68,68,0.15)', borderRadius: '12px', padding: '1.25rem 1.5rem', fontSize: '0.9rem', color: '#a0aec0', lineHeight: 1.7 }}>
            💡 <strong style={{ color: '#ffffff' }}>Was bedeutet das?</strong> Bei einer Marge von {result.margin.toFixed(2)}% verlierst du im Durchschnitt{' '}
            <strong style={{ color: '#ff9500' }}>{result.margin.toFixed(2)} Cent pro 1€</strong> Einsatz — unabhängig vom Ergebnis. Bei 0% Marge bekommst du faire Preise direkt vom Markt.
          </div>
        </div>
      ) : (
        <div style={{ background: '#141d35', border: '1px dashed #1e2d4a', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: '#4a5568' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📊</div>
          <p>Gib mindestens 2 Quoten ein, um die Analyse zu starten.</p>
        </div>
      )}
    </div>
  )
}

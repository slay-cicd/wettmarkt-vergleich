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

function getMarginLabel(margin: number): { label: string; color: string; bg: string; border: string } {
  if (margin <= 1) return { label: 'Sehr fair', color: '#16a34a', bg: '#F0FDF4', border: '#BBF7D0' }
  if (margin <= 4) return { label: 'Fair', color: '#ca8a04', bg: '#FEFCE8', border: '#FEF08A' }
  if (margin <= 7) return { label: 'Durchschnittlich', color: '#ea580c', bg: '#FFF7ED', border: '#FED7AA' }
  return { label: 'Hoch', color: '#dc2626', bg: '#FEF2F2', border: '#FECACA' }
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

  const marginInfo = result ? getMarginLabel(result.margin) : null

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
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 500,
              fontSize: '0.875rem',
              border: '1px solid',
              borderColor: marketType === opt.key ? '#16a34a' : '#E5E5E0',
              background: marketType === opt.key ? '#F0FDF4' : '#FFFFFF',
              color: marketType === opt.key ? '#16a34a' : '#6B7280',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Input grid */}
      <div className="tool-result-box" style={{ marginBottom: '1.5rem' }}>
        <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>
          Quoten eingeben
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {outcomes.map((outcome, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 140px auto', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                value={outcome.name}
                onChange={e => updateName(i, e.target.value)}
                className="tool-input"
                placeholder="Ausgangslage"
              />
              <input
                type="number"
                value={outcome.odds}
                onChange={e => updateOdds(i, e.target.value)}
                className="tool-input"
                style={{
                  textAlign: 'right',
                  fontWeight: 600,
                  borderColor: outcome.odds && parseFloat(outcome.odds) > 1 ? '#16a34a' : undefined,
                }}
                placeholder="z.B. 2.10"
                step="0.01"
                min="1.01"
              />
              {outcomes.length > 2 ? (
                <button
                  onClick={() => removeOutcome(i)}
                  style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: '0.5rem', fontSize: '1.25rem', lineHeight: 1 }}
                >
                  ×
                </button>
              ) : (
                <div style={{ width: '32px' }} />
              )}
            </div>
          ))}
        </div>
        <button
          onClick={addOutcome}
          style={{
            marginTop: '0.875rem',
            background: 'none',
            border: '1px dashed #E5E5E0',
            borderRadius: '8px',
            color: '#9CA3AF',
            padding: '0.5rem 1.25rem',
            cursor: 'pointer',
            fontSize: '0.875rem',
            width: '100%',
            fontFamily: 'inherit',
            transition: 'border-color 0.15s',
          }}
        >
          + Auswahl hinzufügen
        </button>
      </div>

      {/* Results */}
      {result && marginInfo ? (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {/* Main margin display */}
          <div
            style={{
              background: marginInfo.bg,
              border: `1px solid ${marginInfo.border}`,
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
              Buchmacher-Marge
            </div>
            <div
              className="font-serif"
              style={{ fontSize: '3.5rem', fontWeight: 700, color: marginInfo.color, letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              {result.margin.toFixed(2)}%
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: marginInfo.color, marginTop: '0.5rem' }}>
              {marginInfo.label}
            </div>
          </div>

          {/* Atlas Market compare */}
          <div className="tool-result-highlight">
            <p style={{ color: '#1A1A1A', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              💡 Bei <strong style={{ color: '#16a34a' }}>Atlas Market</strong> beträgt die Marge{' '}
              <strong style={{ color: '#16a34a', fontSize: '1.1rem' }}>0%</strong> — du zahlst nicht für den Buchmacher-Profit.
              Bei einer Marge von {result.margin.toFixed(2)}% verlierst du im Durchschnitt{' '}
              <strong>{result.margin.toFixed(2)} Cent pro 1€</strong> Einsatz.
            </p>
          </div>

          {/* Outcome breakdown */}
          <div className="tool-result-box">
            <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>
              Wahrscheinlichkeits-Analyse
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {result.valid.map((outcome, i) => {
                const impliedPct = (result.impliedProbs[i] * 100).toFixed(1)
                const fairPct = (result.fairProbs[i] * 100).toFixed(1)
                const fairOdd = result.fairOdds[i].toFixed(2)
                const barWidth = result.fairProbs[i] * 100

                return (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                      <span style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '0.9375rem' }}>{outcome.name}</span>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
                        <span style={{ color: '#6B7280' }}>Impliziert: <strong style={{ color: '#4A4A4A' }}>{impliedPct}%</strong></span>
                        <span style={{ color: '#6B7280' }}>Fair: <strong style={{ color: '#16a34a' }}>{fairPct}%</strong></span>
                        <span style={{ color: '#6B7280' }}>Faire Quote: <strong style={{ color: '#16a34a' }}>{fairOdd}</strong></span>
                      </div>
                    </div>
                    <div style={{ background: '#E5E5E0', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                      <div style={{ width: `${barWidth}%`, height: '100%', background: '#16a34a', borderRadius: '4px', transition: 'width 0.4s ease' }} />
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #E5E5E0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Gesamtwahrscheinlichkeit (impliziert)</span>
              <span style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '0.9375rem' }}>{(result.totalImplied * 100).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: '#F3F3EE', border: '1px dashed #E5E5E0', borderRadius: '12px', padding: '3rem', textAlign: 'center', color: '#9CA3AF' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📊</div>
          <p>Gib mindestens 2 Quoten ein, um die Analyse zu starten.</p>
        </div>
      )}
    </div>
  )
}

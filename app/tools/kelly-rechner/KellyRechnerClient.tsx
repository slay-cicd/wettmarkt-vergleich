'use client'
import { useState, useEffect } from 'react'

function calcKelly(bankroll: number, odds: number, trueProbability: number) {
  if (bankroll <= 0 || odds <= 1 || trueProbability <= 0 || trueProbability >= 1) return null

  const b = odds - 1  // net odds
  const p = trueProbability
  const q = 1 - p

  const kelly = (b * p - q) / b
  const kellyPct = kelly * 100

  if (kelly <= 0) {
    return { kelly, kellyPct, expectedValue: b * p - q, noValue: true, fullStake: 0, halfStake: 0, quarterStake: 0, fullReturn: 0, halfReturn: 0, quarterReturn: 0 }
  }

  const fullStake = bankroll * kelly
  const halfStake = fullStake / 2
  const quarterStake = fullStake / 4
  const fullReturn = fullStake * (odds - 1)
  const halfReturn = halfStake * (odds - 1)
  const quarterReturn = quarterStake * (odds - 1)
  const expectedValue = b * p - q

  return { kelly, kellyPct, expectedValue, noValue: false, fullStake, halfStake, quarterStake, fullReturn, halfReturn, quarterReturn }
}

function fmtEur(n: number) {
  return n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
}

export default function KellyRechnerClient() {
  const [bankroll, setBankroll] = useState('')
  const [odds, setOdds] = useState('')
  const [prob, setProb] = useState('')
  const [result, setResult] = useState<ReturnType<typeof calcKelly>>(null)

  useEffect(() => {
    const b = parseFloat(bankroll)
    const o = parseFloat(odds)
    const p = parseFloat(prob) / 100

    if (!isNaN(b) && !isNaN(o) && !isNaN(p)) {
      const r = calcKelly(b, o, p)
      setResult(r)

      if (typeof window !== 'undefined' && (window as any).mixpanel && r) {
        ;(window as any).mixpanel.track('kelly_calculator_used', {
          kelly_pct: r.kellyPct?.toFixed(2),
          has_value: !r.noValue,
        })
      }
    } else {
      setResult(null)
    }
  }, [bankroll, odds, prob])

  const inputStyle = {
    background: '#0f1628', border: '1px solid #1e2d4a', borderRadius: '8px',
    color: '#ffffff', padding: '0.75rem 1rem', fontSize: '1rem', outline: 'none',
    width: '100%', fontWeight: 600,
  }

  const labelStyle = { display: 'block', color: '#a0aec0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.04em' }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* Inputs */}
      <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>Deine Wette</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
          <div>
            <label style={labelStyle}>BANKROLL (€)</label>
            <input
              type="number"
              value={bankroll}
              onChange={e => setBankroll(e.target.value)}
              style={inputStyle}
              placeholder="z.B. 1000"
              min="1"
            />
          </div>
          <div>
            <label style={labelStyle}>ANGEBOTENE QUOTE</label>
            <input
              type="number"
              value={odds}
              onChange={e => setOdds(e.target.value)}
              style={inputStyle}
              placeholder="z.B. 2.50"
              step="0.01"
              min="1.01"
            />
          </div>
          <div>
            <label style={labelStyle}>EIGENE WAHRSCHEINLICHKEIT (%)</label>
            <input
              type="number"
              value={prob}
              onChange={e => setProb(e.target.value)}
              style={inputStyle}
              placeholder="z.B. 45"
              step="0.1"
              min="0.1"
              max="99.9"
            />
          </div>
        </div>
        <p style={{ fontSize: '0.82rem', color: '#4a5568', marginTop: '1rem' }}>
          💡 Deine geschätzte Wahrscheinlichkeit ist der Kern des Kelly-Kriteriums — schätze sie realistisch.
        </p>
      </div>

      {/* Results */}
      {result ? (
        result.noValue ? (
          <div style={{ background: 'rgba(255,68,68,0.07)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>❌</div>
            <h3 style={{ color: '#ff4444', fontWeight: 800, marginBottom: '0.5rem' }}>Kein Value gefunden</h3>
            <p style={{ color: '#a0aec0' }}>
              Bei einer Quote von {odds} und deiner geschätzten Wahrscheinlichkeit von {prob}% hat diese Wette einen negativen Erwartungswert.<br />
              <strong style={{ color: '#ffffff' }}>Kelly-Empfehlung: Nicht wetten.</strong>
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.88rem', color: '#718096' }}>
              EV = {(result.expectedValue * 100).toFixed(2)}% pro Euro Einsatz
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {/* Kelly percentage */}
            <div style={{ background: '#141d35', border: '1px solid rgba(0,255,136,0.3)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '0.06em' }}>KELLY-EINSATZ</div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#00ff88', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {result.kellyPct.toFixed(2)}%
              </div>
              <div style={{ color: '#718096', fontSize: '0.9rem', marginTop: '0.25rem' }}>deiner Bankroll</div>
              <div style={{ marginTop: '1rem', display: 'inline-block', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: '8px', padding: '0.5rem 1rem', fontSize: '0.88rem', color: '#a0aec0' }}>
                Erwartungswert: <strong style={{ color: '#00ff88' }}>+{(result.expectedValue * 100).toFixed(2)}%</strong> pro Euro
              </div>
            </div>

            {/* Stake options */}
            <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>Einsatz-Empfehlungen</h3>
              <div style={{ display: 'grid', gap: '0.875rem' }}>
                {[
                  { label: 'Voll-Kelly (aggressiv)', fraction: '1/1', stake: result.fullStake, winReturn: result.fullReturn, color: '#ff9500', warning: 'Hohes Risiko — nur für Fortgeschrittene' },
                  { label: 'Halb-Kelly (empfohlen)', fraction: '1/2', stake: result.halfStake, winReturn: result.halfReturn, color: '#00ff88', warning: 'Gutes Risiko/Reward-Verhältnis' },
                  { label: 'Viertel-Kelly (konservativ)', fraction: '1/4', stake: result.quarterStake, winReturn: result.quarterReturn, color: '#00ccff', warning: 'Sehr sicher, geringere Wachstumsrate' },
                ].map(opt => (
                  <div key={opt.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center', padding: '1rem', background: '#0f1628', borderRadius: '10px', border: `1px solid ${opt.color}22` }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{opt.label}</div>
                      <div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.2rem' }}>{opt.warning}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, color: opt.color, fontSize: '1.1rem' }}>{fmtEur(opt.stake)}</div>
                      <div style={{ fontSize: '0.8rem', color: '#718096' }}>Gewinn: +{fmtEur(opt.winReturn)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            {result.kellyPct > 20 && (
              <div style={{ background: 'rgba(255,149,0,0.07)', border: '1px solid rgba(255,149,0,0.2)', borderRadius: '12px', padding: '1rem 1.25rem', fontSize: '0.88rem', color: '#a0aec0' }}>
                ⚠️ <strong style={{ color: '#ff9500' }}>Hoher Kelly-Wert:</strong> Bei über 20% empfehlen Experten generell den Viertel- oder Halb-Kelly. Vollständige Kelly-Einsätze können das Kapital volatil machen.
              </div>
            )}
          </div>
        )
      ) : (
        <div style={{ background: '#141d35', border: '1px dashed #1e2d4a', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: '#4a5568' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📐</div>
          <p>Fülle alle drei Felder aus, um den optimalen Einsatz zu berechnen.</p>
        </div>
      )}
    </div>
  )
}

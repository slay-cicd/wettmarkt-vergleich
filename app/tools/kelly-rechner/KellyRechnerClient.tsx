'use client'
import { useState, useEffect } from 'react'

function calcKelly(bankroll: number, odds: number, trueProbability: number) {
  if (bankroll <= 0 || odds <= 1 || trueProbability <= 0 || trueProbability >= 1) return null

  const b = odds - 1
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
      setResult(calcKelly(b, o, p))
    } else {
      setResult(null)
    }
  }, [bankroll, odds, prob])

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* Inputs */}
      <div className="tool-result-box" style={{ marginBottom: '1.5rem' }}>
        <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem' }}>
          Deine Wette
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', color: '#6B7280', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Bankroll (€)
            </label>
            <input
              type="number"
              value={bankroll}
              onChange={e => setBankroll(e.target.value)}
              className="tool-input"
              placeholder="z.B. 1000"
              min="1"
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#6B7280', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Angebotene Quote
            </label>
            <input
              type="number"
              value={odds}
              onChange={e => setOdds(e.target.value)}
              className="tool-input"
              placeholder="z.B. 2.50"
              step="0.01"
              min="1.01"
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#6B7280', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Eigene Wahrscheinlichkeit (%)
            </label>
            <input
              type="number"
              value={prob}
              onChange={e => setProb(e.target.value)}
              className="tool-input"
              placeholder="z.B. 45"
              step="0.1"
              min="0.1"
              max="99.9"
            />
          </div>
        </div>
        <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginTop: '1rem' }}>
          💡 Deine geschätzte Wahrscheinlichkeit ist der Kern des Kelly-Kriteriums — schätze sie realistisch.
        </p>
      </div>

      {/* Results */}
      {result ? (
        result.noValue ? (
          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>❌</div>
            <h3 className="font-serif" style={{ color: '#dc2626', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.25rem' }}>
              Kein Value gefunden
            </h3>
            <p style={{ color: '#6B7280', lineHeight: 1.7 }}>
              Bei einer Quote von {odds} und deiner geschätzten Wahrscheinlichkeit von {prob}% hat diese Wette einen negativen Erwartungswert.<br />
              <strong style={{ color: '#1A1A1A' }}>Kelly-Empfehlung: Nicht wetten.</strong>
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#9CA3AF' }}>
              EV = {(result.expectedValue * 100).toFixed(2)}% pro Euro Einsatz
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {/* Kelly percentage */}
            <div className="tool-result-highlight" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.75rem' }}>
                Kelly-Einsatz
              </div>
              <div
                className="font-serif"
                style={{ fontSize: '3rem', fontWeight: 700, color: '#16a34a', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                {result.kellyPct.toFixed(2)}%
              </div>
              <div style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>deiner Bankroll</div>
              <div style={{ marginTop: '1rem', display: 'inline-block', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#4A4A4A' }}>
                Erwartungswert: <strong style={{ color: '#16a34a' }}>+{(result.expectedValue * 100).toFixed(2)}%</strong> pro Euro
              </div>
            </div>

            {/* Stake options */}
            <div className="tool-result-box">
              <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>
                Einsatz-Empfehlungen
              </h3>
              <div style={{ display: 'grid', gap: '0.875rem' }}>
                {[
                  { label: 'Voll-Kelly (aggressiv)', stake: result.fullStake, winReturn: result.fullReturn, warning: 'Hohes Risiko — nur für Fortgeschrittene', highlight: false },
                  { label: 'Halb-Kelly (empfohlen)', stake: result.halfStake, winReturn: result.halfReturn, warning: 'Gutes Risiko/Reward-Verhältnis', highlight: true },
                  { label: 'Viertel-Kelly (konservativ)', stake: result.quarterStake, winReturn: result.quarterReturn, warning: 'Sehr sicher, geringere Wachstumsrate', highlight: false },
                ].map(opt => (
                  <div
                    key={opt.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '1rem',
                      alignItems: 'center',
                      padding: '1rem',
                      background: opt.highlight ? '#F0FDF4' : '#FAFAF7',
                      borderRadius: '10px',
                      border: opt.highlight ? '1px solid #BBF7D0' : '1px solid #E5E5E0',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '0.9375rem' }}>{opt.label}</div>
                      <div style={{ fontSize: '0.8125rem', color: '#6B7280', marginTop: '0.2rem' }}>{opt.warning}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, color: opt.highlight ? '#16a34a' : '#1A1A1A', fontSize: '1.125rem' }}>
                        {fmtEur(opt.stake)}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#6B7280' }}>Gewinn: +{fmtEur(opt.winReturn)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {result.kellyPct > 20 && (
              <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '12px', padding: '1rem 1.25rem', fontSize: '0.875rem', color: '#4A4A4A', lineHeight: 1.7 }}>
                ⚠️ <strong style={{ color: '#ea580c' }}>Hoher Kelly-Wert:</strong> Bei über 20% empfehlen Experten generell den Viertel- oder Halb-Kelly. Vollständige Kelly-Einsätze können das Kapital volatil machen.
              </div>
            )}
          </div>
        )
      ) : (
        <div style={{ background: '#F3F3EE', border: '1px dashed #E5E5E0', borderRadius: '12px', padding: '3rem', textAlign: 'center', color: '#9CA3AF' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📐</div>
          <p>Fülle alle drei Felder aus, um den optimalen Einsatz zu berechnen.</p>
        </div>
      )}
    </div>
  )
}

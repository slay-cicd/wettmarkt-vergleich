'use client'
import { useState, useEffect } from 'react'

type Selection = {
  name: string
  odds: string
}

function combinations(n: number, k: number): number[][] {
  const result: number[][] = []
  function helper(start: number, combo: number[]) {
    if (combo.length === k) { result.push([...combo]); return }
    for (let i = start; i < n; i++) {
      combo.push(i)
      helper(i + 1, combo)
      combo.pop()
    }
  }
  helper(0, [])
  return result
}

function nCk(n: number, k: number): number {
  if (k > n) return 0
  if (k === 0 || k === n) return 1
  let result = 1
  for (let i = 0; i < k; i++) {
    result = result * (n - i) / (i + 1)
  }
  return Math.round(result)
}

function calcSystem(selections: Selection[], stake: number, systemK: number) {
  const valid = selections.filter(s => {
    const v = parseFloat(s.odds)
    return !isNaN(v) && v > 1
  })
  if (valid.length < 2 || systemK > valid.length || stake <= 0) return null

  const combos = combinations(valid.length, systemK)
  const numCombos = combos.length
  const stakePerCombo = stake / numCombos

  let totalReturn = 0
  const comboResults = combos.map(combo => {
    const comboOdds = combo.reduce((acc, idx) => acc * parseFloat(valid[idx].odds), 1)
    const ret = stakePerCombo * comboOdds
    return { combo, comboOdds, ret }
  })

  totalReturn = comboResults.reduce((a, c) => a + c.ret, 0)
  const minReturn = Math.min(...comboResults.map(c => c.ret))
  const maxReturn = Math.max(...comboResults.map(c => c.ret))

  return { valid, numCombos, stakePerCombo, totalReturn, minReturn, maxReturn, comboResults }
}

export default function SystemWettenClient() {
  const [selections, setSelections] = useState<Selection[]>([
    { name: 'Auswahl 1', odds: '' },
    { name: 'Auswahl 2', odds: '' },
    { name: 'Auswahl 3', odds: '' },
  ])
  const [stake, setStake] = useState('10')
  const [systemK, setSystemK] = useState(2)
  const [result, setResult] = useState<ReturnType<typeof calcSystem>>(null)

  useEffect(() => {
    const s = parseFloat(stake)
    setResult(calcSystem(selections, s, systemK))
  }, [selections, stake, systemK])

  function updateField(i: number, field: 'name' | 'odds', val: string) {
    const updated = [...selections]
    updated[i] = { ...updated[i], [field]: val }
    setSelections(updated)
  }

  function addSelection() {
    if (selections.length >= 8) return
    setSelections([...selections, { name: `Auswahl ${selections.length + 1}`, odds: '' }])
  }

  function removeSelection(i: number) {
    if (selections.length <= 2) return
    const updated = selections.filter((_, idx) => idx !== i)
    setSelections(updated)
    if (systemK >= updated.length) setSystemK(Math.max(2, updated.length - 1))
  }

  const validCount = selections.filter(s => parseFloat(s.odds) > 1).length

  const systemOptions = []
  for (let k = 2; k < selections.length; k++) {
    systemOptions.push({ k, label: `${k} aus ${selections.length}`, count: nCk(selections.length, k) })
  }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* Selections */}
      <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>Deine Auswahlen</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {selections.map((sel, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 130px auto', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                value={sel.name}
                onChange={e => updateField(i, 'name', e.target.value)}
                style={{ background: '#0f1628', border: '1px solid #1e2d4a', borderRadius: '8px', color: '#ffffff', padding: '0.65rem 1rem', fontSize: '0.9rem', outline: 'none' }}
                placeholder="Mannschaft / Ereignis"
              />
              <input
                type="number"
                value={sel.odds}
                onChange={e => updateField(i, 'odds', e.target.value)}
                style={{
                  background: '#0f1628', border: '1px solid',
                  borderColor: sel.odds && parseFloat(sel.odds) > 1 ? 'rgba(0,255,136,0.4)' : '#1e2d4a',
                  borderRadius: '8px', color: '#ffffff', padding: '0.65rem 1rem',
                  fontSize: '1rem', fontWeight: 700, outline: 'none', textAlign: 'right',
                }}
                placeholder="Quote"
                step="0.01" min="1.01"
              />
              {selections.length > 2 ? (
                <button onClick={() => removeSelection(i)} style={{ background: 'none', border: 'none', color: '#4a5568', cursor: 'pointer', padding: '0.5rem', fontSize: '1.2rem', width: '32px' }}>×</button>
              ) : <div style={{ width: '32px' }} />}
            </div>
          ))}
        </div>
        {selections.length < 8 && (
          <button onClick={addSelection} style={{ marginTop: '1rem', background: 'none', border: '1px dashed #1e2d4a', borderRadius: '8px', color: '#4a5568', padding: '0.5rem 1.25rem', cursor: 'pointer', fontSize: '0.88rem', width: '100%' }}>
            + Auswahl hinzufügen (max. 8)
          </button>
        )}
      </div>

      {/* System + Stake config */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.25rem' }}>
          <label style={{ display: 'block', color: '#a0aec0', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>SYSTEM</label>
          <select
            value={systemK}
            onChange={e => setSystemK(parseInt(e.target.value))}
            style={{ background: '#0f1628', border: '1px solid #1e2d4a', borderRadius: '8px', color: '#ffffff', padding: '0.65rem 1rem', fontSize: '0.95rem', width: '100%', outline: 'none', cursor: 'pointer' }}
          >
            {systemOptions.map(opt => (
              <option key={opt.k} value={opt.k}>{opt.label} ({opt.count} Kombis)</option>
            ))}
          </select>
        </div>
        <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '12px', padding: '1.25rem' }}>
          <label style={{ display: 'block', color: '#a0aec0', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>GESAMTEINSATZ (€)</label>
          <input
            type="number"
            value={stake}
            onChange={e => setStake(e.target.value)}
            style={{ background: '#0f1628', border: '1px solid #1e2d4a', borderRadius: '8px', color: '#ffffff', padding: '0.65rem 1rem', fontSize: '1rem', fontWeight: 700, width: '100%', outline: 'none' }}
            min="0.1" step="1"
          />
        </div>
      </div>

      {/* Results */}
      {result ? (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {/* Summary */}
          <div style={{ background: '#141d35', border: '1px solid rgba(0,255,136,0.3)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>System-Übersicht</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
              {[
                { label: 'Kombinationen', value: result.numCombos.toString(), color: '#a0aec0' },
                { label: 'Einsatz/Kombi', value: `${result.stakePerCombo.toFixed(2)} €`, color: '#a0aec0' },
                { label: 'Min. Gewinn', value: `${result.minReturn.toFixed(2)} €`, color: '#ff9500' },
                { label: 'Max. Gewinn', value: `${result.maxReturn.toFixed(2)} €`, color: '#00ff88' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center', background: '#0f1628', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: '0.78rem', color: '#718096', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Combination breakdown */}
          {result.comboResults.length <= 10 && (
            <div style={{ background: '#141d35', border: '1px solid #1e2d4a', borderRadius: '16px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Einzelne Kombinationen</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {result.comboResults.map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: '#0f1628', borderRadius: '8px', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ color: '#c8d6e8', fontSize: '0.88rem' }}>
                      {c.combo.map(idx => result.valid[idx].name).join(' + ')}
                    </span>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem' }}>
                      <span style={{ color: '#718096' }}>Quote: <strong style={{ color: '#ffffff' }}>{c.comboOdds.toFixed(2)}</strong></span>
                      <span style={{ color: '#718096' }}>Gewinn: <strong style={{ color: '#00ff88' }}>{c.ret.toFixed(2)} €</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={{ background: '#141d35', border: '1px dashed #1e2d4a', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: '#4a5568' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
          <p>Gib mindestens 2 Quoten ein, um dein System zu berechnen.</p>
        </div>
      )}
    </div>
  )
}

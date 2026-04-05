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

  const comboResults = combos.map(combo => {
    const comboOdds = combo.reduce((acc, idx) => acc * parseFloat(valid[idx].odds), 1)
    const ret = stakePerCombo * comboOdds
    return { combo, comboOdds, ret }
  })

  const totalReturn = comboResults.reduce((a, c) => a + c.ret, 0)
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

  const systemOptions = []
  for (let k = 2; k < selections.length; k++) {
    systemOptions.push({ k, label: `${k} aus ${selections.length}`, count: nCk(selections.length, k) })
  }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* Selections */}
      <div className="tool-result-box" style={{ marginBottom: '1.5rem' }}>
        <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>
          Deine Auswahlen
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {selections.map((sel, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 130px auto', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                value={sel.name}
                onChange={e => updateField(i, 'name', e.target.value)}
                className="tool-input"
                placeholder="Mannschaft / Ereignis"
              />
              <input
                type="number"
                value={sel.odds}
                onChange={e => updateField(i, 'odds', e.target.value)}
                className="tool-input"
                style={{
                  textAlign: 'right',
                  fontWeight: 600,
                  borderColor: sel.odds && parseFloat(sel.odds) > 1 ? '#16a34a' : undefined,
                }}
                placeholder="Quote"
                step="0.01"
                min="1.01"
              />
              {selections.length > 2 ? (
                <button
                  onClick={() => removeSelection(i)}
                  style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: '0.5rem', fontSize: '1.25rem', lineHeight: 1, width: '32px' }}
                >×</button>
              ) : <div style={{ width: '32px' }} />}
            </div>
          ))}
        </div>
        {selections.length < 8 && (
          <button
            onClick={addSelection}
            style={{ marginTop: '0.875rem', background: 'none', border: '1px dashed #E5E5E0', borderRadius: '8px', color: '#9CA3AF', padding: '0.5rem 1.25rem', cursor: 'pointer', fontSize: '0.875rem', width: '100%', fontFamily: 'inherit' }}
          >
            + Auswahl hinzufügen (max. 8)
          </button>
        )}
      </div>

      {/* System + Stake config */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="tool-result-box">
          <label style={{ display: 'block', color: '#6B7280', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            System
          </label>
          <select
            value={systemK}
            onChange={e => setSystemK(parseInt(e.target.value))}
            className="tool-input"
            style={{ cursor: 'pointer' }}
          >
            {systemOptions.map(opt => (
              <option key={opt.k} value={opt.k}>{opt.label} ({opt.count} Kombis)</option>
            ))}
          </select>
        </div>
        <div className="tool-result-box">
          <label style={{ display: 'block', color: '#6B7280', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Gesamteinsatz (€)
          </label>
          <input
            type="number"
            value={stake}
            onChange={e => setStake(e.target.value)}
            className="tool-input"
            style={{ fontWeight: 600 }}
            min="0.1"
            step="1"
          />
        </div>
      </div>

      {/* Results */}
      {result ? (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          <div className="tool-result-highlight">
            <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>
              System-Übersicht
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
              {[
                { label: 'Kombinationen', value: result.numCombos.toString() },
                { label: 'Einsatz/Kombi', value: `${result.stakePerCombo.toFixed(2)} €` },
                { label: 'Min. Gewinn', value: `${result.minReturn.toFixed(2)} €` },
                { label: 'Max. Gewinn', value: `${result.maxReturn.toFixed(2)} €` },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center', background: '#FFFFFF', borderRadius: '10px', padding: '1rem', border: '1px solid #E5E5E0' }}>
                  <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {result.comboResults.length <= 10 && (
            <div className="tool-result-box">
              <h3 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem' }}>
                Einzelne Kombinationen
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {result.comboResults.map((c, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: '#FAFAF7', borderRadius: '8px', border: '1px solid #E5E5E0', flexWrap: 'wrap', gap: '0.5rem' }}
                  >
                    <span style={{ color: '#4A4A4A', fontSize: '0.875rem' }}>
                      {c.combo.map(idx => result.valid[idx].name).join(' + ')}
                    </span>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
                      <span style={{ color: '#6B7280' }}>Quote: <strong style={{ color: '#1A1A1A' }}>{c.comboOdds.toFixed(2)}</strong></span>
                      <span style={{ color: '#6B7280' }}>Gewinn: <strong style={{ color: '#16a34a' }}>{c.ret.toFixed(2)} €</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={{ background: '#F3F3EE', border: '1px dashed #E5E5E0', borderRadius: '12px', padding: '3rem', textAlign: 'center', color: '#9CA3AF' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
          <p>Gib mindestens 2 Quoten ein, um dein System zu berechnen.</p>
        </div>
      )}
    </div>
  )
}

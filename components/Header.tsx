'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Artikel' },
    { href: '/tools/margin-rechner', label: 'Margin-Rechner' },
    { href: '/tools/kelly-rechner', label: 'Kelly-Rechner' },
    { href: '/quoten-vergleich', label: 'Quoten-Vergleich' },
    { href: '/anbieter-vergleich', label: 'Anbieter' },
  ]

  return (
    <header style={{ background: 'rgba(10,15,28,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e2d4a', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: '#00ff88', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px', color: '#0a0f1c' }}>W</div>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Wettmarkt <span style={{ color: '#00ff88' }}>Vergleich</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {link.label}
            </Link>
          ))}
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.5rem 1.25rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Atlas Market →</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.5rem' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: '#0f1628', borderTop: '1px solid #1e2d4a', padding: '1rem 1.5rem' }} className="mobile-menu">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#a0aec0', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, padding: '0.75rem 0', borderBottom: '1px solid #1e2d4a' }}>
              {link.label}
            </Link>
          ))}
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#00ff88', color: '#0a0f1c', padding: '0.75rem 1.25rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', marginTop: '1rem', textAlign: 'center' }}>
            Atlas Market →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}

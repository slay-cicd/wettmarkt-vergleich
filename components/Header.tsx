'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/wettanbieter', label: 'Wettanbieter' },
    { href: '/tipps', label: 'Tipps' },
    { href: '/bundesliga-tabelle', label: 'Tabelle' },
    { href: '/strategien', label: 'Strategien' },
    { href: '/tools/margin-rechner', label: 'Tools' },
    { href: '/quoten-vergleich', label: 'Quoten' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: '#FAFAF7', borderBottom: '1px solid #E5E5E0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div className="flex items-center justify-between" style={{ height: '60px' }}>
          {/* Logo */}
          <Link
            href="/"
            className="font-serif transition-colors duration-200"
            style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none', letterSpacing: '-0.02em' }}
            aria-label="Wettmarkt Vergleich — Startseite"
          >
            Wettmarkt Vergleich
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center" style={{ gap: '1.5rem' }} aria-label="Hauptnavigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200"
                style={{ fontSize: '0.875rem', color: '#6B7280', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://atlasmarkets.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Zu Atlas Markets →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col p-2 -mr-2"
            style={{ gap: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1A1A1A', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '400px' : '0' }}
        >
          <nav className="flex flex-col pt-2 pb-4" style={{ gap: '0.75rem', borderTop: '1px solid #E5E5E0' }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition-colors duration-200"
                style={{ fontSize: '0.875rem', color: '#4A4A4A', textDecoration: 'none', paddingTop: i === 0 ? '0.75rem' : '0' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://atlasmarkets.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
              style={{ marginTop: '0.5rem' }}
            >
              Zu Atlas Markets →
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

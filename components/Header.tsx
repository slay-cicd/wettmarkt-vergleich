'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Startseite' },
    { href: '/tools/margin-rechner', label: 'Margin-Rechner' },
    { href: '/tools/kelly-rechner', label: 'Kelly-Rechner' },
    { href: '/quoten-vergleich', label: 'Quoten-Vergleich' },
    { href: '/anbieter-vergleich', label: 'Anbieter' },
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
          <nav className="hidden sm:flex items-center" style={{ gap: '1.75rem' }} aria-label="Hauptnavigation">
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
            className="sm:hidden flex flex-col p-2 -mr-2"
            style={{ gap: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1A1A1A', transition: 'all 0.3s' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1A1A1A', transition: 'all 0.3s' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1A1A1A', transition: 'all 0.3s' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="sm:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '300px' : '0' }}
        >
          <nav className="flex flex-col pt-2" style={{ gap: '1rem', borderTop: '1px solid #E5E5E0' }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition-colors duration-200"
                style={{ fontSize: '0.875rem', color: '#4A4A4A', textDecoration: 'none', paddingTop: link === navLinks[0] ? '0.75rem' : '0' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://atlasmarkets.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
              style={{ marginBottom: '1rem' }}
            >
              Zu Atlas Markets →
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

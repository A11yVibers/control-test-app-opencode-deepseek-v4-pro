import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#home">
        Elena Marchetti
      </a>
      <button
        className="nav__toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav__links${open ? ' nav__links--open' : ''}`}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
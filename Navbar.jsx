import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../config/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="ROBOFEST 26, back to top">ROBOFEST<sup>®</sup> / 26</a>
      <span className="mono nav-club">ROBOTiX Club · NIT Raipur</span>
      <nav aria-label="Primary" className={'nav-links' + (open ? ' open' : '')} id="menu">
        {nav.filter((n) => n.label !== 'Register').map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a className="nav-cta" href="#register" onClick={() => setOpen(false)}>Register</a>
      </nav>
      <button className="nav-toggle" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  )
}

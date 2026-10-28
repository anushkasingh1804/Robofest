import { nav, site } from '../config/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="display f-brand">ROBOFEST<sup>®</sup> / 26</p>
      <div className="f-row">
        <p className="mono">ROBOTiX Club · NIT Raipur</p>
        <nav aria-label="Footer"><ul>
          {nav.filter((n) => n.label !== 'Experience').map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
          <li><a href={site.officialUrl} target="_blank" rel="noopener noreferrer">Official page ↗</a></li>
          {site.socials.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        </ul></nav>
        <button className="totop" onClick={() => window.scrollTo({ top: 0 })}>Back to top ↑</button>
      </div>
      <p className="mono f-copy">© 2026 ROBOTiX Club, NIT Raipur. Independent frontend assignment; not the official site. Reference: robotix.nitrr.ac.in/robofest</p>
    </footer>
  )
}

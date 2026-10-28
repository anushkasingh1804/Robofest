import Reveal from './Reveal.jsx'
import { disciplines } from '../config/content.js'

export default function About() {
  return (
    <section className="sec about" id="about" aria-labelledby="about-h">
      <div className="sec-head mono"><span>01 / The idea</span><span>Philosophy</span></div>
      <div className="about-grid">
        <Reveal><h2 id="about-h" className="display h2">Not just machines. A different way of thinking.</h2></Reveal>
        <Reveal delay={0.1} className="about-body">
          <p className="lead">Robotics brings together mechanics, electronics, software, and the imagination to solve problems that once seemed impossible. ROBOFEST is the space where ideas become experiments and experiments become engineering.</p>
          <ul className="disc" aria-label="Disciplines">
            {disciplines.map((d, i) => <li key={d}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{d}</li>)}
          </ul>
          <figure className="drawing">
            <svg viewBox="0 0 320 140" role="img" aria-label="Technical drawing of a gear train linking a motor to a wheel">
              <g fill="none" stroke="#171B16" strokeWidth="2">
                <circle cx="70" cy="70" r="46" strokeDasharray="6 5" /><circle cx="70" cy="70" r="20" />
                <circle cx="170" cy="56" r="30" strokeDasharray="5 4" /><circle cx="170" cy="56" r="10" />
                <circle cx="250" cy="86" r="38" /><circle cx="250" cy="86" r="8" fill="#EC4E24" />
                <path d="M10 130h300M10 124v12M160 124v12M310 124v12" strokeWidth="1" />
              </g>
            </svg>
            <figcaption className="mono">Fig. 1 — Gear train. Original schematic.</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

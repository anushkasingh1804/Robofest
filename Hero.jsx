import { motion, useReducedMotion } from 'framer-motion'
import Mascot from './Mascot.jsx'

export default function Hero() {
  const reduce = useReducedMotion()
  const line = (i) => reduce ? {} : { initial: { y: '110%' }, animate: { y: 0 }, transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] } }
  const fade = (d) => reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: d } }
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <motion.p className="mono label" {...fade(0)}>An experiment in intelligence — 2026</motion.p>
        <h1 className="display hero-h1" aria-label="Built by humans. Unleashed.">
          {['Built by', 'humans.', 'Unleashed.'].map((t, i) => (
            <span className="mask" key={t} aria-hidden="true"><motion.span {...line(i)}>{t}</motion.span></span>
          ))}
        </h1>
        <motion.p className="lead" {...fade(0.6)}>Where engineering meets imagination. Build machines, challenge limits, and turn ambitious ideas into working reality.</motion.p>
        <motion.div className="btn-row" {...fade(0.8)}>
          <a className="btn btn-ink" href="#events">Explore the arena <span aria-hidden="true">↘</span></a>
          <a className="btn btn-line" href="#register">Join the movement <span aria-hidden="true">↗</span></a>
        </motion.div>
      </div>
      <motion.div className="hero-art" {...(reduce ? {} : { initial: { clipPath: 'inset(100% 0 0 0)' }, animate: { clipPath: 'inset(0% 0 0 0)' }, transition: { duration: 1, delay: 0.3, ease: [0.7, 0, 0.2, 1] } })}>
        <div className="plate"><span className="lime-tab mono">UNIT-26 / illustration</span>
          <Mascot idle armA={-30} armB={14} grip={14} />
          <span className="crosshair" aria-hidden="true" />
          <span className="mono note n1" aria-hidden="true">Ø joint · rotates</span>
          <span className="mono note n2" aria-hidden="true">sensor · scans</span>
          <span className="mono note n3" aria-hidden="true">gripper</span>
        </div>
        <div className="giant26" aria-hidden="true">26</div>
      </motion.div>
      <div className="hero-meta mono"><span>Original illustration</span><span>Scroll ↓</span></div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Mascot from './Mascot.jsx'

const POSES = {
  idle: { joint: 0, armA: -35, armB: 20, grip: 10, scan: 0, hi: {}, label: 'IDLE' },
  processing: { joint: 90, armA: -70, armB: -10, grip: 28, scan: -14, hi: { sensor: 1, joint: 1 }, label: 'PROCESSING' },
  active: { joint: 270, armA: -5, armB: -55, grip: 2, scan: 14, hi: { armA: 1, armB: 1, sensor: 1, joint: 1 }, label: 'ACTIVE' },
}
const PARTS = [['joint', 'Central joint'], ['armA', 'Arm A'], ['armB', 'Arm B'], ['sensor', 'Optical sensor']]

export default function MachineExperiment() {
  const reduce = useReducedMotion()
  const [state, setState] = useState('idle')
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])
  const run = () => {
    clearTimeout(timer.current)
    if (state === 'active') { setState('idle'); return }
    setState('processing')
    timer.current = setTimeout(() => setState('active'), reduce ? 400 : 1800)
  }
  const p = POSES[state]
  return (
    <section className="sec machine" aria-labelledby="m-h">
      <div className="sec-head mono"><span>Interactive / Visual demonstration</span><span>No real robot connected</span></div>
      <div className="m-grid">
        <div>
          <h2 id="m-h" className="display h2">The machine thinks.</h2>
          <p className="lead">A simple visual demonstration. Press the button to run a scripted pose sequence. It is an animation, not machine intelligence.</p>
          <button className="btn btn-ink m-btn" onClick={run}>
            {state === 'active' ? 'Reset' : state === 'processing' ? 'Running…' : 'Activate sequence'} <span aria-hidden="true">↗</span>
          </button>
          <p className="mono status" role="status" aria-live="polite">Status: <strong>{p.label}</strong></p>
          <ol className="diag" aria-label="Component diagram">
            {PARTS.map(([k, n]) => <li key={k} className={p.hi[k] ? 'on' : ''}><span aria-hidden="true" className="dot" />{n}<span className="mono">{p.hi[k] ? 'engaged' : 'standby'}</span></li>)}
          </ol>
        </div>
        <div className={'m-stage' + (reduce ? ' still' : '')}>
          <Mascot joint={p.joint} armA={p.armA} armB={p.armB} grip={p.grip} scan={p.scan} hi={p.hi} />
        </div>
      </div>
    </section>
  )
}

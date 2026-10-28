import Reveal from './Reveal.jsx'

export default function Showcase() {
  const ticks = Array.from({ length: 41 }, (_, i) => i)
  return (
    <section className="showcase" aria-labelledby="s-h">
      <svg className="grid-bg" aria-hidden="true" width="100%" height="100%"><defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#E9E7D9" strokeOpacity=".16" /></pattern></defs><rect width="100%" height="100%" fill="url(#g)" /></svg>
      <div className="ruler" aria-hidden="true">{ticks.map((t) => <i key={t} className={t % 5 === 0 ? 'long' : ''} />)}</div>
      <span className="mono corner tl" aria-hidden="true">X 000 · Y 000</span><span className="mono corner br" aria-hidden="true">X 480 · Y 320</span>
      <Reveal><h2 id="s-h" className="display h2 s-h">Ideas are easy. <span>Building them is the challenge.</span></h2></Reveal>
    </section>
  )
}

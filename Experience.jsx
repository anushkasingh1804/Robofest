import Reveal from './Reveal.jsx'
import { themes } from '../config/content.js'

export default function Experience() {
  return (
    <section className="sec" id="experience" aria-labelledby="x-h">
      <div className="sec-head mono"><span>03 / Beyond the build</span><span>Why participate</span></div>
      <Reveal><h2 id="x-h" className="display h2">Make something that moves the world.</h2></Reveal>
      <ol className="themes">
        {themes.map((t, i) => (
          <Reveal as="li" key={t.title} delay={i * 0.08} className={'theme t' + i}>
            <span className="theme-no display" aria-hidden="true">{t.no}</span>
            <h3 className="display">{t.title}</h3><p>{t.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

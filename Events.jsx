import Reveal from './Reveal.jsx'
import EventArt from './EventArt.jsx'
import { events } from '../config/content.js'

function Body({ e }) {
  return (<>
    <span className="mono ev-tag">{e.tag}</span>
    <h3 className="display ev-title">{e.title}</h3>
    <p className="ev-text">{e.text}</p>
    <p className="mono ev-note"><span className="ev-line" aria-hidden="true" />{e.note}</p>
    <span className="arrow" aria-hidden="true">↗</span>
  </>)
}
export default function Events() {
  const [a, b, c] = events
  return (
    <section className="sec" id="events" aria-labelledby="ev-h">
      <div className="sec-head mono"><span>02 / Select your arena</span><span>Event names are illustrative</span></div>
      <Reveal><h2 id="ev-h" className="display h2">Three ways to break the rules.</h2></Reveal>
      <article className="ev ev1">
        <span className="ev-no display" aria-hidden="true">{a.no}</span>
        <div className="ev-body"><Body e={a} /></div>
        <div className="ev-art"><EventArt id={a.id} /></div>
      </article>
      <article className="ev ev2">
        <div className="ev2-l"><span className="ev-no display" aria-hidden="true">{b.no}</span><div className="ev-art"><EventArt id={b.id} /></div></div>
        <div className="ev2-r ev-body"><Body e={b} /></div>
      </article>
      <article className="ev ev3">
        <div className="ev3-art ev-art"><EventArt id={c.id} /><span className="ev-no display big" aria-hidden="true">{c.no}</span></div>
        <div className="ev3-txt ev-body"><Body e={c} /></div>
      </article>
    </section>
  )
}

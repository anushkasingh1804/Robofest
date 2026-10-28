import Reveal from './Reveal.jsx'
import { site } from '../config/content.js'

export default function Registration() {
  return (
    <section className="register" id="register" aria-labelledby="r-h">
      <Reveal>
        <p className="mono label">Registration / Recruitment 2026</p>
        <h2 id="r-h" className="display r-h">Ready to Enter the Arena?</h2>
        <p className="lead">
          Be part of RoboFest and showcase your innovation, creativity, and robotics skills.
        </p>
        <p className="register-note">
          Complete your registration through the official ROBOTiX Club recruitment submission form.
        </p>
        <a
          className="enter"
          href={site.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register Now — opens the official ROBOTiX Club submission form in a new tab"
        >
          <span>Register Now</span>
          <b aria-hidden="true">↗</b>
          <span className="sr">(opens the official submission form in a new tab)</span>
        </a>
      </Reveal>
    </section>
  )
}

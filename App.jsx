import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import MachineExperiment from './components/MachineExperiment.jsx'
import Showcase from './components/Showcase.jsx'
import Experience from './components/Experience.jsx'
import Registration from './components/Registration.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><About /><Events /><MachineExperiment /><Showcase /><Experience /><Registration />
      </main>
      <Footer />
    </>
  )
}

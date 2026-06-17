import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Offline } from './components/Offline'
import { Services } from './components/Services'
import './styles/main.scss'

function App() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header onPrimaryClick={() => scrollToSection('home')} />
      <main>
        <Hero
          onOfflineClick={() => scrollToSection('offline')}
          onOnlineClick={() => scrollToSection('lesson-1')}
        />
        <Marquee />
        <Services />
        <Offline />
        <Blog />
        <Footer />
      </main>
    </>
  )
}

export default App

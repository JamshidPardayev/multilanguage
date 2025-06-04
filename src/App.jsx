import React from 'react'
import Header from './components/header/Header'
import Services from './pages/services/Services'
import Class from './pages/classes/Class'
import Footer from './components/footer/Footer'
import Contact from './pages/contact/Contact'
import Hero from './components/hero/Hero'
import About from './pages/about/About'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Class />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Accessibility from './components/Accessibility'
import OS from './components/OS'
import OurStory from './components/OurStory'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Accessibility />
        <OS />
        <OurStory />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
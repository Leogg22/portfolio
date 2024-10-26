import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import Tabs from './components/Tabs/Tabs' // Import the Tabs component

const App = () => {
  return (
    // Icons and selecting text visible
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-orange-300 selection:text-orange-950">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Background */}
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Tabs />
        {/* <Education /> */}
        <Technologies />
        {/* <Experience /> */}
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
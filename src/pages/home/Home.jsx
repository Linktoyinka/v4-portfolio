import React from 'react'
import { Footer, Navbar } from '../../components'
import { Hero, About, Projects } from '../../containers'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default Home

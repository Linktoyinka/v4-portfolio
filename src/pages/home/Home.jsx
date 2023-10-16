import React from 'react'
import { Navbar } from '../../components'
import { Hero, About } from '../../containers'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default Home

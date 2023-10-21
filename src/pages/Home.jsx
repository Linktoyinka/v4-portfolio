import React from 'react'
import { Footer, Navbar, Seo } from '../components'
import { Hero, About, Projects } from '../containers'

const Home = () => {
  return (

    <>
      <Seo title='Abdullahi Afolabi: Frontend Engineer' description='Afolabi is a skilled and dedicated front-end developer. With a passion for creating beautiful and functional user interfaces.' />
      
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default Home

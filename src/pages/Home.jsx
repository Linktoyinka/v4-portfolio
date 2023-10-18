import React from 'react'
import { Footer, Navbar } from '../components'
import { Hero, About, Projects } from '../containers'
import { Helmet } from 'react-helmet'
import { images } from '../constants'

const Home = () => {
  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Afolabi Abdullahi: Frontend Engineer</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:description" content="Afolabi is a skilled and dedicated front-end developer. With a passion for creating beautiful and functional user interfaces." />
        <meta property="og:image" content={images.portrait01} />
      </Helmet>
      
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

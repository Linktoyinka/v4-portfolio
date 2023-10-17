import React from 'react'
import { Footer, Navbar, Skills, Testimonial } from '../../components'
import { Abouthero } from '../../containers'
import { Helmet } from 'react-helmet'
import { images } from '../../constants'

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Afolabi Abdullahi</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:description" content="Afolabi is a dedicated Frontend Developer and Technical Writer with a passion for creating exceptional user experiences and making complex ideas accessible." />
        <meta property="og:image" content={images.portrait01} />
      </Helmet>

      <main>
        <Navbar />
        <Abouthero />
        <section className='padding'><Testimonial/></section>
        <Skills />
        <Footer />
      </main>
    </>
  )
}

export default About

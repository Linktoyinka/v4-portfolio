import React from 'react'
import { Footer, Navbar, Skills, Testimonial, Seo } from '../components'
import { Abouthero, Aboutwork } from '../containers'

const About = () => {
  return (
    <>
      <Seo title='About Afolabi Abdullahi' description='Afolabi is a dedicated Frontend Developer and Technical Writer with a passion for creating exceptional user experiences and making complex ideas accessible.' />

      <main>
        <Navbar />
        <Abouthero />
        <section className='padding'><Testimonial/></section>
        <Skills />
        <Aboutwork />
        <Footer />
      </main>
    </>
  )
}

export default About

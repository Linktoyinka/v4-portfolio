import React from 'react'
import './About.css'
import { Headline, Testimonial } from '../../components'

const About = () => {
  return (
    <section  className='padding' id='about'>
      <Headline title='About' subtitle='Trusted by the fastest growing startups.'/>
      <Testimonial />
    </section>
  )
}

export default About

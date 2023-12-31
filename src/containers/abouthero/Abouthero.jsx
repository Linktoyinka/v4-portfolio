import React from 'react'
import './Abouthero.css'
import { images, resume } from '../../constants'

const Abouthero = () => {
  return (
    <section className='hero-padding about-hero'>
      <div className='about-hero-section'>
        <div>
        <p className='about-p'>About me</p>
          <div className='about-hero-img'>
            <img src={images.portrait01} alt='portrait'/>
          </div>
        </div>

        <div className='about-hero-content'>
          <p data-aos="fade-up">
          As a passionate Frontend Developer and Technical Writer, I bring a unique blend of creativity and precision to the digital world
          </p>

          <p data-aos="fade-up">I'm a dedicated Frontend Developer and Technical Writer with a passion for creating exceptional user experiences and making complex ideas accessible. With expertise in a range of web technologies, including ReactJS, Bootstrap, and Tailwind CSS, I bring designs to life with elegance and functionality.</p>

          <a data-aos="fade-up" href={resume} target='blank' className='sec-btn' >Download Resumé</a>
        </div>
      </div>
    </section>
  )
}

export default Abouthero

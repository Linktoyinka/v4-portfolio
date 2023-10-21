import React from 'react'
import './Hero.css'
import { BsArrowDownShort } from "react-icons/bs";
import { images } from '../../constants';

const Hero = () => {
  return (
    <section className='home-hero hero-padding'>
      <div className='hero-content'>
        <h1>
          Abdullahi Afolabi,<br />Frontend developer
        </h1>

        <p>
          I enjoy creating solid, scalable frontend products with excellent user experiences.
        </p>

        <p className='p-small'>
          Proven track record of developing successful products for clients in multiple countries. You can check out my work below
        </p>

        <a className='hero' href='#about'>Scroll down <BsArrowDownShort className='icon'/></a>
      </div>

      <div className='hero-img'>
        <img src={images.portrait01} alt='Afolabi Abdullahi' />
      </div>
    
    </section>
  )
}

export default Hero

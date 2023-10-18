import React from 'react'
import './Skills.css'
import { images } from '../../constants'

const Skills = () => {
  return (
    <section className='padding skills'>
      <span data-aos="fade-up" className='tag'>Skills</span>

      <div data-aos="fade-up" className='about-skills'>
        <div className='skill-profile'>

            <div className='skill-icon'>
                <img src={images.code} alt='code' />
            </div>

            <div className='skill-content'>
                <span className='skillhead'>language</span>

                <ul>
                    <li className='skillset'>ー html</li>
                    <li className='skillset'>ー css</li>
                    <li className='skillset'>ー javascript</li>
                </ul>
            </div>
        </div>

        <div className='skill-profile'>
            <div className='skill-icon'>
                <img src={images.document} alt='code' />
            </div>

            <div className='skill-content'>
                <span className='skillhead'>framework</span>

                <ul>
                    <li className='skillset'>ー react.js</li>
                    <li className='skillset'>ー bootstrap</li>
                    <li className='skillset'>ー tailwind</li>
                </ul>
            </div>
        </div>

        <div className='skill-profile'>
            <div className='skill-icon'>
                <img src={images.ico} alt='code' />
            </div>

            <div className='skill-content'>
                <span className='skillhead'>others</span>

                <ul>
                    <li className='skillset'>ー technical writing</li>
                    <li className='skillset'>ー wordpress</li>
                    <li className='skillset'>ー git & github</li>
                    <li className='skillset'>ー digital marketing</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

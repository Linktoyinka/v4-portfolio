import React from 'react'
import './Aboutwork.css'
import { Link } from 'react-router-dom'

const Aboutwork = () => {
  return (
    <section className='padding aboutwork'>
        <h3 data-aos="fade-up" className='about-h3'>
            I have a profound passion for web, which I bring to life through my work in frontend development and technical writing.
        </h3>

        <div data-aos="fade-up">
            <Link className='sec-btn' to='/work' onClick={() => window.scrollTo(0, 0)}>See all projects</Link>
        </div>
    </section>
  )
}

export default Aboutwork

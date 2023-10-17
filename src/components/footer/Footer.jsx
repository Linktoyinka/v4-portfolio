import React from 'react'
import './Footer.css'
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='padding footer' id='contact'>
      <span className='tag'>Get in touch</span>

      <p className='p-small'>
      What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

      <a href='mailto:linktoyinka@gmail.com' className='mail-link'><HiOutlineMail /> linktoyinka@gmail.com</a>

      <p className='p-small'>You may also find me on these platforms!</p>
      <div className='socials'>
        <a href='https://github.com/linktoyinka' target='blank' className='mail-link'><FiGithub /></a>
        <a href='https://linkedin.com/in/afolabi-abdullahi' className='mail-link'><FiLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer

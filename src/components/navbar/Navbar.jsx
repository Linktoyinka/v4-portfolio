import React, { useEffect, useState } from 'react'
import { BsFilterRight, BsX } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { images } from '../../constants'
import './Navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    return (
        <nav className='navbar'>
            <div className="container">
                <a className="logo" href='/'>
                    <img src={images.logo} alt='logo' />
                </a>

                <ul className={nav ? 'nav-menu active scale-up-center' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/work'>Work</Link></li>
                    <li><a href='https:blog.afolabi.me' target='blank'>Blog</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<BsFilterRight className='icon' />) : (<BsX className='icon' />)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

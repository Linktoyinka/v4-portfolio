import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsFilterRight, BsX } from 'react-icons/bs'
// import {Link} from 'react-router-dom'
import { images } from '../../constants'
import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <nav className='navbar'>
            <div className="container">
                <a className="logo" href='/'>
                    <img src={images.logo} alt='logo' />
                </a>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li> */}
                    <p>wertyui</p>
                    <p>wertyui</p>
                    <p>wertyui</p>
                    <p>wertyui</p>
                    <p>wertyui</p>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<BsFilterRight className='icon' />) : (<BsX className='icon' />)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

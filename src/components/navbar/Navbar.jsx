import React, { useEffect, useState, useRef } from "react";
import { BsFilterRight, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        {/* <a className="logo" href="/">
          <img src={images.logo} alt="logo" />
        </a> */}
        <Link className="logo" to="/"><img src={images.logo} alt="logo" /></Link>

        <ul className={nav ? "nav-menu active scale-up-center" : "nav-menu"}>
          <li><Link onClick={() => setNav(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setNav(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setNav(false)} to="/work">Work</Link></li>
          <li><a onClick={() => setNav(false)} href="https:blog.afolabi.me" target="blank" >Blog</a></li>
          <li><a onClick={() => setNav(false)} href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <BsFilterRight className="icon" /> : <BsX className="icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState , useEffect } from 'react'
import './Nav.css'
import logo from '../Assets/logo.png'
import avatar from '../Assets/avatar.jpg'

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                handleShow(true);
            }else handleShow(false);
        });

    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img  className="nav__logo" src={logo} alt="" />
        <img  className="nav__avatar"src={avatar} alt="" />
    </div>
    
  )
}

export default Navbar
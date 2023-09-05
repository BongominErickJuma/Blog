import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

const Navbar = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }
  return (
    <header>
      <Link to='/'><h2>My Blog</h2></Link>
      <nav ref={navRef}>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/create'> Create</NavLink>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Navbar

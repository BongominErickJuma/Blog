import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
        <Link to='/'>
          <h2 className='navbar__title'>My Blog</h2>
        </Link>
        <div className='hamburger' onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={isNavOpen? 'nav': 'nav-hidden'}>
          <ul className="nav__list ">
          <li className='nav__item'>
              <NavLink 
              to='/' 
              onClick={toggleNav}
              className='nav__link'>
                Home
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
              to='/blogs' 
              onClick={toggleNav}
              className='nav__link'>
                Blogs
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
              to='/create' 
              onClick={toggleNav}
              className='nav__link'>
                Create
              </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
import { GrReactjs } from 'react-icons/gr'
import styled, { css } from 'styled-components/macro'

// rafc - renders a simple export function component

const emblem = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  margin-left: 0.5rem;
  margin-top: 0.4rem;

  &:hover {
    background: #fff;
    color: #242424;
    transform: scale(1.05);
  }
`
const Emblem = styled(GrReactjs)`
  ${emblem}
  `

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            co create
    
            <Emblem />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className='nav-item'>
                <Link 
                  to='/' 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                  >
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link 
                  to="/services" 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                  >
                  Services
                </Link>
              </li>

              <li className='nav-item'>
                <Link 
                  to="/events" 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                  >
                  Events
                </Link>
              </li>

              <li>
                <Link 
                to="/sign-up" 
                className='nav-links-mobile' 
                onClick={closeMobileMenu}
                >
                  Sign up
                </Link>
              </li>
            </ul>

            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}
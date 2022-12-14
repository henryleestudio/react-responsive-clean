import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
import { GrReactjs } from 'react-icons/gr'
import styled, { css } from 'styled-components/macro'

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

export const Footer = () => {
  return (
    <div className='footer-container'>
    <section className="footer-subscription">
      <p className="footer-subscription-heading">
        Join the Co Create newsletter to recieve to join us content events.
      </p>
      <p className="footer-subscription-text">
        You can unsubscribe at any time.
      </p>
      <div className="input-areas">
        <form action="">
          <input type="email" name="email" placeholder="Your Email" className="footer-input" />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
    </section>

    <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                <Emblem />
              </Link>
            </div>
            <small className="website-rights">Co Create ?? 2022</small>
            <div className="social-icons">
              <Link className="social-icon-link facebook"
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="social-icon-link instagram"
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

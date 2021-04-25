import React from 'react';
import email from './../images/email.png'
import strava from './../images/strava.png'
import twitter from './../images/twitter.png'
import instagram from './../images/instagram.png'

export default function Footer() {
  return (
    <section className="hero pink-background" id="contact">
      <div className="footer-wrapper">
        <div className="footer-info">
          <p>YOU CAN FIND ME AT:</p>
        </div>

        <div className="footer-socials">
          <a href="mailto:someone@yoursite.com" target="_blank" rel="noreferrer">
            <img className="socials-icons" src={email} alt="email" />
          </a>

          <img className="socials-icons" src={twitter} alt="twitter" />
          <img className="socials-icons" src={instagram} alt="instagram" />
          <img className="socials-icons" src={strava} alt="strava" />
        </div>
      </div>
    </section>
  )
}
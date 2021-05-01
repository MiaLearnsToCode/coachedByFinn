import React from 'react';
import email from './../images/email.png'
import strava from './../images/strava.png'
import instagram from './../images/instagram.png'

export default function Footer() {
  return (
    <section className="hero pink-background" id="contact">
      <div className="footer-wrapper">
        <div className="footer-info">
          <p>YOU CAN FIND ME AT:</p>
        </div>

        <div className="footer-socials">
          <a href="mailto:info@coachedbyfinn.com" target="_blank" rel="noreferrer">
            <img className="socials-icons" src={email} alt="email" />
          </a>
          <a href=" https://www.instagram.com/coachedbyfinn/?hl=en" target="_blank" rel="noreferrer">
            <img className="socials-icons" src={instagram} alt="instagram" />
          </a>
          <a href=" https://www.strava.com/athletes/3390803" target="_blank" rel="noreferrer">
            <img className="socials-icons" src={strava} alt="strava" />
          </a>


        </div>
      </div>
    </section>
  )
}
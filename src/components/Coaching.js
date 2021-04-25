import React from 'react';
import running from './../images/running.png'
import cycling from './../images/cycling.png'
import swimming from './../images/swimming.png'

export default function Coaching() {
  return (
    <section className="hero pink-background" id="coaching">
      <div className="coaching-title-wrapper">
        <p className="section-title">COME TRAIN WITH ME</p>
        <p className="section-subtitle">Got a race or a big event coming up?</p>
      </div>
      
      <div className="columns is-mobile gallery-wrapper">
        <div className="column is-full-mobile">
          <p className="section-subtitle gallery-subtitle">CYCLING</p>
          <img src={cycling} alt="gallery" className="gallery-photo"/>
        </div>
        <div className="column is-full-mobile">
          <p className="section-subtitle  gallery-subtitle">RUNNING</p>
          <img src={running} alt="gallery" className="gallery-photo"/>
        </div>
        <div className="column is-full-mobile">
          <p className="section-subtitle gallery-subtitle">TRIATHLON</p>
          <img src={swimming} alt="gallery" className="gallery-photo"/>
        </div>
      </div>
    </section>
  )
}
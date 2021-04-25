import React from 'react';
import bioImage from './../images/bio.png'

export default function Bio() {
  return (
    <section className="hero is-fullheight-with-navbar cream-background" id="bio">
      <div className="columns is-mobile">
        <div className="column remove-on-mobile">
          <div className="half-container">
            <img src={bioImage} className="bio-image" alt="profile"/>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="half-container">
            <p className="section-title">
              FINN FITZGERALD
            </p>
            <p className="section-subtitle">
              endurance coaching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <a href="https://finnfitzgerald.medium.com/" 
              target="_blank" 
              className="pink-button pink-background"
              rel="noreferrer"
              >VISIT THE BLOG
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
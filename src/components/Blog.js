import React from 'react';
import earlySeason from './../images/early-season.jpeg'
import back from './../images/back.png'
import dayOut from './../images/day-out.png'

export default function Blog() {
  return (
    <section className="hero pink-background" id="blog">
      <div className="coaching-title-wrapper">
        <p className="section-title">BLOG</p>
      </div>
      <div className="columns is-mobile gallery-wrapper">
        <div className="column is-full-mobile">
          <a href="https://finnfitzgerald.medium.com/2021-season-back-to-triathlon-47a17643d080" target="_blank" rel="noreferrer">
            <img src={back} alt="gallery" className="gallery-photo" />

            <p className="section-subtitle gallery-subtitle">
              <i class="small material-icons quote-icon">format_quote</i>
              2021 Season — Back to triathlon
            </p>
          </a>
        </div>
        <div className="column is-full-mobile">
          <a href="https://finnfitzgerald.medium.com/big-day-out-5f1675959a8b" target="_blank" rel="noreferrer">
            <img src={dayOut} alt="gallery" className="gallery-photo" />
            <p className="section-subtitle  gallery-subtitle">
              <i class="small material-icons quote-icon">format_quote</i>
              Big Day Out
            </p>
          </a>

        </div>
        <div className="column is-full-mobile">
          <a href="https://finnfitzgerald.medium.com/early-season-thoughts-b7465ca1fafb" target="_blank" rel="noreferrer">
            <img src={earlySeason} alt="gallery" className="gallery-photo" />
            <p className="section-subtitle gallery-subtitle">
              <i class="small material-icons quote-icon">format_quote</i>
              Early Season Thoughts
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
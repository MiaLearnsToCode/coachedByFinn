import React from 'react';
import bioImage from './../images/bio.png'

export default function Bio() {
  return (
    <section className="hero is-fullheight-with-navbar cream-background" id="bio">
      <div className="columns is-mobile">
        <div className="column remove-on-mobile">
          <div className="half-container">
            <img src={bioImage} className="bio-image" alt="profile" />
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="half-container">
            <p className="section-title">
              FINN FITZGERALD
            </p>
            <p className="section-subtitle">
              I am a lifelong sports fan, but specifically since 2011 I have worked hard as an athlete alongside a full time career in the sports industry. I completed Ironman Mallorca in 2016 and achieved my goal of becoming a category 2 British Cycling racer a couple of years later.
              <br />
              <div className="spacing"></div>
              In 2020 I made the decision to start taking steps towards becoming a full-time endurance sports coach. I have created and led training plans for athletes with a variety of goals and the joint sense of achievement between athlete and coach when a plan comes together is unbeatable.
            </p>
            <a href="https://finnfitzgerald.medium.com/"
              target="_blank"
              className="pink-button pink-background"
              rel="noreferrer"
            >VISIT MY BLOG
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
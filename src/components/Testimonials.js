import React from 'react';
import testimonial from './../images/testimonial.png'

export default function Testimonials() {
  return (
    <section className="hero is-fullheight-with-navbar cream-background">
      <p className="section-title coaching-title-wrapper">
        TESTIMONIALS
      </p>
      <div class="cards-container">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src={testimonial} alt="Placeholder" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content section-subtitle">
              <div>
                <i class="small material-icons quote-icon">star</i>
                <i class="small material-icons quote-icon">star</i>
                <i class="small material-icons quote-icon">star</i>
                <i class="small material-icons quote-icon">star</i>
                <i class="small material-icons quote-icon">star</i>
              </div>
              I started running about a year ago for my physical and mental well-being and decided to bring Finn on as my coach to help me train for my first half marathon. I am super chuffed to have achieved a time of 2hours 4mins and I can’t wait to break the 2 hour mark in my next race!
            </div>
            <div className="testimonial-name">
              - Camille K
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
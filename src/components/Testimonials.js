import React from 'react';
import testimonial from './../images/testimonial.png'

export default function Testimonials() {
  return (
    <section className="hero is-fullheight-with-navbar cream-background">
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
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
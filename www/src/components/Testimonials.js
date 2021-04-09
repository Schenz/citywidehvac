import React from 'react';

const Testimonials = props => {

  return (
    <section className="testimonials">
      <h1>Here&apos;s What Our Customers Are Saying</h1>
      <div className="testimonial-group">
        <div className="testimonial-card-1">
          <div className="testimonial-1-photo"></div>
          <div className="testimonial-1-message">
            <h2 className="testimonial-1-name">Brandon Schenz</h2>
            <p className="testimonial-1-title">Mason, OH</p>
            <blockquote className="testimonial-1-content">Rob is a straight shooter who will tell you what you need without any upselling worry.</blockquote>
          </div>
        </div>
        <div className="testimonial-card-2">
          <div className="testimonial-2-photo"></div>
          <div className="testimonial-2-message">
          <h3 className="testimonial-2-name">Jane Doe</h3>
          <p className="testimonial-2-title">West Chester, OH</p>
          <blockquote className="testimonial-2-content">Est velit id nisi ex.</blockquote>
        </div>
      </div>
      <div className="testimonial-card-3">
        <div className="testimonial-3-photo"></div>
        <div className="testimonial-3-message">
        <h3 className="testimonial-3-name">John Doe</h3>
        <p className="testimonial-3-title">Loveland, OH</p>
        <blockquote className="testimonial-3-content">Culpa commodo culpa voluptate anim.</blockquote>
      </div>
        </div>
      </div >
    </section >
  )
};

export default Testimonials;
import React from 'react';
import '../styles/pricing.css'; // Ensure the CSS file is linked

function Pricing() {
  return (
    <section id="pricing" className="pricing fade-in">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">₹1981.99<span>/month</span></p>
          <ul className="features">
            <li>
              <i></i> Basic Features
            </li>
            <li>
              <i></i> Personalized Coaching
            </li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p className="price">₹2981.99<span>/month</span></p>
          <ul className="features">
            <li>
              <i></i> Advanced Features
            </li>
            <li>
              <i></i> Progress Tracking
            </li>
            <li>
              <i></i> AI Coaching
            </li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">₹3981.99<span>/month</span></p>
          <ul className="features">
            <li>
              <i></i> All Features
            </li>
            <li>
              <i></i> Custom Coaching
            </li>
            <li>
              <i></i> Priority Support
            </li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

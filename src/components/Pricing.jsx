// Pricing.js
import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="pricing fade-in">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$9.99/month</p>
          <ul>
            <li>Basic Features</li>
            <li>Personalized Coaching</li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p className="price">$19.99/month</p>
          <ul>
            <li>Advanced Features</li>
            <li>Progress Tracking</li>
            <li>AI Coaching</li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">$29.99/month</p>
          <ul>
            <li>All Features</li>
            <li>Custom Coaching</li>
            <li>Priority Support</li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

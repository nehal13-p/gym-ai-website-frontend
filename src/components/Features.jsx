import React from 'react';
import '../styles/features.css';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';

function Features() {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <img src={feature1} alt="AI Coaching" />
          <h3>AI Coaching</h3>
          <p>Get personalized coaching with our AI-powered trainers.</p>
        </div>
        <div className="feature-card">
          <img src={feature2} alt="Progress Tracking" />
          <h3>Progress Tracking</h3>
          <p>Track your fitness progress with detailed analytics.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

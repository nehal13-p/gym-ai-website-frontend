// HeroSection.js
import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import useProgressBarAnimation from '../hooks/useProgressBarAnimation.js';
function HeroSection() {
  useScrollFadeIn();
  useProgressBarAnimation();

  return (
    <section className="hero fade-in">
      <h1 className="hero-title">Welcome to Gym AI</h1>
      <p className="hero-subtitle">Your personalized fitness coach powered by AI</p>
    </section>
  );
}

export default HeroSection;

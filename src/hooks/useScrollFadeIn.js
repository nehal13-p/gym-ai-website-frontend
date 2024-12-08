// src/hooks/useScrollFadeIn.js
import { useEffect } from 'react';

const useScrollFadeIn = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollFadeIn;

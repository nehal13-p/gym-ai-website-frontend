// src/hooks/useProgressBarAnimation.js
import { useEffect } from 'react';

const useProgressBarAnimation = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const fill = bar.querySelector('.fill');
          fill.style.width = fill.dataset.width; // Set the width dynamically from data-width
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);
};

export default useProgressBarAnimation;

'use client'; // Ensures this runs on the client side

import { useEffect, useState } from 'react';
import styles from './ParticleBackground.module.css';

declare global {
  interface Window {
    particlesJS: (tag_id: string, params: any) => void;
    pJSDom: any[];
  }
}

export default function ParticleBackground() {
  const [particleCount, setParticleCount] = useState('--');

  useEffect(() => {
    // Load particles.js from the public directory
    const script = document.createElement('script');
    script.src = '/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize particles.js after the script loads
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#911fa7' },
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: true, distance: 130, color: '#971e93', opacity: 0.9, width: 1.3 },
            move: { enable: true, speed: 10, direction: 'none', random: true, out_mode: 'out' },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 1 }, push: { particles_nb: 4 } },
          },
          retina_detect: true,
        });

        // Particle counter
        const updateParticleCount = () => {
          const pjsInstance = window.pJSDom && window.pJSDom[0] ? window.pJSDom[0].pJS : null;
          if (pjsInstance && pjsInstance.particles && pjsInstance.particles.array) {
            setParticleCount(pjsInstance.particles.array.length.toString());
          }
        };

        // Initial update after a short delay to ensure particles.js is initialized
        setTimeout(updateParticleCount, 100);

        // Update every 500ms
        const intervalId = setInterval(updateParticleCount, 500);

        // Cleanup
        return () => {
          clearInterval(intervalId);
        };
      } else {
        console.error('particlesJS is not defined');
      }
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none' // Allows interaction with content beneath
    }}>
      <div id="particles-js" className={styles.particles}></div>
      <div className={styles.countParticles}>
        <span className="js-count-particles">{particleCount}</span> particles
      </div>
    </div>
  );
}

'use client';
import { useEffect } from 'react';
import styles from './Hero.module.css';
import About from './About';
import Projects from './Project';
import Contact from './Contact';

export default function HomeComponent() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div id="particles-js" className={styles.particlesContainer}></div>
      <div className={styles.content}>
        <h1>Hi, I’m Nadeem Raza</h1>
        <p>Your Friendly IT Support Specialist</p>
              <a href="https://linkedin.com/in/nadeemraza-624454283" target='_blank' className={styles.ctaLink}>
  <button className={styles.cta}>Get in Touch</button>
</a>
      </div>
     <About />
      <Projects />
       <Contact />
    </section>
  );
}
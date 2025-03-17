import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
      I'm an IT support professional with 5 years of experience in manufacturing, science data, and customer support. 
      As a Computer Software Engineering graduate from SZABIST, I specialize in network management, cybersecurity, 
      and system administration. I am passionate about solving technical challenges and ensuring seamless IT operations.
    </p>
    
      <div className={styles.skills}>
        <span>Hardware Repair</span>
        <span>Network Troubleshooting</span>
        <span>Windows/Linux Support</span>
        <span>Customer Service</span>
      </div>
    </section>
  );
}
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
    <p>Feel free to reach out for collaborations or inquiries!</p>
    <ul>
      <li><strong>Email:</strong> nadeemr1@yahoo.com</li>
      <li><strong>Phone:</strong> +92311-1007025</li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nadeemraza-624454283" target="_blank">linkedin.com/in/nadeemraza</a></li>
    </ul>
    </section>
  );
}
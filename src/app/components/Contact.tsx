import styles from './Contact.module.css';
import {  FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
     {/* Contact Section */}
     <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">Contact Me</h3>
        <p className="text-gray-300 flex items-center justify-center gap-2">
          <FaEnvelope className="text-red-400" /> nadeemr1@yahoo.com
        </p>
        <p className="text-gray-300 flex items-center justify-center gap-2 mt-2">
          <FaPhone className="text-blue-400" /> +92301-11007025
        </p>
        <p className="text-gray-300 flex items-center justify-center gap-2 mt-2">
          <FaLinkedin className="text-blue-500" /> <a href="https://www.linkedin.com/in/nadeemraza-624454283/" className="hover:underline">LinkedIn Profile</a>
        </p>
      </div>

    </section>
  );
}
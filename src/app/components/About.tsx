import styles from './About.module.css';
import { FaCertificate, FaTools,  } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className="text-3xl font-bold text-white text-center">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
        I’m an <span className="font-semibold text-blue-300">IT Support Professional</span> with expertise in{" "}
        <span className="font-semibold">network management, cybersecurity, and system administration</span>. 
        With hands-on experience at{" "}
        <span className="font-semibold text-blue-300">HG Harvest Group, OGDCL, and PTCL | Ufone</span>, I have successfully optimized IT infrastructures, enhanced security, and ensured seamless operations.
      </p>

      {/* Key Expertise Section */}
      <div className="mt-6 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">Key Expertise</h3>
        <div className="grid grid-cols-2 gap-4">
          <span className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105">System Troubleshooting & Network Security</span>
          <span className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105">Cybersecurity & Risk Mitigation</span>
          <span className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105">Cloud & Virtualization</span>
          <span className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105">IT Optimization & Support</span>
        </div>
      </div>

      {/* Certifications & Tools */}
      <div className="mt-6 text-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">Certifications & Tools</h3>
        <p className="text-gray-300 flex items-center justify-center gap-2">
          <FaCertificate className="text-yellow-400" /> Certified in <span className="font-semibold">Linux, Digital Forensics, and Cybersecurity</span>
        </p>
        <p className="text-gray-300 flex items-center justify-center gap-2 mt-2">
          <FaTools className="text-green-400" /> Tools: Microsoft 365, Cisco, VMware, Wireshark, Nmap
        </p>
      </div>

      
    </section>
  );
}

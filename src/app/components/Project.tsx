import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Experience</h2>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
        <h3>HG Harvest Group Pvt. Ltd. – Assistant IT</h3>
      <p><strong>November 2024 – Present</strong></p>
      <ul>
        <li>Managing network infrastructure, system administration, and troubleshooting.</li>
        <li>Ensuring IT systems’ stability, security, and performance optimization.</li>
        <li>Providing technical support and IT infrastructure enhancements.</li>
      </ul>
        </div>
        <div className={styles.projectCard}>
        <h3>OGDCL Official – Network Intern</h3>
      <p><strong>July 2024 – September 2024 (3 months)</strong></p>
      <ul>
        <li>Assisted in configuring, managing, and troubleshooting network infrastructure.</li>
        <li>Gained practical experience in network protocols, security measures, and performance optimization.</li>
        <li>Supported seamless network operations and contributed to efficiency-enhancing updates.</li>
      </ul>
        </div>
        <div className={styles.projectCard}>
          <h3>PTCL | Ufone Business Solutions – System Administrator Intern</h3>
      <p><strong>July 2023 – September 2023 (3 months)</strong></p>
      <ul>
        <li>Engaged in system administration tasks, focusing on Linux/UNIX environments.</li>
        <li>Gained exposure to enterprise-level IT solutions and system monitoring.</li>
      </ul>
        </div>
      </div>
    </section>
  );
}
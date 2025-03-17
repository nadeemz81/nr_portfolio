import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className="text-3xl font-bold text-white text-center mb-6">Experience</h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* HG Harvest Group */}
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">HG Harvest Group Pvt. Ltd. – Assistant IT</h3>
          <p className="text-gray-300 mt-1"><strong>November 2024 – Present</strong></p>
          <div className="mt-4 space-y-2">
            <p>✅ Managing network infrastructure, system administration, and troubleshooting.</p>
            <p>✅ Ensuring IT systems’ stability, security, and performance optimization.</p>
            <p>✅ Providing technical support and IT infrastructure enhancements.</p>
          </div>
        </div>

        {/* OGDCL Internship */}
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">OGDCL Official – Network Intern</h3>
          <p className="text-gray-300 mt-1"><strong>July 2024 – September 2024 (3 months)</strong></p>
          <div className="mt-4 space-y-2">
            <p>✅ Assisted in configuring, managing, and troubleshooting network infrastructure.</p>
            <p>✅ Gained practical experience in network protocols, security measures, and performance optimization.</p>
            <p>✅ Supported seamless network operations and contributed to efficiency-enhancing updates.</p>
          </div>
        </div>

        {/* PTCL/Ufone Internship */}
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">PTCL | Ufone Business Solutions – System Administrator Intern</h3>
          <p className="text-gray-300 mt-1"><strong>July 2023 – September 2023 (3 months)</strong></p>
          <div className="mt-4 space-y-2">
            <p>✅ Engaged in system administration tasks, focusing on Linux/UNIX environments.</p>
            <p>✅ Gained exposure to enterprise-level IT solutions and system monitoring.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

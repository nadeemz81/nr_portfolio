import './globals.css';
import type { Metadata } from 'next';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import ParticleBackground from '../app/components/ParticleBackground';

export const metadata: Metadata = {
  title: 'Nadeem Raza - IT Support Portfolio',
  description: 'Portfolio website for Nadeem Raza, IT Support Specialist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ParticleBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      </body>
    </html>
  );
}
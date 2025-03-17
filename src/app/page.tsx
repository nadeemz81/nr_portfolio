import HomeComponent from '@/app/components/Home';
import About from '@/app/components/About';
import Projects from '@/app/components/Project';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className="container">
      <HomeComponent />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

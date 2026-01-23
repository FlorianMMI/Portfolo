import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <div id="hero" className="bg-[#0a0a0a]">
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}

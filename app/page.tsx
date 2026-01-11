import ConstellationBackground from '@/components/ConstellationBackground';
import Navigation from '@/components/Navigation';
import HomeSection from '@/sections/HomeSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <ConstellationBackground />
      <div className="relative z-10">
        <Navigation />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
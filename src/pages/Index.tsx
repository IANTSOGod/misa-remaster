import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramPresentation from '@/components/ProgramPresentation';
import Tracks from '@/components/Tracks';
import Curriculum from '@/components/Curriculum';
import Careers from '@/components/Careers';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import JoinUs from '@/components/JoinUs';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProgramPresentation />
      <Tracks />
      <Curriculum />
      <Careers />
      <Partners />
      <Projects />
      <JoinUs />
    </div>
  );
}
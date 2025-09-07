import AboutMe from '@/components/AboutMe';
import Careers from '@/components/Careers';
import Curriculum from '@/components/Curriculum';
import Hero from '@/components/Hero';
import JoinUs from '@/components/JoinUs';
import Partners from '@/components/Partners';
import ProgramPresentation from '@/components/ProgramPresentation';
import Projects from '@/components/Projects';
import UniversityRoadmap from '@/components/UniversityRoadmap';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <ProgramPresentation />
      {/* <Tracks /> */}
      <Curriculum />
      <UniversityRoadmap />
      <Careers />
      <Partners />
      <Projects />
      <JoinUs />
    </div>
  );
}

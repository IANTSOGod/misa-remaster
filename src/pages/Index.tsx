import { Suspense, lazy } from "react";

// Lazy load des composants
const Hero = lazy(() => import("@/components/Hero"));
const AboutMe = lazy(() => import("@/components/AboutMe"));
const ProgramPresentation = lazy(
  () => import("@/components/ProgramPresentation")
);
const Curriculum = lazy(() => import("@/components/Curriculum"));
const UniversityRoadmap = lazy(() => import("@/components/UniversityRoadmap"));
const Careers = lazy(() => import("@/components/Careers"));
const Partners = lazy(() => import("@/components/Partners"));
const Projects = lazy(() => import("@/components/Projects"));
const JoinUs = lazy(() => import("@/components/JoinUs"));

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Suspense permet d'afficher un fallback tant que le composant n'est pas chargé */}
      <Suspense fallback={<div>Chargement...</div>}>
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
      </Suspense>
    </div>
  );
}

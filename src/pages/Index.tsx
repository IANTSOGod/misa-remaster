import Careers from "@/components/Careers";
import Curriculum from "@/components/Curriculum";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Partners from "@/components/Partners";
import ProgramPresentation from "@/components/ProgramPresentation";
import Projects from "@/components/Projects";
import Tracks from "@/components/Tracks";

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
      <Footer></Footer>
    </div>
  );
}

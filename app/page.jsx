import CtaSection from "./components/CTA";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialSection";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <WhyChoose />
      <Services />
      <Projects />
      <CtaSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}

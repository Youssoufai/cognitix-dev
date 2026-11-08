import { Analytics } from "@vercel/analytics/next";
import CtaSection from "./components/CTA";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Services from "./components/Services";
// import TestimonialsSection from "./components/TestimonialSection";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Mission />
      <WhyChoose />
      <Services />
      <Projects />
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <Analytics />
    </>
  );
}

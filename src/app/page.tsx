import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import Showreel from "@/components/sections/Showreel";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTABand from "@/components/sections/CTABand";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      {/* 1. Sticky glass navbar */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero — 3D monogram + showreel + taglines */}
        <Hero />

        {/* 3. "We Tell Stories" minimal statement */}
        <Intro />

        {/* 4. Services — 12 glass cards */}
        <Services />

        {/* 5. Showreel / Portfolio — maximalist masonry grid */}
        <Showreel />

        {/* 6. Process — 4-step scroll animation */}
        <Process />

        {/* 7. Stats counters (neumorphic) */}
        <Stats />

        {/* 8. About / Why Karri Visuals */}
        <About />

        {/* 9. Testimonials — glass slider */}
        <Testimonials />

        {/* 10. CTA band — claymorph */}
        <CTABand />

        {/* 11. Contact — neumorphic form + address */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Process from "@/components/sections/Process";
import SuccessFactors from "@/components/sections/SuccessFactors";
import PositionsClosed from "@/components/sections/PositionsClosed";
import Clients from "@/components/sections/Clients";
import GlobalReach from "@/components/sections/GlobalReach";
import About from "@/components/sections/About";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhatWeDo />
        <Process />
        <SuccessFactors />
        <PositionsClosed />
        <Clients />
        <GlobalReach />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

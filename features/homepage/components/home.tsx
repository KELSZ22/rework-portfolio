import React from "react";
import { About, Contact, Footer, HeroSection, Projects, Resume } from ".";
import ResumeV2 from "../../resume-v2";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
      <ResumeV2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import { About, Contact, Footer, HeroSection, Projects, Resume } from ".";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

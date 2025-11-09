'use client'

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-gray-900 scroll-smooth">
      {/* Header avec barre de navigation */}
      <Header />

      {/* Section À propos */}
      <section id="about">
        <About />
      </section>

      {/* Section Compétences */}
      <section id="skills">
        <Skills />
      </section>

      {/* Section Projets */}
      <section id="projects">
        <Projects />
      </section>

      {/* Section Contact */}
      <section id="contact">
        <Contact />
      </section>
      
      <section>
        <Footer />
      </section>
     
    </main>
  );
}

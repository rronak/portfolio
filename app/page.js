"use client";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="footer">
        © 2026 Ronak Rayamajhi — Built with React & Next.js
      </footer>
    </main>
  );
}

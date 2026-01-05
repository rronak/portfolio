"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar.jsx";
import Particles from "./Particles.jsx";

export default function DarkModeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
  }, [darkMode]);

  return (
    <div style={{ transition: "background 0.5s, color 0.5s", minHeight: "100vh" }}>
      <audio ref={audioRef} src="/flash.mp3" preload="auto" />
      
      {/* Particles background */}
      <Particles
        particleCount={100}
        particleSpread={11}
        speed={0.01}
        particleColors={darkMode ? ["#43e9ffff", "#ffffff"] : ["#000000"]}
        baseSize={4}
        sizeRandomness={0.7}
        hoverStrength={2}
      />

      <Navbar darkMode={darkMode} />

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark/Light Mode"
      >
        {darkMode ? "🌙" : "🌞"}
      </button>

      {/* Page content */}
      <main style={{ position: "relative", zIndex: 10 }}>{children}</main>
    </div>
  );
}

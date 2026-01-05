"use client";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: your name */}
      <a href="#home" className="navbar-logo">RONAK</a>

      {/* Navbar links/buttons */}
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

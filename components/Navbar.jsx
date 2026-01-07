"use client";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">RONAK</a>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

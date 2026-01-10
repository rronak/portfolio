import "./globals.css";           
import "../components/ContactSection.css";   
import "../components/Particles.css";           
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        
 
        <Particles
          particleCount={100}
          particleSpread={11}
          speed={0.01}
          particleColors={["#43e9ffff", "#ffffff"]}
          baseSize={4}
          sizeRandomness={0.7}
          hoverStrength={2}
        />

        <Navbar />

 
        <main style={{ position: "relative", zIndex: 10 }}>{children}</main>
      </body>
    </html>
  );
}

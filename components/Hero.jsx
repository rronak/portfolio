import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <div className="hero-text-bg">
            <h1>Hi, I’m <b>Ronak</b> 👋</h1>
            <p>
              A passionate developer with interests in Machine Learning and design, turning data into insights and creating engaging experiences.
            </p>
            <p>
              I enjoy learning new programming tools and frameworks, experimenting with projects that blend creativity and technology, and I’m always open to improving my skills.
            </p>
            <p>
              My ultimate goal is to grow as a developer, tackle hands-on challenges, and contribute to innovative projects while connecting with like-minded tech enthusiasts.
            </p>

            <a
              href="/Ronak_Rayamajhi_Resume.pdf"  
              download
              className="resume-btn"
            >
              Get My Resume
            </a>
          </div>
        </div>

   
        <div className="hero-image">
          <Image
            src="/portfolio/mee.jpg"
            alt="Ronak"
            width={300}
            height={300}
            className="profile-pic"
            priority
          />
        </div>

      </div>
    </section>
  );
}
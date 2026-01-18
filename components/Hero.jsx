import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <div className="hero-text-bg">
            <h1>Hi, I’m <b>Ronak</b> 👋</h1>
            <p>
              A technically driven developer with interests in Machine Learning, data analysis, and software design, focused on transforming data into actionable insights and building efficient applications.
            </p>
            <p>Experienced as an <strong>AI Data Analyst</strong> at Peroptyx, working on data evaluation and annotation to improve the accuracy and reliability of machine learning systems.</p>
            <p> Passionate about learning new tools, building hands-on projects, and continuously improving technical skills while contributing to innovative, data-driven solutions.</p>
          
            <a
              href="https://drive.google.com/file/d/1O_AEKTn1e044OXgeLRF48By68_uvMqmY/preview"
              target="_blank"
              rel="noopener noreferrer"
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
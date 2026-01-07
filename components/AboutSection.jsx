"use client";

export default function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { category: "Data & ML", items: ["Python", "Pandas", "XGBoost", "Web Scraping"] },
    { category: "Tools", items: ["Git", "SQL", "VS Code"] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="text-white">About Me</h2>
          <p className="text-white">
            I’m a Computer Programming student from Seneca College passionate about 
            building data-driven applications and creative web experiences. 
            I bridge the gap between complex data analysis and clean user interfaces.
          </p>
        </div>

        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h4 className="skill-title">{skillGroup.category}</h4>
              <div className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
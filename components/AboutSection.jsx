"use client";

export default function AboutSection() {
  const skills = [
    { category: "Web Dev", items: ["JavaScript","React","Next.js","Node.js","Tailwind CSS","HTML"] },
    { category: "Data & ML", items: ["Python", "Pandas","NumPy","TensorFlow","SeaBorn","Scikit-Learn","MongoDB","PyTorch"] },
    { category: "Tools", items: ["Git", "SQL", "VS Code", "GitHub","Docker"] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="text-white">About Me</h2>
          <p className="text-white">
            Computer Programming graduate from Seneca College with 3.8 cumulative GPA.
          </p>
          <div className="experience-card">
  <h4 className="experience-title">
    AI Data Analyst Intern <span>@ Peroptyx</span>
  </h4>

  <p className="experience-meta">
    Sept 2025 – Dec 2025 · Remote · Toronto, ON
  </p>

  <ul className="experience-desc">
  <li>
    Evaluated and improved AI-generated datasets through accuracy, relevance,
    and quality analysis at Peroptyx.
  </li>
  <li>
    Identified anomalies and bias patterns while collaborating with
    cross-functional teams to support model refinement.
  </li>
</ul>

</div>

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
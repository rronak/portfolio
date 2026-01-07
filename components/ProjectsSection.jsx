"use client";
import "./ProjectSection.css"

export default function ProjectsSection() {
  const projects = [
      {
      title: "Football Prediction (xG Boost)",
      description: "Predicting Premier League match outcomes using XGBoost and historical Expected Goals (xG) data for high accuracy.",
      tech: ["XGBoost", "Machine Learning", "Scikit-Learn"],
      link: "https://github.com/rronak"
    },
    {
      title: "F1 Website Data Scraper",
      description: "Automated tool to extract real-time race results and driver statistics directly from official F1 sources.",
      tech: ["BeautifulSoup", "Python", "Automation"],
      link: "https://github.com/rronak/F1-Data-Scraper"
    },
    {
      title: "Personal Portfolio Site",
      description: "A personal portfolio website showcasing my projects, skills, and contact information.",
      tech: ["Javascript", "React", "CSS"],
      link: "https://github.com/rronak/portfolio"
    },
    {
      title: "F1 Data Analysis",
      description: "Comprehensive comparison and statistical analysis of performance data across the last two F1 seasons using Python.",
      tech: ["Python", "Pandas", "Matplotlib"],
      link: "https://github.com/rronak/F1-analysis"
    },
  
  
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title text-white">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link-icon"
            >
              <img 
                src="/portfolio/github.png"  
                alt="GitHub" 
                className="github-icon-img"
              />
            </a>

            <div className="project-header">
              <h3 className="text-white">{project.title}</h3>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
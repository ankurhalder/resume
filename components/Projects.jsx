import projects from "../data/projects";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img
            src={project.logo}
            alt={project.title}
            className="project-logo"
          />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-duration">
            <strong>Duration:</strong> {project.duration}
          </p>
          <p className="project-organization">
            <strong>Organization:</strong> {project.organization}
          </p>
          <p className="project-description">{project.description}</p>
          <div className="technologies-used">
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <ul className="technologies-list">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          {project.features && (
            <div className="project-features">
              <p>
                <strong>Features:</strong>
              </p>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {project.navigationLinks && (
            <div className="project-navigation-links">
              <p>
                <strong>Navigation Links:</strong>
              </p>
              <ul className="navigation-links-list">
                {project.navigationLinks.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          )}
          {project.projectLink && (
            <p className="project-link">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </p>
          )}
          {project.githubUrl && (
            <p className="project-github-link">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;

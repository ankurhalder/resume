import projects from "../data/projects";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="projects">
            <div className="left-side">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-duration">
                <strong>Duration:</strong> {project.duration}
              </p>
              <p className="project-organization">
                <strong>Organization:</strong> {project.organization}
              </p>
            </div>
            <img
              src={project.logo}
              alt={project.title}
              className="project-logo"
            />
          </div>
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
          {project.projectLink && (
            <p className="project-link">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.projectLink}
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
                {project.githubUrl === "not public yet"
                  ? "Not public yet"
                  : project.githubUrl}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;

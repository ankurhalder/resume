import PropTypes from "prop-types";

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.logo} alt={project.title} />
          <h3>{project.title}</h3>
          <p>Duration: {project.duration}</p>
          <p>Organization: {project.organization}</p>
          <p>Description: {project.description}</p>
          <h4>Technologies Used:</h4>
          <ul>
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
          <p>Skills Gained: {project.skillsGained.join(", ")}</p>
          <p>Event Date: {project.eventDate}</p>
          <p>Additional Info: {project.additionalInfo}</p>
          <p>Hashtags: {project.hashtags.join(", ")}</p>
          <p>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Link
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      skillsGained: PropTypes.arrayOf(PropTypes.string).isRequired,
      eventDate: PropTypes.string.isRequired,
      additionalInfo: PropTypes.string.isRequired,
      hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
      projectLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;

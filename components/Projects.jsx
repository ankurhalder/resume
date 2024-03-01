import PropTypes from "prop-types";

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.logo} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.duration}</p>
          <p>{project.organization}</p>
          <p>{project.description}</p>
          {project.technologies && project.technologies.length > 0 && (
            <p>Technologies: {project.technologies.join(", ")}</p>
          )}
          {project.skillsGained && project.skillsGained.length > 0 && (
            <p>Skills Gained: {project.skillsGained.join(", ")}</p>
          )}
          {project.eventDate && <p>Event Date: {project.eventDate}</p>}
          {project.additionalInfo && (
            <p>Additional Info: {project.additionalInfo}</p>
          )}
          {project.hashtags && project.hashtags.length > 0 && (
            <p>Hashtags: {project.hashtags.join(", ")}</p>
          )}
          <p>
            Project Link:{" "}
            <a href={project.projectLink}>{project.projectLink}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      title: PropTypes.string,
      duration: PropTypes.string,
      organization: PropTypes.string,
      description: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      skillsGained: PropTypes.arrayOf(PropTypes.string),
      eventDate: PropTypes.string,
      additionalInfo: PropTypes.string,
      hashtags: PropTypes.arrayOf(PropTypes.string),
      projectLink: PropTypes.string,
    })
  ),
};

export default Projects;

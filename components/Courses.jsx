import PropTypes from "prop-types";

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.title}</h3>
          <p>Provider: {course.provider}</p>
          <p>Completion Date: {course.completionDate}</p>
          <p>Description: {course.description}</p>
          <ul>
            {course.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
          <p>
            <a
              href={course.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </p>
          <img
            src={course.certificateImageUrl}
            alt={`${course.title} Certificate`}
          />
          <p>Skills Gained: {course.skillsGained.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      provider: PropTypes.string.isRequired,
      completionDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(PropTypes.string).isRequired,
      certificateLink: PropTypes.string.isRequired,
      certificateImageUrl: PropTypes.string.isRequired,
      skillsGained: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Courses;

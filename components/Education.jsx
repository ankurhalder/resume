import PropTypes from "prop-types";

const Education = ({ education }) => {
  return (
    <div>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          {edu.status && <p>Status: {edu.status}</p>}
          {edu.expectedGraduation && (
            <p>Expected Graduation: {edu.expectedGraduation}</p>
          )}
          {edu.yearOfCompletion && (
            <p>Year of Completion: {edu.yearOfCompletion}</p>
          )}
          {edu.percentage && <p>Percentage: {edu.percentage}</p>}
        </div>
      ))}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      status: PropTypes.string,
      expectedGraduation: PropTypes.string,
      yearOfCompletion: PropTypes.string,
      percentage: PropTypes.string,
    })
  ).isRequired,
};

export default Education;

import education from "../data/education";

function Education() {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3 className="degree">{edu.degree}</h3>
          <p className="institution">
            <strong>Institution:</strong> {edu.institution}
          </p>
          {edu.status && (
            <p className="status">
              <strong>Status:</strong>
              <span>{edu.status}</span>
            </p>
          )}
          {edu.expectedGraduation && (
            <p className="expected-graduation">
              <strong>Expected Graduation:</strong>
              <span>{edu.expectedGraduation}</span>
            </p>
          )}
          {edu.yearOfCompletion && (
            <p className="year-of-completion">
              <strong>Year of Completion:</strong>
              <span>{edu.yearOfCompletion}</span>
            </p>
          )}
          {edu.percentage && (
            <p className="percentage">
              <strong>Percentage:</strong>
              <span>{edu.percentage}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;

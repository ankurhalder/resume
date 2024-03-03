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
              <strong>Status:</strong> {edu.status}
            </p>
          )}
          {edu.expectedGraduation && (
            <p className="expected-graduation">
              <strong>Expected Graduation:</strong> {edu.expectedGraduation}
            </p>
          )}
          {edu.yearOfCompletion && (
            <p className="year-of-completion">
              <strong>Year of Completion:</strong> {edu.yearOfCompletion}
            </p>
          )}
          {edu.percentage && (
            <p className="percentage">
              <strong>Percentage:</strong> {edu.percentage}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;

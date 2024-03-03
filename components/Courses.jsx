import courses from "../data/courses";
function Courses() {
  return (
    <div className="courses-container">
      <h2 className="section-title">Courses</h2>
      {courses.map((course, index) => (
        <div key={index} className="course">
          <h3 className="title">{course.title}</h3>
          <p className="provider">
            <strong>Provider:</strong> {course.provider}
          </p>
          <p className="completion-date">
            <strong>Completion Date:</strong> {course.completionDate}
          </p>
          <p className="description">{course.description}</p>
          <p className="topics">
            <strong>Topics:</strong>
          </p>
          <ul className="topics-list">
            {course.topics.map((topic, idx) => (
              <li key={idx} className="topic">
                {topic}
              </li>
            ))}
          </ul>
          <p className="certificate-link">
            <a
              href={course.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </p>
          <img
            className="certificate-image"
            src={course.certificateImageUrl}
            alt={course.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Courses;

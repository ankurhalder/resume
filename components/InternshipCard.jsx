import internships from "../data/internships";
import PropTypes from "prop-types";

function InternshipCard({ internship }) {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    topic,
    certificationCredential,
    certificateImage,
    description,
  } = internship;

  return (
    <div className="internship-card">
      <h3 className="internship-title">{title}</h3>
      <p className="internship-company">{company}</p>
      <p className="internship-location">{location}</p>
      <p className="internship-dates">
        {startDate} - {endDate}
      </p>
      <p className="internship-topic">{topic}</p>
      <a
        className="internship-certificate"
        href={certificationCredential}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
      </a>
      <img
        className="internship-certificate-image"
        src={certificateImage}
        alt={`${company} Certificate`}
      />
      <p className="internship-description">{description}</p>
    </div>
  );
}

InternshipCard.propTypes = {
  internship: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    certificationCredential: PropTypes.string.isRequired,
    certificateImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

// Main Internships component
function Internships() {
  return (
    <div className="internships-container">
      <h2 className="section-title">Internships</h2>
      {internships.map((internship, index) => (
        <InternshipCard key={index} internship={internship} />
      ))}
    </div>
  );
}

export default Internships;

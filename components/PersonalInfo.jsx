import PropTypes from "prop-types";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div>
      {Object.entries(personalInfo).map(([key, value]) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
          {Array.isArray(value) ? value.join(", ") : value}
        </p>
      ))}
    </div>
  );
};

PersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    languagesKnown: PropTypes.arrayOf(PropTypes.string).isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalInfo;

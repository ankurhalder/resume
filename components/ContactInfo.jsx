import PropTypes from "prop-types";

const ContactInfo = ({ contact }) => {
  const { email, phone, nationality } = contact;

  return (
    <div>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Nationality: {nationality}</p>
    </div>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactInfo;

import contact from "../data/contact"; // Adjust the path as per your project structure

// Contact component
function Contact() {
  const { email, phone, nationality } = contact;

  return (
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      <p className="contact-item">
        <span className="contact-label">Email:</span> {email}
      </p>
      <p className="contact-item">
        <span className="contact-label">Phone:</span> {phone}
      </p>
      <p className="contact-item">
        <span className="contact-label">Nationality:</span> {nationality}
      </p>
    </div>
  );
}

export default Contact;

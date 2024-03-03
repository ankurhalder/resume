import { Fragment } from "react";
import personalInfo from "../data/personalInfo";

function PersonalInfo() {
  return (
    <Fragment>
      <div className="personal-info-container">
        <h1 className="name">{personalInfo.name}</h1>
        <h2 className="title">{personalInfo.title}</h2>
        <div className="personal-info">
          <img
            className="profile-image"
            src={personalInfo.imageUrl}
            alt={personalInfo.name}
          />

          <div className="details">
            <p className="detail">
              <strong>Age:</strong> {personalInfo.age}
            </p>
            <p className="detail">
              <strong>Gender:</strong> {personalInfo.gender}
            </p>
            <p className="detail">
              <strong>Date of Birth:</strong> {personalInfo.dateOfBirth}
            </p>
            <p className="detail">
              <strong>Languages Known:</strong>{" "}
              {personalInfo.languagesKnown.join(", ")}
            </p>
            <p className="detail">
              <strong>Address:</strong> {personalInfo.address}
            </p>
            <p className="detail">
              <strong>Email:</strong> {personalInfo.email}
            </p>
            <p className="detail">
              <strong>Website:</strong>{" "}
              <a
                className="website-link"
                href={`https://${personalInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.website}
              </a>
            </p>
          </div>
        </div>

        <p className="about">
          <strong>About:</strong> {personalInfo.about}
        </p>
      </div>
    </Fragment>
  );
}

export default PersonalInfo;

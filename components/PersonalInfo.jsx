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
              <strong>Age:</strong>
              <span>{personalInfo.age}</span>
            </p>
            <p className="detail">
              <strong>Gender:</strong>
              <span>{personalInfo.gender}</span>
            </p>
            <p className="detail">
              <strong>Date of Birth:</strong>
              <span>{personalInfo.dateOfBirth}</span>
            </p>
            <p className="detail">
              <strong>Languages Known:</strong>

              <span></span>

              {personalInfo.languagesKnown.join(", ")}
            </p>
            <p className="detail">
              <strong>Address:</strong>
              <span>{personalInfo.address}</span>
            </p>
            <p className="detail">
              <strong>Email:</strong>
              <span>{personalInfo.email}</span>
            </p>
            <p className="detail">
              <strong>Website:</strong>

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
          {/* <strong>About:</strong> */}
          {personalInfo.about}
        </p>
      </div>
    </Fragment>
  );
}

export default PersonalInfo;

import { Fragment } from "react";

import { PersonalInfo } from "../components";

import {
  personalInfo,
  education,
  skills,
  internships,
  courses,
  projects,
  social,
  contact,
} from "../data";

function App() {
  return (
    <Fragment>
      <div>
        <PersonalInfo personalInfo={personalInfo} />
        {JSON.stringify(education)}
        {JSON.stringify(skills)}
        {JSON.stringify(internships)}
        {JSON.stringify(courses)}
        {JSON.stringify(projects)}
        {JSON.stringify(social)}
        {JSON.stringify(contact)}
      </div>
    </Fragment>
  );
}

export default App;

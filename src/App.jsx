import { Fragment } from "react";

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
        {JSON.stringify(personalInfo)}
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

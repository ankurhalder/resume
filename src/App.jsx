import { Fragment } from "react";
import {
  PersonalInfo,
  Education,
  Skills,
  Courses,
  Projects,
  SocialMedia,
  ContactInfo,
} from "../components";
import {
  personalInfo,
  education,
  skills,
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
        <Education education={education} />
        <Skills skills={skills} />
        <Courses courses={courses} />
        <Projects projects={projects} />
        <SocialMedia socialMedia={social} />
        <ContactInfo contact={contact} />
      </div>
    </Fragment>
  );
}

export default App;

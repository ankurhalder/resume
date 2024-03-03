import { Fragment } from "react";
import {
  PersonalInfo,
  Education,
  Skills,
  Courses,
  Projects,
  SocialMedia,
  ContactInfo,
  InternshipCard,
} from "../components";
// import {
//   personalInfo,
//   education,
//   skills,
//   courses,
//   projects,
//   internships,
//   social,
//   contact,
// } from "../data";

function App() {
  return (
    <Fragment>
      <div>
        <PersonalInfo></PersonalInfo>
        <Education></Education>
        <Skills></Skills>
        <Courses></Courses>
        <Projects></Projects>
        <InternshipCard></InternshipCard>
        <SocialMedia></SocialMedia>
        <ContactInfo></ContactInfo>
      </div>
    </Fragment>
  );
}

export default App;

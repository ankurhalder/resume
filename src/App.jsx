import { Fragment } from "react";
import { Analytics } from "@vercel/analytics/react";
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

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <Analytics />
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

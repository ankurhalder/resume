import skills from "../data/skills";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h3 className="category">{skillCategory.category}</h3>
          <ul className="skill-list">
            {skillCategory.list.map((skill, idx) => (
              <li key={idx} className="skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;

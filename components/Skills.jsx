import PropTypes from "prop-types";

const Skills = ({ skills }) => {
  return (
    <div>
      {skills.map((skillCategory, index) => (
        <div key={index}>
          <h3>{skillCategory.category}</h3>
          <ul>
            {skillCategory.list.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Skills;

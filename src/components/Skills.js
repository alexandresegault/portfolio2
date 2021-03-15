import "./Skills.css";
import { useState } from "react";

const Skills = () => {
  const [activeSkills, setActiveSkills] = useState(false);
  return (
    <div
      className="skills"
      onClick={() => {
        setActiveSkills(!activeSkills);
      }}
    >
      <div className="skills-title">
        <h2 className="grad-blue-bg-grey">Mes compétences</h2>
        <span className={activeSkills === true ? "invisible" : "show-skills"}>
          V
        </span>
      </div>
      <div className="skills-container">
        <div
          id="front-end"
          className={activeSkills === true ? "visible" : "hidden"}
        >
          <h3>
            <span className="grad-yellow">Front-End</span>
          </h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.JS</li>
          </ul>
        </div>
        <div
          id="back-end"
          className={activeSkills === true ? "visible" : "hidden"}
        >
          <h3>
            <span className="grad-yellow">Back-End</span>
          </h3>
          <ul>
            <li>Node.JS</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

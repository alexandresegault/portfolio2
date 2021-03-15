import "./Home.css";
import { useState } from "react";

import linkedin from "../Images/linkedin.png";
import github from "../Images/signe-github.png";

const Home = () => {
  const [sideSelected, setSideSelected] = useState(false);
  const [teamSelected, setTeamSelected] = useState(false);
  const showTeamProject = () => {
    setSideSelected(false);
    setTeamSelected(true);
  };
  const showSideProject = () => {
    setSideSelected(true);
    setTeamSelected(false);
  };
  return (
    <div className="home">
      <div className="title">
        <h1 className="grad-blue-bg-white">Alexandre Segault</h1>
        <h2 className="typewriter-title">Développeur Web</h2>
      </div>
      <div className="contact">
        <div className="btn-contact github">
          <img src={github} className="logo" alt="" />
          <p>
            <a href="https://github.com/alexandresegault" target="blank">
              Github
            </a>
          </p>
        </div>
        <div className="btn-contact linkedin">
          <img src={linkedin} className="logo" alt="" />
          <p>
            <a
              href="https://www.linkedin.com/in/alexandresegault/"
              target="blank"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
      <div className="projects-btn">
        <div className="project-btn" onClick={showTeamProject}>
          <p className={teamSelected === true ? "grad-yellow" : ""}>
            Team Projects
          </p>
        </div>
        <div className="project-btn" onClick={showSideProject}>
          <p className={sideSelected === true ? "grad-yellow" : ""}>
            Side Projects
          </p>
        </div>
      </div>
      <div className="projects">
        {teamSelected === true ? (
          <div className="project-container">
            <a
              href="https://gijix.github.io/CodeMeMore-project-1-Cocktail/"
              target="blank"
            >
              <div className="shakeItYourself project-box"></div>
            </a>
            <a
              href="https://github.com/WildCodeSchool/remote-js-202011-froggy-devs/tree/dev"
              target="blank"
            >
              <div className="froggyDays project-box"></div>
            </a>
            <a href="https://github.com/WildCodeSchool/remoteFR-R2dwild-P3-vracmini-front/tree/dev">
              <div className="minimal project-box"></div>
            </a>
          </div>
        ) : sideSelected === true ? (
          <div className="project-container">
            <a
              href="https://alexandresegault.github.io/calculatrice/"
              target="blank"
            >
              <div className="calculatrice project-box"></div>
            </a>
            <a
              href="https://alexandresegault.github.io/warGame/"
              target="blank"
            >
              <div className="wargame project-box"></div>
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;

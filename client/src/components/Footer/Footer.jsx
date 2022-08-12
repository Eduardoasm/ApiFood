import React from "react";
import linkedin from "../../images/linkedin.blanco.png";
import github from "../../images/GitHub-Simbolo1.jpg";

export default function Footer() {

  return (

    <div className="containerInfo">
      <div className="info">
        <h4 className="copyR">Developed by Eduardo Sequeira</h4>
        <a href="https://www.linkedin.com/in/eduardo-sequeira-4502bb244/" target="_blank">
            <img className="linkedIn" src={linkedin} alt="img"/>
        </a>
        <a href="https://github.com/Eduardoasm" target="_blank">
        <img className="gitHub" src={github} alt="img" />
        </a>
      </div>

      <h4>Copyright © 2022</h4>
    </div>

  );
}



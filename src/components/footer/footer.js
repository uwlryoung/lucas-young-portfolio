import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;

export default function footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/uwlryoung"
        rel="noreferrer"
        target="_blank"
        className="icons"
      >
        {github}
      </a>
      <a
        href="https://www.linkedin.com/in/younglucas/"
        rel="noreferrer"
        target="_blank"
        className="icons"
      >
        {linkedIn}
      </a>
    </div>
  );
}

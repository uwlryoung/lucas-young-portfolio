import React from "react";
import headshot from "../../assets/images/headshot.png";

export default function About() {
  return (
    <div className="m-4 info-section">
      <h2>About</h2>
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-3">
            <img id="headshot" src={headshot} alt="headshot"></img>
          </div>
          <p className="col">
            Hi! I'm Lucas Young (uwlryoung), a Young professional based in Washington, DC embarking on a career transition into the field of web development! Prior to delving into web development, I spent seven years in Japan, where I taught English through the <a href="https://jetprogramusa.org/" rel="noreferrer" target="_blank">JET Program</a>. Upon my return to the US, I furthered my engagement with Japanese culture by working as a JET Program Coordinator at the Japanese Embassy. It was during this time that my involvement with the JET Program's online application system, coupled with my prior self-study of programming, ignited my passion for web development. I aspire to not only become a proficient full-stack web developer but also to potentially oversee the management of the JET Program's application systems in the future. With the skills I have gained from the George Washington (GW) Coding Bootcamp, I am ready to become a full-stack web developer, with the ambition to find work in web development that also utilizes my international experience and love of education and entertainment, and does something good for the world.
          </p>
        </div>
      </div>
    </div>
  );
}

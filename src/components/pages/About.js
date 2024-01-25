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
            Hi! I'm Lucas Young (uwlryoung), a Young professional based in Washington, DC embarking on a career transition into the field of web development! Prior to delving into web development, I spent seven years in Japan, where I taught English through the <a href="https://jetprogramusa.org/" rel="noreferrer" target="_blank">JET Program</a>. After my time in Japan, I returned to the US to work at the Japanese Embassy as a JET Program Coordinator. Working with the JET Program's online application system inspired me to study web development, and I aspire to not only become a proficient full-stack web developer but also to potentially oversee the management of the JET Program's application systems in the future. With the skills I have gained from the George Washington (GW) Coding Bootcamp, I aim to become a full-stack web developer, with the ambition to find work in web development that also utilizes my international experience and love of education and entertainment.
          </p>
        </div>
      </div>
    </div>
  );
}

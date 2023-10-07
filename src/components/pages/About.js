import React from "react";
import headshot from "../../assets/images/headshot.png";

export default function About() {
  return (
    <div class="m-4">
      <h2>About</h2>
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-3">
            <img id="headshot" src={headshot} alt="headshot"></img>
          </div>
          <p className="col">
            Lucas Young (uwlryoung), is a Young professional based in Washington, DC embarking on a career transition into the field of web development. Prior to delving into the world of web development, Lucas spent seven enriching years in Japan, where he dedicated himself to teaching English through the <a href="https://jetprogramusa.org/" rel="noreferrer" target="_blank">JET Program</a>. After his time in Japan, he returned to the US to work at the Japanese Embassy as a JET Program Coordinator. Working with the JET Program's online application system inspired him to study web development, and he aspires to not only become a proficient full-stack web developer but also to potentially oversee the management of the JET Program's application systems in the future. With the skills he has gained from the George Washington (GW) Coding Bootcamp, he aims to become a fullstack web developer, with the ambition to find work in web development that also utilizes his international experience and love of education and entertainment.
          </p>
        </div>
      </div>
    </div>
  );
}

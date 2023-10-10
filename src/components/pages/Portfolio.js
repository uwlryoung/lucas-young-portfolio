import React from "react";
import Accordion from "react-bootstrap/Accordion";
import characterCreator from "../../assets/images/character-creator.png";
import movieGiphy from "../../assets/images/movie-giphy.png";
import readMeGenerator from "../../assets/images/readme-generator.png";
import weatherForecaster from "../../assets/images/weather-forecaster.png";
import codingQuiz from "../../assets/images/coding-quiz.png";
import jate from "../../assets/images/jate.png";
import snsApi from "../../assets/images/sns-api.png";
import techBlog from "../../assets/images/tech-blog.png";
import employeeTracker from "../../assets/images/employee-tracker.png";
import ecommerceDb from "../../assets/images/ecommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const github = <FontAwesomeIcon icon={faGithubSquare} />;

export default function Portfolio() {
  return (
    <div className="m-4 info-section">
      <h2>Portfolio</h2>
      <Accordion className="acc-text">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
{/* Fullstack Web Apps --------------------------------------------------------- */}
            <span className="acc-header">Fullstack Web Apps</span>
          </Accordion.Header>
          <Accordion.Body>
  {/* Character Creatornator ----------------------------------------------------- */}
            <div className="container-fluid">
              <div className="row border-bottom pb-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Character Creatornator</h4>
                  <a
                    href="https://intense-taiga-65507-7eac3b308146.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={characterCreator}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/Z-Alfadl/Character-Creator"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    Create your own characters, giving them traits and a
                    backstory. Comment on other user's characters
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>SQL</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>Handlebars.js</li>
                    <li>HTML / CSS / JavaScript</li>
                  </ul>
                </div>
              </div>
  {/* Movie Giphy ------------------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Movie Giphy</h4>
                  <a
                    href="https://uwlryoung.github.io/movie-giphy/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={movieGiphy}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/movie-giphy"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    Search for movies and get its related information (summary,
                    actors, release date) along with gif images related to that
                    movie and its actors.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>JQuery</li>
                    <li>Bulma</li>
                    <li>OMBD & Giphy API</li>
                    <li>HTML / CSS / JavaScript</li>
                  </ul>
                </div>
              </div>
  {/* JATE ------------------------------------------------------------------------ */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>J.A.T.E. (Just Another Text Editor)</h4>
                  <a
                    href="https://boiling-gorge-54353-e992da97eda8.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={jate}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/just-another-text-editor"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A text editor that takes notes with JavaScript syntax
                    highlighting. It can be used from the browser and downloaded
                    as an app on a browser. A Progressive Web App (PWA).
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>Webpack</li>
                    <li>IndexedDb</li>
                    <li>Workbox</li>
                    <li>HTML / CSS / JavaScript</li>
                  </ul>
                </div>
              </div>
  {/* Tech Blogsite ---------------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Tech Blogsite</h4>
                  <a
                    href="https://cms-tech-blog-1-7f60cfc438f7.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={techBlog}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/blog-site"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A blog-site for users to make posts and comment on posts.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>SQL</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>Bootstrap</li>
                    <li>Handlebars.js</li>
                    <li>HTML / CSS / JavaScript</li>
                  </ul>
                </div>
              </div>
  {/* Weather Forecaster ---------------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Weather Forecaster</h4>
                  <a
                    href="https://uwlryoung.github.io/weather-forecaster/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={weatherForecaster}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/weather-forecaster"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A Weather Dashboard to searh for the weather in different
                    cities, giving a current weather and 5-day forecast.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>OpenWeather API</li>
                    <li>HTML / CSS / JavaScript</li>
                  </ul>
                </div>
              </div>
  {/* Coding Quiz---------------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Coding Quiz</h4>
                  <a
                    href="https://uwlryoung.github.io/coding-quiz/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={codingQuiz}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/coding-quiz"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A Quiz Game to test a user's knowledge about HTML, CSS and
                    JavaScript.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>HTML / CSS / JavaScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
{/* Backend Apps --------------------------------------------------------------- */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="acc-header">Backend Projects</span>
          </Accordion.Header>
          <Accordion.Body>
  {/* Social Network API ----------------------------------------------------- */}
            <div className="container-fluid">
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                <h4>Social Network API</h4>
                  <a
                    href="https://github.com/uwlryoung/social-network-api"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={snsApi}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/social-network-api"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A backend database for a social network where you can
                    add/update/delete users, add/update/delete user thoughts,
                    add/delete thought reactions, and add/remove users as
                    friends.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>MongDb / Mongoose</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>
  {/* Readme Generator ----------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Readme Generator</h4>
                  <a
                    href="https://github.com/uwlryoung/readme-generator"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={readMeGenerator}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/readme-generator"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    Command Line Interface program to create README.md files.
                    User is given prompts to answer to generate a README.md
                    file.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>Inquirer</li>
                  </ul>
                </div>
              </div>
  {/* Employee Tracker ----------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>Employee Tracker</h4>
                  <a
                    href="https://github.com/uwlryoung/employee-tracker"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={employeeTracker}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/employee-tracker"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A backend database for a company to keep track of employees.
                    Users can interact with the databse by viewing the different
                    departments, roles, employees and add/delete/edit those
                    categories.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>SQL</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>Inquirer</li>
                  </ul>
                </div>
              </div>
  {/* E-commerce Backend ----------------------------------------------------- */}
              <div className="row border-bottom pb-3 pt-3">
                <div className="col d-flex flex-column justify-content-center">
                  <h4>E-commerce Backend</h4>
                  <a
                    href="https://github.com/uwlryoung/e-commerce-backend"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={ecommerceDb}
                      className="group-project-pic"
                      alt="project screenshot"
                    />
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <a
                    href="https://github.com/uwlryoung/e-commerce-backend"
                    rel="noreferrer"
                    target="_blank"
                    className="icons"
                  >
                    {github}
                  </a>
                </div>
                <div className="col">
                  <p>
                    A backend database for an ecommerce website where you can
                    add/update/delete products, categories, and product tags.
                  </p>
                  <ul className="tech-list">
                    {" "}
                    <span className="technologies">Technologies Used</span>
                    <li>SQL</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>Inquirer</li>
                  </ul>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="acc-header">Gists</span>
          </Accordion.Header>
          <Accordion.Body>
            <a
              href="https://gist.github.com/uwlryoung/fd8731c72200c01f8f55425c501114d8"
              rel="noreferrer"
              target="_blank"
            >
              HTML Tag Regex Tutorial
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

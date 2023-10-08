import React from "react";
import Accordion from "react-bootstrap/Accordion";
import characterCreator from "../../assets/images/character-creator.png";
import movieGiphy from "../../assets/images/movie-giphy.png";
import readMeGenerator from "../../assets/images/readme-generator.png";
import weatherForecaster from "../../assets/images/weather-forecaster.png";
import paswordGenerator from "../../assets/images/password-generator.png";
import codingQuiz from "../../assets/images/coding-quiz.png";

export default function Portfolio() {
  return (
    <div className="m-4">
      <h2>Portfolio</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="acc-header">Group Projects</span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="container-fluid">
              <div className="row">
                <h4>Character Creatornator</h4>
              </div>
              <div className="row d-flex align-items-center border-bottom pb-3">
                <div className="col">
                  <img
                    src={characterCreator}
                    className="group-project-pic"
                    alt="project screenshot"
                  />
                </div>
                <div className="col-1"></div>
                <div className="col">
                  <p>
                    Create your own characters, giving them traits and a
                    backstory. Comment on other user's characters
                  </p>
                </div>
              </div>
              <div className="row pt-3">
                <h4>Movie Giphy</h4>
              </div>
              <div className="row d-flex align-items-center border-bottom pb-3">
                <div className="col">
                  <img
                    src={movieGiphy}
                    className="group-project-pic"
                    alt="project screenshot"
                  />
                </div>
                <div className="col-1"></div>
                <div className="col">
                  <p>
                    Search for movies and get information about the movie
                    (summary, actors, release date) along with gif images
                    related to that movie and its top three actors.
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="acc-header">Solo Projects</span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="container-fluid">
              <div className="row">
                <h4>Readme Generator</h4>
              </div>
              <div className="row d-flex align-items-cente border-bottom pb-3">
                <div className="col">
                  <img
                    src={readMeGenerator}
                    className="group-project-pic"
                    alt="project screenshot"
                  />
                </div>
                <div className="col-1"></div>
                <div className="col">
                  <p>
                    Command Line Interface program to create README.md files.
                    User is given prompts to answer to generate a README.md
                    file.
                  </p>
                </div>
              </div>
              <div className="row pt-3">
                <h4>Weather Forecaster</h4>
              </div>
              <div className="row d-flex align-items-center border-bottom pb-3">
                <div className="col">
                  <img
                    src={weatherForecaster}
                    className="group-project-pic"
                    alt="project screenshot"
                  />
                </div>
                <div className="col-1"></div>
                <div className="col">
                  <p>
                    A Weather Dashboard to searh for the weather in different
                    cities, giving a current weather and 5-day forecast.
                  </p>
                </div>
              </div>
              <div className="row pt-3">
                <h4>Password Generator</h4>
              </div>
              <div className="row d-flex align-items-center border-bottom pb-3">
                <div className="col">
                  <img
                    src={paswordGenerator}
                    className="group-project-pic"
                    alt="project screenshot"
                  />
                </div>
                <div className="col-1"></div>
                <div className="col">
                  <p>
                    A password generator. Users can specify the type of characters they would like to include, and the length of the password between 8 - 128 characters
                  </p>
                </div>
              </div>
              <div className="row pt-3">
                <h4>Coding Quiz</h4>
              </div>
              <div className="row d-flex align-items-center border-bottom pb-3">
                <div className="col">
                  <img
                    src={codingQuiz}
                    className="group-project-pic"
                    alt="project screenshot"
                  />
                </div>
                <div className="col-1"></div>
                <div className="col">
                  <p>
                    A Quiz Game to test a user's knowledge about HTML, CSS and JavaScript.
                  </p>
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

import React from "react";
import headshot from "../assets/images/headshot.png";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="container-fluid">
        <div className="row">
          <div className="col">
            <img id="headshot" src={headshot} alt="headshot"></img>
          </div>
          <div className="col-8 d-flex flex-column align-items-end justify-content-end">
            <h2 className="d-flex justify-content-center">
              Uwlryoung Portfolio
            </h2>
            <ul className="nav nav-pills d-flex justify-content-center align-items-end">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={() => handlePageChange("Home")}
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavTabs;

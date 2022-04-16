import React, { useEffect } from "react";

function Nav({ currentCategory, CategoryChange }) {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span> </span> Jonathan Martin
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => CategoryChange("About")}
              className={
                currentCategory === "About" ? "nav-link active" : "nav-link"
              }
            >
              About me
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#contact"
              onClick={() => CategoryChange("Contact")}
              className={
                currentCategory === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#project"
              onClick={() => CategoryChange("Project")}
              className={
                currentCategory === "Project" ? "nav-link active" : "nav-link"
              }
            >
              Project
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#resume"
              onClick={() => CategoryChange("Resume")}
              className={
                currentCategory === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

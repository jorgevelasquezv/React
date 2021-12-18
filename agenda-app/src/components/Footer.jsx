import React from 'react'

import github from '../assets/github.png'

const Footer = () => {
    return (
      <div className="text-center">
        <nav
          className="navbar navbar-dark"
          style={{ backgroundColor: "#FE642E" }}
        >
          <div className="container-fluid  d-flex justify-content-center">
            <p className="text-white text-center col-12">
              Jorge Velasquez &copy; {new Date().getFullYear()}
            </p>
            <p className="text-white text-center col-12">
              Agenda creada usando React con reducer y persistencia de datos en
              local storage
            </p>
            <a
              href="https://github.com/jorgevelasquezv/React/tree/main/agenda-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={github} alt="Github" style={{ maxWidth: "30px" }} />{" "}
            </a>
          </div>
        </nav>
      </div>
    );
}

export default Footer
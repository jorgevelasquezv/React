import React from 'react'

import github from '../assets/github.png'

const Footer = () => {
    return (
      <div className="text-center">
        <nav
          className="navbar navbar-dark"
          style={{ backgroundColor: "#8BB943 " }}
        >
          <div className="container-fluid  d-flex justify-content-center">
            <p className="text-white text-center col-12">
              Jorge Velasquez &copy; {new Date().getFullYear()}
            </p>
            <p className="text-white text-center col-12">
              Login simple usando context
            </p>
            <a
              href="https://github.com/jorgevelasquezv/React/tree/main/context-router"
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
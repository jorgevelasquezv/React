import React from 'react'

import icon from '../assets/android-launchericon-48-48.png';

const Header = () => {
    return (
      <nav
        className="navbar navbar-dark border-top-0 border-end-0 border-start-0"
        style={{ backgroundColor: "#FE642E", borderBottom: "1px solid #777" }}
      >
        <div className="container-fluid">
          <p className="navbar-brand">
            <img
              src={icon}
              alt=""
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />{" "}
            Agenda Con React Reducer
          </p>
        </div>
      </nav>
    );
}

export default Header

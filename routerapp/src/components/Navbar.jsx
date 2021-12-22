import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/authTypes";

const Navbar = () => {
    const history = useHistory();

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: AuthTypes.logout });
        history.replace("/login");
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark sticky-top"
            style={{
                backgroundColor: "#850E24",
                borderBottom: "1px solid #130",
            }}
        >
            <div className="container-fluid">
                <h2 className="navbar-brand">
                    <img
                        src="/assets/esfera4.png"
                        alt=""
                        width={30}
                        height={30}
                        className="d-inline-block align-text-top"
                    />{" "}
                    DB App
                </h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                exact={true}
                                className="nav-link"
                                aria-current="page"
                                to="/mens"
                            >
                                Mens
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={"active text-black"}
                                className="nav-link"
                                aria-current="page"
                                to="/womens"
                            >
                                Womens
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName={"active text-black"}
                                className="nav-link"
                                aria-current="page"
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <NavLink
                            activeClassName={"active text-black"}
                            className="nav-link"
                            aria-current="page"
                            onClick={handleLogout}
                            to="/"
                        >
                            Logout
                        </NavLink>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

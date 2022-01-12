import React from 'react'

const Navbar = () => {
    return (
        <nav className="blue">
            <div className="nav-wrapper">
                <span className="brand-logo">
                    Calculadora Nominal
                </span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <button className="btn red waves-effect waves-ligh">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar

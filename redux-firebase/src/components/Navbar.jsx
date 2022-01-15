import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { limpiar } from '../actions/nominaActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        
        dispatch(logout());
        dispatch(limpiar());
    };
    return (
        <nav className="blue">
            <div className="nav-wrapper">
                <span className="brand-logo">Calculadora Nominal</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <button
                            onClick={handleLogout}
                            className="btn red waves-effect waves-ligh"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

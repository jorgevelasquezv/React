import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { limpiar } from '../actions/nominaActions';
import icon from '../assets/calculator_coin_dollar_money_icon.svg';

const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(limpiar());
    };
    return (
        <nav
            className="navbar navbar-dark border-top-0 border-end-0 border-start-0"
            style={{
                backgroundColor: '#2196F3',
                borderBottom: '1px solid #777',
            }}
        >
            <div className="container-fluid">
                <p className="navbar-brand">
                    <img
                        src={icon}
                        alt=""
                        width={30}
                        height={24}
                        className="d-inline-block align-text-top"
                    />{' '}
                    Calculadora Nominal
                </p>
                <div className="d-flex">
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

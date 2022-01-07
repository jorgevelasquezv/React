import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { googleLogin } from '../actions/authActions';

const LoginScreen = () => {

    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(googleLogin())
    }
    return (
        <div className="container">
            <h3>Login</h3>
            <hr />

            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input
                                id="icon_prefix2"
                                className="materialize-textarea"
                                type="text"
                                defaultValue={''}
                            />
                            <label htmlFor="icon_prefix2">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input
                                id="icon_prefix2"
                                className="materialize-textarea"
                                type="text"
                                defaultValue={''}
                            />
                            <label htmlFor="icon_prefix2">Password</label>
                        </div>
                    </div>

                    <button className="btn blue" type="submit">
                        Enviar
                    </button>

                    <hr />

                    <Link to="/register">Register in the platform</Link>
                    <br />
                    <GoogleButton onClick={handleLogin} />

                </form>
            </div>
        </div>
    );
};

export default LoginScreen;

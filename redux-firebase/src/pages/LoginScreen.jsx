import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { useLoginScreen } from '../hooks/useLoginScreen';

import '../assets/LoginRegisterScreen.css'

const LoginScreen = () => {
    const [handleChange, handleLogin, handleEmailLogin, email, password] =
        useLoginScreen();

    return (
        <div className="container mt-5 animate__animated animate__fadeInBottomRight">
            <h1>Login</h1>
            <hr />

            <div className="formulario container mt-5" >
                <form onSubmit={handleEmailLogin}>
                    <div className="mb-3">
                        <label htmlFor="icon_prefix2" className="form-label">
                            Email
                        </label>
                        <div className="row">
                            <i className="material-icons icon_prefix2 col-md-1">
                                email
                            </i>
                            <input
                                onChange={handleChange}
                                value={email}
                                name="email"
                                id="icon_prefix2"
                                className="entrada col-md-11"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="icon_prefix3" className="form-label">
                            Password
                        </label>
                        <div className="row">
                            <i className="material-icons icon_prefix3 col-md-1">
                                vpn_key
                            </i>
                            <input
                                onChange={handleChange}
                                value={password}
                                name="password"
                                id="icon_prefix3"
                                className="entrada col-md-11"
                                type="password"
                                
                            />
                        </div>
                    </div>

                    <button
                        className="btn btn-success"
                        type="submit"
                        style={{
                            backgroundColor: '#4285F4',
                            borderColor: '#4285F4',
                        }}
                    >
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

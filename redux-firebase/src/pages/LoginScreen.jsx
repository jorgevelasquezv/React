import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { useLoginScreen } from '../hooks/useLoginScreen';

const LoginScreen = () => {
    const [handleChange, handleLogin, handleEmailLogin, email, password] =
        useLoginScreen();

    return (
        <div className="container animate__animated animate__fadeInBottomRight">
            <h3>Login</h3>
            <hr />

            <div className="row container">
                <form onSubmit={handleEmailLogin} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input
                                onChange={handleChange}
                                value={email}
                                name="email"
                                id="icon_prefix2"
                                className="materialize-textarea"
                                type="text"
                            />
                            <label htmlFor="icon_prefix2">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input
                                onChange={handleChange}
                                value={password}
                                name="password"
                                id="icon_prefix3"
                                className="materialize-textarea"
                                type="password"
                            />
                            <label htmlFor="icon_prefix3">Password</label>
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

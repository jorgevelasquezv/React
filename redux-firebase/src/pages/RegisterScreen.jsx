import { Link } from 'react-router-dom';
import { useRegisterScreen } from '../hooks/useRegisterScreen';

const RegisterScreen = () => {
    const [handleChange, handleRegister, email, username, password, password2] =
        useRegisterScreen();

    return (
        <div className="container animate__animated animate__fadeInBottomRight">
            <h3>Register</h3>
            <hr />

            <div className="row container">
                <form onSubmit={handleRegister} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input
                                onChange={handleChange}
                                value={email}
                                id="icon_prefix2"
                                className="materialize-textarea"
                                type="email"
                                name="email"
                            />
                            <label htmlFor="icon_prefix2">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">
                                assignment_ind
                            </i>
                            <input
                                onChange={handleChange}
                                value={username}
                                id="icon_prefix3"
                                className="materialize-textarea"
                                type="text"
                                name="username"
                            />
                            <label htmlFor="icon_prefix3">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input
                                onChange={handleChange}
                                value={password}
                                id="icon_prefix4"
                                className="materialize-textarea"
                                type="password"
                                name="password"
                            />
                            <label htmlFor="icon_prefix4">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input
                                onChange={handleChange}
                                value={password2}
                                id="icon_prefix5"
                                className="materialize-textarea"
                                type="password"
                                name="password2"
                            />
                            <label htmlFor="icon_prefix5">
                                Confirm Password
                            </label>
                        </div>
                    </div>

                    <button className="btn blue" type="submit">
                        Enviar
                    </button>

                    <hr />

                    <Link to="/login">Login to your account</Link>
                </form>
            </div>
        </div>
    );
};

export default RegisterScreen;

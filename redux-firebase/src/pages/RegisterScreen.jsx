import { Link } from 'react-router-dom';
import { useRegisterScreen } from '../hooks/useRegisterScreen';

const RegisterScreen = () => {
    const [handleChange, handleRegister, email, username, password, password2] =
        useRegisterScreen();

    return (
        <div className="container mt-5 animate__animated animate__fadeInBottomRight">
            <h3>Register</h3>
            <hr />

            <div className="mt-5">
                <form onSubmit={handleRegister} className="col s12">
                    <div className="mb-3">
                        <label
                            htmlFor="icon_prefix2"
                            className="form-label mb-3"
                        >
                            Email
                        </label>
                        <div className="row mb-3">
                            <i className="material-icons prefix col-md-1">email</i>
                            <input
                                onChange={handleChange}
                                value={email}
                                id="icon_prefix2"
                                className="col-md-8"
                                type="email"
                                name="email"
                            />
                        </div>
                        <label
                            htmlFor="icon_prefix3"
                            className="form-label mb-3"
                        >
                            Username
                        </label>
                        <div className="row mb-3">
                            <i className="material-icons prefix col-md-1">
                                assignment_ind
                            </i>
                            <input
                                onChange={handleChange}
                                value={username}
                                id="icon_prefix3"
                                className="col-md-8"
                                type="text"
                                name="username"
                            />
                        </div>

                        <label
                            htmlFor="icon_prefix4"
                            className="form-label mb-3"
                        >
                            Password
                        </label>
                        <div className="row mb-3">
                            <i className="material-icons prefix col-md-1">
                                vpn_key
                            </i>
                            <input
                                onChange={handleChange}
                                value={password}
                                id="icon_prefix4"
                                className="col-md-8"
                                type="password"
                                name="password"
                            />
                        </div>
                        <label
                            htmlFor="icon_prefix5 "
                            className="form-label mb-3"
                        >
                            Confirm Password
                        </label>
                        <div className="row mb-3">
                            <i className="material-icons prefix col-md-1">
                                vpn_key
                            </i>
                            <input
                                onChange={handleChange}
                                value={password2}
                                id="icon_prefix5"
                                className="col-md-8"
                                type="password"
                                name="password2"
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

                    <Link to="/login">Login to your account</Link>
                </form>
            </div>
        </div>
    );
};

export default RegisterScreen;

import React from 'react'

const Footer = () => {
    return (
        <div className="text-center">
            <nav
                className="navbar navbar-dark"
                style={{ backgroundColor: "#821E24" }}
            >
                <div className="container-fluid  d-flex justify-content-center">
                    <p className="text-white text-center col-12">
                        Jorge Velasquez &copy; {new Date().getFullYear()}
                    </p>
                    <p className="text-white text-center col-12">
                        Aplicacion tarjetas dragon ball usando React router, custom hook, context y reducer 
                    </p>
                    <a
                        href="https://github.com/jorgevelasquezv/React/tree/main/routerapp"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            src="/assets/github.png"
                            alt="Github"
                            style={{ maxWidth: "30px" }}
                        />{" "}
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Footer
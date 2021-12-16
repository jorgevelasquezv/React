import React from 'react'

const Footer = () => {
    return (
        <div className="text-center">
            <nav
                className="navbar navbar-dark"
                style={{ backgroundColor: '#2963E8' }}
            >
                <div className="container-fluid  d-flex justify-content-center">
                    <p className="navbar-brand text-center">
                        Jorge Velasquez &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </nav>
        </div>
    );
}

export default Footer
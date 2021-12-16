import React from 'react'
import path from '../assets/49132_search_images_icon.svg';

const Header = () => {
    return (
        <>
            <nav
                className="navbar navbar-dark sticky-top"
                style={{ backgroundColor: '#2963E8' }}
            >
                <div className="container-fluid">
                    <p className="navbar-brand">
                        <img
                            src={path}
                            alt=""
                            width={30}
                            height={24}
                            className="d-inline-block align-text-top"
                        />{' '}
                        Gallery Images App
                    </p>
                </div>
            </nav>
        </>
    );
}

export default Header

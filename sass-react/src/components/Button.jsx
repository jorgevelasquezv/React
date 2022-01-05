import React from 'react';

const Button = ({ type, text }) => {
    return (
        <>
            <button className={type}> {text}</button>
        </>
    );
};

export default Button;

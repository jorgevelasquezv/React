import React, { useState } from "react";
import PropTypes from "prop-types";

// Api Key kCjiJGPKXtA8tJPZU1h3Ut8FCCfJ0h
// https://api.giphy.com/v1 /clips/search?api_key=kCjiJGPKXtA8tJPZU1h3Ut8FCCfJ0h&q=cats&limit=5

export const GifAdd = ({ setCategories, categories }) => {
    const [inputValue, setInputValue] = useState("");
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        peticion(inputValue);
        // console.log(categories);
    };

    const peticion = async (value) => {
        const res = await fetch(
            `https://api.giphy.com/v1 /clips/search?api_key=kCjiJGPKXtA8tJPZU1h3Ut8FCCfJ0h&q=${value}&limit=10`
        )
        const gifs = await res.json()
        console.log(gifs)
        // setCategories(gifs)
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label form="search">Search </label>
            <input
                type="text"
                className="search"
                value={inputValue}
                onChange={handleOnChange}
            />
        </form>
    );
};

GifAdd.prototype = {
    setCategories: PropTypes.func,
};

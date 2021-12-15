import React, { useCallback, useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState('');

    const peticion = useCallback(
        async () => {
        const key = 'client_id=ha_UI48FlRZCYustsS-lUcCdIo6TLtRoOKwr8_YMkj4';
        let route = `https://api.unsplash.com/photos/?${key}`;

        if (input !== '') {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
        }
        const res = await fetch(route);
        const data = await res.json();
        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }
    }, [input]
    )

    

    useEffect(() => {
        peticion();
    }, [peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        setInput(text);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row m-2">
                    <label className="col-11 w-75 m-2">
                        Buscar: <input type="text" name="inputText" className="w-100 m-2"/>
                    </label>
                    <button type="submit" className="col-1 m-2">
                        <span className="material-icons">search</span>
                    </button>
                </div>
            </form>
            <hr />
            <div className="row">
                {images.map((image) => {
                    return (
                        <div className="col" key={image.id}>
                            <Card img={image.urls.regular} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;

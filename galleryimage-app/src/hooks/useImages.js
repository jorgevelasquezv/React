import { useCallback, useEffect, useState } from 'react';

export const useImages = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState('');

    const peticion = useCallback(async () => {
        const key = 'client_id=ha_UI48FlRZCYustsS-lUcCdIo6TLtRoOKwr8_YMkj4';
        let route = `https://api.unsplash.com/photos/?${key}`;

        if (input !== '') {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
                input
            )}&${key}`;
        }
        const res = await fetch(route);
        const data = await res.json();
        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }
    }, [input]);

    useEffect(() => {
        peticion();
    }, [peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        setInput(text);
    };

    return [images, handleSubmit]
};

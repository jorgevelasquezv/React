import React from 'react';
import { useImages } from '../hooks/useImages';
import Card from './Card';
import FormImages from './FormImages';


const Cards = () => {
    const [images, handleSubmit] = useImages();

    return (
        <>
            <FormImages handleSubmit={handleSubmit} />
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

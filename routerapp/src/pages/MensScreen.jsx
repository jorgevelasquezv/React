import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MensScreen = () => {
    const mens = Characters.filter((character) => character.type === "h");

    return (
        <div className="container mt-3">
            <h1>Mens Screeen</h1>
            <hr />
            <div className="row">
                {mens.map((men) => (
                    <Card key={men.id} {...men} />
                ))}
            </div>
        </div>
    );
};

export default MensScreen;

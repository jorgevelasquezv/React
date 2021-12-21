import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomensScreen = () => {
    const womens = Characters.filter((character) => character.type === "m");

    return (
        <div className="container mt-3">
            <h1>Womens Screen</h1>
            <div className="row">
                {womens.map((women) => (
                    <Card key={women.id} {...women} />
                ))}
            </div>
        </div>
    );
};

export default WomensScreen;

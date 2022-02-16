import React, { useState } from "react";
import { GifAdd } from "./components/GifAdd";
import { GifGrid } from "./components/GifGrid";

function App() {
    const [categories, setCategories] = useState([
        {
            url: "https://as2.ftcdn.net/v2/jpg/01/39/32/85/1000_F_139328557_ll5bCyU4HUlKpe1OU02K396E3UB8xXlZ.jpg",
            tittle: "Flores",
        },
    ]);

    return (
        <>
            <h1>Gif Expert App</h1>
            <GifAdd setCategories={setCategories} categories={categories} />
            <hr />
            {categories.map(({ url, tittle }, index) => (
                <GifGrid url={url} tittle={tittle} key={index} />
            ))}
        </>
    );
}

export default App;

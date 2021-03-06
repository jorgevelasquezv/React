import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";

export const useSearch = () => {
    const navigate = useNavigate();

const location = useLocation();
const { q = "" } = queryString.parse(location.search);

const [inputValue, setInputValue] = useState(q);

const [characters, setCharacters] = useState([]);

const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
};

const getCharacter = () => {
    if (inputValue.trim() !== "") {
        const value = inputValue.toLocaleLowerCase();
        const newCharacters = Characters.filter((character) =>
            character.name.toLocaleLowerCase().includes(value)
        );

        setCharacters(newCharacters);
    } else {
        setCharacters([]);
    }
};

useEffect(() => {
    getCharacter();
}, [q]);

    return [characters, inputValue, handleChange, handleSubmit]
    
}
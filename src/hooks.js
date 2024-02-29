import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import axios from "axios";

 export const useFlip = (initialVal = false) => {
    const [isFacingUp, setIsFacingUp] = useState(initialVal);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
      };

  return [ isFacingUp, flipCard ];
};

export const useAxios = (baseUrl) => {
    console.log(baseUrl)
    const [cards, setCards] = useState([]);
    
    const addCard = async (endpoint = '') => {
        try {
            console.log(endpoint);
            const url = baseUrl + (endpoint !== '' ? `/${endpoint}` : '');
            const response = await axios.get(url);
            setCards(cards => [...cards, { ...response.data, id: uuidv4() }]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return { cards, addCard };
};

//https://pokeapi.co/api/v2/pokemon/${name}/
import React, { useEffect, useState } from "react";
import './style/style.css';

type pokemon = {
    pokemon:{}
}

export default function Pokemondatos(){
    const [pokemon, setpokemon] = useState<number>(Math.floor(Math.random() * 150));
   const [PokemonImg, setpokemonImg] = useState<string>("");
   const [PokemonName, setPokemonName] = useState<string>("");

   useEffect(() => {
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) =>
            response.json())
            .then((pokemon) =>{
                setPokemonName(pokemon.name);
                setpokemonImg(pokemon.sprites.front_default)
                
            }      
            )}, [])
           
    return(
               
        <div className="pokemonlist">
            <div className="pokemon">
                 <img src={PokemonImg}  alt={PokemonName}/> 
              <p>{PokemonName}</p>
            </div>
        </div>
    );
}
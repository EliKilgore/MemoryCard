import React from "react";
import Card from "./Card";

const CardGrid = ({pokemons, handleClick}) => {
    const pokemonCards = pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
    ))
    
    return <div className="card-grid-wrapper">{pokemonCards}</div>

}

export default CardGrid
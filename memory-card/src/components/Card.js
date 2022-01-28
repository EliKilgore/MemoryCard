import React from "react";

const Card = ({ pokemon, handleClick}) => {
    
    return (
        <div className="card" onClick={() => {handleClick(pokemon.name)}}>
                <img src={pokemon.img} alt={pokemon.name} />
        </div>
    )
}

export default Card
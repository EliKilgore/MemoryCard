import React from "react";

const Header = ({score, highScore}) => {

    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className="scoreboard">
                <h2>Current Score: {score}</h2>   
                <h2>High Score: {highScore}</h2>
            </div>
        </header>
    )
}

export default Header
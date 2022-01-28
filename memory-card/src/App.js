import React, {useState} from "react";
import Header from './components/Header'
import CardGrid from "./components/CardGrid";
import pokemonArr from "./components/pokemons";
import './App.css'

function App() {
  const shuffleArr = (arr) => {
    return arr.sort((a, b) => 0.5 - Math.random())
  }

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [pokemons, setPokemons] = useState(shuffleArr(pokemonArr))
  const [clickedPokemons, setClickedPokemons] = useState([])

  const handleClick = (name) => {
    playRound(name)
    setPokemons(shuffleArr(pokemons))
  }

  const playRound = (name) => {
    if (clickedPokemons.includes(name)) {
      alert("Oh no! You lost!")
      gameOver()
    } else {
      setScore(score + 1)
      if (score >= highScore) setHighScore(score + 1)
      setClickedPokemons((prevState) => [...prevState, name])
      
      if (score === 12) {
        alert("You Won!")
        gameOver()
      }
    }
  }

  const gameOver = () => {
    setScore(0)
    setClickedPokemons([])
  }
  
return (
  <div>
      <Header score={score} highScore={highScore}/>
      <CardGrid pokemons={pokemons} handleClick={handleClick}/>
  </div>
) 
}

export default App;

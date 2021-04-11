import React, {useState, useEffect} from 'react'
import './App.css';
import Hangman from "./Hangman";

function App() {
    const [guesses, setGuesses] = useState([])
    const [misses, setMisses] = useState(0)
    const phrase = "stackoverflow and stuff"
    const guess = letter => {
        if (phrase.indexOf(letter) == -1) {
            setMisses(misses + 1)
        }
        setGuesses([...guesses, letter])
    }
    const gameOver = misses > 6

    const replaceRegex = new RegExp(`[^${guesses.join("")} ]`, 'gi')
    const hangmanLetters = phrase.replace(replaceRegex, "_")
    return (
        <div className="App">
            <Hangman misses={misses}/>

            <div className={"phrase"}>
                {hangmanLetters}
            </div>
            <div className={"alphabet"}>
                {"abcdefghijklmnopqrstuvwxyz".split("").map(letter => {
                    return <input className={"character_buttons"} type={"button"}
                                  disabled={gameOver || guesses.indexOf(letter) > -1} value={letter}
                                  onClick={() => guess(letter)}/>
                })}
            </div>
            {gameOver && <div>
                <div>You Lose</div>
                <div>Phrase: "{phrase}"</div>
            </div>}
        </div>
    );
}

export default App;

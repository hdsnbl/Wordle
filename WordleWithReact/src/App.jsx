import { useState } from 'react'
import './App.css'

class Wordle{
  constructor(){
    this.guesses = [];
    this.target = "GAMES";
  }

  getTarget() {
    return this.target;
  }
  getGuesses() {
    return this.guesses;
  }
  addGuess(guess){
    this.guesses.push(guess);
  }
  changeTarget(newTarget){
    this.target = newTarget;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [wordle = new Wordle(), updateWordle] = useState(0);
  

  return (
    <>
      <section id="center">
        <h1>Wordle</h1>
        <input placeholder='Guess a word...' onClick={updateWordle}></input>
        <div className="grid">
          <div id="letterBox">box</div>
          <div id="letterBox">box</div>
          <div id="letterBox">box</div>
          <div id="letterBox">box</div>
          <div id="letterBox">box</div>
        </div>
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App

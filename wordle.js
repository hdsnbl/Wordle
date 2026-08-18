const getTargetWord = (wordle) => wordle.targetWord;
const getGuesses = (wordle) => wordle.guesses;
const getWordle = () => new Wordle();

class Wordle {
  constructor() {
    this.targetWord = "GAMES";
    this.guesses = [];
  }

  getTargetWord(){
    return this.targetWord;
  }

  getGuesses(){
    return this.guesses;
  }

  makeGuess(guess) {
    if (guess.length !== 5) {
      console.log("Guess must be 5 letters long.");
      return;
    }
    this.guesses.push(guess);
  }

}

// function askForGuess(wordle) {
//   const guess = window.prompt("Enter your guess (5 letters):");
//   wordle.makeGuess(guess);
// }
// askForGuess(new Wordle());


const readline = require('node:readline');

// Create the interface connecting to standard input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user with a question
rl.question("What is your name? ", (answer) => {
  console.log(`Hello, ${answer}!`);
  
  // Always close the interface when done to prevent memory leaks
  rl.close();
});
rl.question("What is your name? ", function(answer) {
  console.log(`Hello, ${answer}!`);
  
  // Always close the interface when done to prevent memory leaks
  rl.close();
});
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


function getWordle() {    //Can also be written as: const getWordle = () => new Wordle();
  return new Wordle();
}

function getTargetWord(wordle) {
  return wordle.targetWord;
}

function getGuesses(wordle) {
  return wordle.guesses;
}


// console.log("%cThis is for red text", "color: red; font-size: 20px;");
// console.log("%cThis is for green text", "color: green; font-size: 20px;");
// console.log("%cThis is for grey text", "color: grey; font-size: 20px;");
const getTargetWord = (wordle) => wordle.targetWord;
const getGuesses = (wordle) => wordle.guesses;
const getWordle = () => new Wordle();
const input = require('readline-sync');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

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
      return false;
    }
    this.guesses.push(guess);
    return true;
  }

  changeTargetWord(newWord) {
    if (newWord.length !== 5) {
      console.log("Target word must be 5 letters long.");
      return;
    }
    this.targetWord = newWord;
  }
}

function askForGuess(wordle) {
  if (wordle.guesses.length >= 6) {
    console.log("You've reached the maximum number of guesses (6). Game over!");
    return;
  }
  let guess = input.question('Enter your guess (5 letters):');
  //console.log(`Your guess is: ${guess}!`);
  if(wordle.makeGuess(guess)){
    if(displayGuesses(wordle)){
      return; // Exit the function if the user has guessed the word correctly
    }
  }
  return askForGuess(wordle); // Recursively ask for guesses until the program is terminated
}

function displayGuesses(wordle) {
  console.log("------------------------------");
  console.log("Your guesses so far:");
  const target = getTargetWord(wordle);
  const guesses = getGuesses(wordle);
  for(let guess of guesses){
    let correct = 0;
    console.log("------------------------------");
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i].toUpperCase();
      if (target[i] === letter) {
        console.log(`${letter} - correct position`);
        correct += 1;
        continue;
      } else if (target.includes(letter)) {
        console.log(`${letter} - correct letter, wrong position`);
      } else {
        console.log(`${letter} - not in word`);
      }
    }
    if (correct === target.length) {
      console.log("Congratulations! You've guessed the word!");
      return true;
    }
  }
  return false;
}

function newGame(){
  wordle = new Wordle();
  console.log("Would you like to change the target word? (yes/no)");
  let changeWord = input.question('Enter your choice:');
  if (changeWord === "yes") {
    let newWord = input.question('Enter the new target word (5 letters):');
    newWord = newWord.toUpperCase();
    wordle.changeTargetWord(newWord);
  } else if (changeWord === "no") {
    console.log("The target word will remain the same.");
  } else{
    console.log("Invalid choice. The target word will remain the same.");
  }
  askForGuess(wordle);
}

newGame();




// function getWordle() {    //Can also be written as: const getWordle = () => new Wordle();
//   return new Wordle();
// }

// function getTargetWord(wordle) {
//   return wordle.targetWord;
// }

// function getGuesses(wordle) {
//   return wordle.guesses;
// }


// console.log("%cThis is for red text", "color: red; font-size: 20px;");
// console.log("%cThis is for green text", "color: green; font-size: 20px;");
// console.log("%cThis is for grey text", "color: grey; font-size: 20px;");
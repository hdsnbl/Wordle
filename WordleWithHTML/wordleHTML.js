class Wordle {
  constructor() {
    this.targetWord = "GAMES";
    this.guesses = [];
  }

  getTargetWord() {
    return this.targetWord;
  }

  getGuesses(){
    return this.guesses;
  }
}

function createWordle(){
  return new Wordle();
}

const wordle = createWordle();
let numOfGuesses = 0;
let win = false;

function showAlert(){
  alert("Alert test!");
}

function submitGuess() {
  const guessInput = document.getElementById("guess-input");
  if (win) {
    alert("You've already guessed the word, play again or move on!");
    return;
  }
  if (guessInput.value.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }else if (numOfGuesses >= 5){
    alert("You have used all your guesses. The correct word was: " + wordle.getTargetWord());
    return;
  }
  wordle.guesses.push(guessInput.value.toUpperCase());

  if (checkGuess(guessInput.value.toUpperCase())) {
    alert("Congratulations! You've guessed the word!");
    const reset = document.getElementById("reset-button");
    reset.style.display = "block";
  }
  numOfGuesses++;
  guessInput.value = "";
}

function checkGuess(guess) {
  const target = wordle.getTargetWord();
  let correct = 0;
  for (let i = 0; i < guess.length; i++) {
    const letterBox = document.getElementById(`r${numOfGuesses + 1}l${i + 1}`);
    if (guess[i] === target[i]){
      letterBox.style.backgroundColor = "lightgreen";
      correct++;
    } else if (target.includes(guess[i])){
      letterBox.style.backgroundColor = "lightyellow";
    } else{
      letterBox.style.backgroundColor = "lightgray";
    }
    letterBox.textContent = guess[i];
  }
  if (correct === 5){
    win = true;
    return true;
  }
  return false;
}

function resetGame() {
  wordle.guesses = [];
  numOfGuesses = 0;
  win = false;
  const letterBoxes = document.getElementsByClassName("letterBox");
  for (let i = 0; i < letterBoxes.length; i++) {
    letterBoxes[i].textContent = "";
    letterBoxes[i].style.backgroundColor = "white";
  }
  const reset = document.getElementById("reset-button");
  reset.style.display = "none";
  const guessInput = document.getElementById("guess-input");
  guessInput.value = "";
}

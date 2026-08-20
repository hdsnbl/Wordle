
function showAlert(){
  alert("Alert test!");
}

function submitGuess() {
  showAlert();
  const element = document.getElementById("submit-guess");
  const guessInput = document.getElementById("guess-input");
  element.textContent= "Guess submitted!";

}

class container{
  constructor(){

  }
}

class Wordle {
  constructor() {
    this.targetWord = "GAMES";
    this.guesses = [];
  }
}
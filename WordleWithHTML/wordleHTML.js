
function showAlert(){
  alert("Alert test!");
}

function submitGuess() {
  //showAlert();
  const element = document.getElementById("submit-guess");
  const guessInput = document.getElementById("guess-input");
  if (guessInput.value.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }
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
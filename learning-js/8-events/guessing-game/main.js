var guess = document.getElementById("guess")
// Will generate a random number between 1 and 10
var computerNumber = Math.floor(Math.random() * 10) + 1;

// Lets us listen to the event
guess.addEventListener("input", checkGuess)

function checkGuess () {
  // If value is not a number 0 will be used instead
  // parseFloat will change the string we got from the text input into a number
  var guessNumber = parseFloat(guess.value) || 0
  if(guessNumber === computerNumber)
    alert("You are right!")
}

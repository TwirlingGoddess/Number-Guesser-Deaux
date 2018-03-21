// -------- asign stage names --------- //
var inputField = document.getElementById('enterNumber');
var formSection = document.getElementById('enterForm')
var guessButton = document.getElementById('guesser')
var clearButton = document.getElementById('clearer')
var resetButton = document.getElementById('reset-button')
var numberGuessed = document.getElementById('guessedNumber')
var guessFeedback = document.getElementById('feedback')
var minimumField = document.getElementById('minField')
var maximumField = document.getElementById('maxField')
var minAndMaxInputs = document.querySelector('article')
var minAndMaxSubmit = document.querySelector('.minMaxButton')
var randomNumber = (Math.floor(Math.random() * 100) +1);



// ------- create click events ------- //
inputField.addEventListener('keyup', enableInput)
inputField.addEventListener('click', enableInput)
clearButton.addEventListener('click', clearInput)
formSection.addEventListener('submit', matchOrNaw)
minAndMaxSubmit.addEventListener('click', maxMinAppear)


// // --------- pull the strings -------- //
function enableInput() {
  if (inputField.value.length > 0) {
    resetButton.disabled = false;
    guessButton.disabled = false;
    clearButton.disabled = false;
  } else {
    guessButton.disabled = true;
    clearButton.disabled = true;
  }
}

function matchOrNaw (event) {
    numberGuessed.innerText = (inputField.value);
    event.preventDefault();
    generateRandomNumber()
    newRandomNumber ();
    clearInput();
    enableInput();
}

// function numberRandom() {
//   if (inputField.value > randomNumber) {
//     guessFeedback.innerText = "That is too high";
//   } else if (inputField.value < randomNumber) {
//       guessFeedback.innerText = "That is too low";
//   } else {
//       guessFeedback.innerText = "BOOM!";
//       inputField.disabled = true;
//   }
// }

function clearInput() {
  inputField.value = ('');
  enableInput();
}
// ------------------------------------------phase 4

var randomMinMax = Math.floor(Math.random() * (maximumField.value - minimumField.value) + minimumField.value);
function generateRandomNumber() {
return randomMinMax;
console.log(randomMinMax);
}

function maxMinAppear(event) {
  event.preventDefault();
    // console.log(maximumField.value);
    // console.log(minimumField.value);
    // // Math.floor(Math.random() * (maximumField.value - minimumField.value) + minimumField.value);
    console.log(randomMinMax);
  // if (minimumField.length || minimumField.length > 0){
    inputField.min = minimumField.value;
    inputField.max = maximumField.value;
    inputField.disabled = false;
    generateRandomNumber()
  // }
}

function newRandomNumber() {
  if (inputField.value > randomMinMax) {
    guessFeedback.innerText = "That is too high";
  } else if (inputField.value < randomMinMax) {
      guessFeedback.innerText = "That is too low";
  } else {
      guessFeedback.innerText = "BOOM!";
      inputField.disabled = true;
  }
}

// ---------------------------------------------level up
// toggle/transform(rotate -1800deg)/translate/scale(2) to get the number to spin when the answer is correct.

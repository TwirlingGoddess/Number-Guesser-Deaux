// -------- asign stage names --------- //
var inputField = document.getElementById('enterNumber');
// var formSection = document.getElementById('enterForm')
var guessButton = document.getElementById('guesser');
var clearButton = document.getElementById('clearer');
var resetButton = document.getElementById('reset-button');
var numberGuessed = document.getElementById('guessedNumber');
var guessFeedback = document.getElementById('feedback');
var minimumField = document.getElementById('minField');
var maximumField = document.getElementById('maxField');
var minAndMaxSubmit = document.getElementById('minMaxButton');
var currentMin = document.getElementById('currentMin');
var currentMax = document.getElementById('currentMax');
var randomMinMax = Math.floor(Math.random() * (parsedMax - parsedMin + 1) + parsedMin);
var parsedMin = 1;
var parsedMax = 100;
currentRange();


// ------- create click events ------- //
minAndMaxSubmit.addEventListener('click', setMinMaxRange);
inputField.addEventListener('keyup', enableInput);
clearButton.addEventListener('click', clearInput);
guessButton.addEventListener('click', guessResults);


// // --------- pull the strings -------- //

function currentRange() {
  currentMin.innerText = parseInt(inputField.min);
  currentMax.innerText = parseInt(inputField.max);
}

function setMinMaxRange(event) {
  event.preventDefault();
  parsedMin = parseInt(minimumField.value);
  parsedMax = parseInt(maximumField.value);
  inputField.min = parsedMin;
  inputField.max = parsedMax;    
  randomMinMax = Math.floor(Math.random() * (parsedMax - parsedMin + 1) + parsedMin);
  currentRange();
  enableInput();
}

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

function guessResults(event) {
  event.preventDefault();
  var parsedInput = parseInt(inputField.value)
  numberGuessed.innerText = inputField.value;
  // clearInput();
  console.log(parsedInput);
  console.log(randomMinMax);
  if (parsedInput > randomMinMax && parsedInput < maximumField.value) {
    guessFeedback.innerText = "That is too high";
    clearInput();
  } else if (parsedInput < randomMinMax && parsedInput > minimumField.value) {
      guessFeedback.innerText = "That is too low";
      clearInput();
  } else if (parsedInput === randomMinMax) {
      guessFeedback.innerText = "HAAAAAAAYYYYYYY!!!!  That was too easy. 10 digits added in both directions. Enter a new guess.";
      parsedMin = parseInt(inputField.min - 10);
      parsedMax = parseInt(inputField.max + 10);    
      currentMax.innerText = parsedMax;
      currentMin.innerText = parsedMin;
  } else {
      alert('ENTER A VALID NUMBER BETWEEN YOUR MIN AND MAX RANGE....... PLEASE & THANK YOU!!!')
  }
}

// function blessUp() {
//   parsedMin = (inputField.min - 10);
//   parsedMax = (inputField.max + 10);    
//   randomMinMax = Math.floor(Math.random() * (parsedMax - parsedMin) + parsedMin);
//   currentRange();
//       clearInput();
//       clearMinMax();
//   return randomMinMax;
// }

function clearInput() {
  inputField.value = ('');
  enableInput();
}

function clearMinMax() {
  minimumField.value = ('');
  maximumField.value = ('');
}
// ---------------------------------------------level up
// toggle/transform(rotate -1800deg)/translate/scale(2) to get the number to spin when the answer is correct.

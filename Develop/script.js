// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var includeNumbers;
var includeSpecialCharacters;

var finalPassword = "";   // empty string

function geARandomNumber() {
  return 9;
}


function generatePassword() {
  var myNewPassword = "";   // this will be filled after finished the code of functions
  var numberOfCharacters = prompt("How many characters?")
  var includeNumbers = confirm("Do you want numbers?")


  // can add all the var in this but it would be incredibly long
  var randomNumber = getARandomNumber()
  finalPassword = finalPassword + randomNumber;
  return myNewPassword;

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// sentence += same as (sentence = sentence + sentence)
// Javascript is to write this senctence - example
// Sentence has to be a noun + verb + noun + adjective

// These variables are in the global scope
var nouns = ["car", "dog", "tree", "house"];
var verbs = ["drove", "swam", "entered", "mangled"];
var adjs = ["quickly", "easily", "happily", "eagerly"]
var sentence = "";


// My ONLY job is to generate a random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// My ONLY job is to get a random noun
function addANoun() {
  var random = generateRandomNumber(0, nouns.length - 1)
  sentence += `${nouns[random]} `
}

// My ONLY job is to get a random verb
function addAVerb() {
  var random = generateRandomNumber(0, verbs.length - 1)
  sentence += `${verbs[random]} `
}

// My ONLY job is to get a random adjective
function addAnAdjective() {
  var random = generateRandomNumber(0, adjs.length - 1)
  sentence += `${adjs[random]} `
}

function start() {
  sentence += "The ";
  addANoun();
  addAnAdjective();
  addAVerb();
  sentence += "the ";
  addANoun();

  console.log(`Here is your sentence: ${sentence}`)
}


// This is ONLY function that actually executes when Javascript loads the file
start();
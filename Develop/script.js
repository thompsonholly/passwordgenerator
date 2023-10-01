// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables

var userChoose
var passwordLength
var upperCase
var lowerCase
var number

// Password
var password = {
  passwordLength: 0,
  min: 8,
  max: 128,
}


function promptUserChoose() {
  userChoose = prompt("Please select number of characters- min length of 8, maximun length of 128")
  console.log(`Choose: ${userChoose}`);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

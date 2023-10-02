// Assignment Code
var generateBtn = document.querySelector("#generate");

var userChoose;
var passwordLength;
var upperCase;
var lowerCase;
var includeNumbers;
var includeSpecialCharacters;

var finalPassword = "";

function getARandomNumber() {
  return 9;
}

function passwordLength() {
  return min = 8, max = 20;
}

function generatePassword() {
  passwordLength = prompt("How many characters in length is your password? (Minimum of 8 characters and maximum amount of characters is 20")
  includeNumbers = confirm("Do you want numbers?")
  includeSpecialCharacters = confirm("Do you want to include special characters?")
  getARandomNumber()
  upperCase = 
  var lowerCase

}






















// Global variables












var password = "";


function addLowerCaseLetters() {
  password = password + "abc"
}

function addUpperCaseLetters() {

}


function generatePassword() {

}















// Password
var password = {
  passwordLength = 8 >= 128
  min: 8,
  max: 128,
}
// Prompting user for number of characters in password
function promptUserChoose() {
  userChoose = prompt("Please select number of characters- min length of 8, maximun length of 128")
  console.log(`User Choose: ${userChoose}`);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

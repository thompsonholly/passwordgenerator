// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordLength = 0;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var SpecialCharacters = ["!", "@", "#", "%", "^", "&", "*", "(", ")"];
var includeSpecialCharacters
var includeLowerCase
var includeUpperCase
var includeNumbers
var allCharacters = [];

var password = "";


function generatePassword() {
  allCharacters = [];
  password = "";

  console.log("Clicked the button")

  passwordLength = prompt("How many characters in length is your password? (Minimum of 8 characters and maximum amount of characters is 20")
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128")
    return;
  }

  includeNumbers = confirm("Do you want numbers?")
  if (includeNumbers)
    allCharacters = [...allCharacters, ...Numbers];

  includeSpecialCharacters = confirm("Do you want to include special characters?")
  if (includeSpecialCharacters)
    allCharacters = [...allCharacters, ...SpecialCharacters];

  includeUpperCase = confirm("Do you want to include upper case letters?")
  if (includeUpperCase)
    allCharacters = [...allCharacters, ...upperCase];

  includeLowerCase = confirm("Do you want to include lower case letters?")
  if (includeLowerCase)
    allCharacters = [...allCharacters, ...lowerCase];
  console.log(allCharacters)

  if (allCharacters.length === 0) {
    alert("Please choose one character.")
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    var rannum = generateRandomNumber(0, allCharacters.length)
    password = password + allCharacters[rannum]
  }
  return password;

}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




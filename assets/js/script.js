// Assignment code here
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%"];
var pw = [];
var minimumCount = 0;
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";
var password = "";

//functionArray object with functions methodes----------------------------------------
var functionArray = {
  getRandomNumber: function () {

    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (var i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      pw.push(numbers[i]);
    }
    console.log(pw);
    return

  },
  getRandomLower: function () {
    var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < lowerCaseLetters.length; i++) {
      console.log(lowerCaseLetters[i]);
      pw.push(lowerCaseLetters[i]);
    }
    console.log(pw);
    return

  },
  getRandomUpper: function () {
    var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (var i = 0; i < upperCaseLetters.length; i++) {
      console.log(upperCaseLetters[i]);
      pw.push(upperCaseLetters[i]);
    }
    console.log(pw);
    return

  },
  getRandomSymbol: function () {
    var symbols = '!@#$%^&*(){}[]=<>/,.';
    for (var i = 0; i < symbols.length; i++) {
      console.log(symbols[i]);
      pw.push(symbols[i]);
    }
    console.log(pw);
    return
  }

}
//Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// create thr get input function----------------------------------------
function getInput() {
  var length = parseInt(prompt("Enter number of characters desired between 8 and 128"), 10);
  if ((length >= 8) && (length <= 128)) {
    var characters = confirm("Would you like to include symbols?");
    if (characters == true) {
      minimumSpecialCharacters = functionArray.getRandomSymbol();
      console.log(minimumSpecialCharacters);
    } //------------------------
    var numbers = confirm("Would you like to include numbers?");
    if (numbers == true) {
      minimumNumbers = functionArray.getRandomNumber();
    } //-------------------------
    var uppercaseletters = confirm("Would you like to include uppercase letters?");
    if (uppercaseletters == true) {
      minimumUpperCases = functionArray.getRandomUpper();
    } //--------------------------
    var lowercaseletters = confirm("Would you like to include lowercase letters?");
    if (lowercaseletters == true) {
      minimumLowerCases = functionArray.getRandomLower();
    }//----------------------------

    for (let i = 0; i < parseInt(length); i++) {
      var randomNumberPicked = Math.floor(Math.random() * pw.length);
      password += pw[randomNumberPicked];
      //console.log (password);
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert("Invalid response. Must be a number between 8 and 128.");
  }
}

// Write password to the #password input
//function writePassword() {

function writePassword() {
  pw = [];
  getInput();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

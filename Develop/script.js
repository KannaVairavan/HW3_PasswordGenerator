// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function randomLower(){
  return String.fromCharCode(math.floor( Math.random()*26)+97);
}

function randomUpper(){
  return String.fromCharCode(math.floor( Math.random()*26)+65);
}

function randomNumber(){
  return String.fromCharCode(math.floor( Math.random()*10)+48);
}

function randomSpecialChar(){
  const specialChar = "!@#$*%+-&~|/"
  return specialChar[math.floor( Math.random()*specialChar.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

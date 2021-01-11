// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    
    var pwLength
    var pwLower
    var pwUpper
    var pwNumber
    var pwSpecialChar

    pwLength = prompt("Enter password length? Choose between 8 to 128.");
    if(!pwLength){
      pwLength = prompt("You must enter password length between 8 to 128.");
    }
    if (pwLength < 8 ) {
    // Validate user Input
      pwLength = prompt("You must enter password length between 8 to 128.");
    } 
    if(pwLength > 128) {
        // Validate user Input
      pwLength = prompt("You must enter password length between 8 to 128.");
    }
      pwLower = confirm("Will this contain lower case letters?");
      pwUpper = confirm("Will this contain upper case letters?");
      pwNumber = confirm("Will this contain number?");
      pwSpecialChar =confirm("will this contain special characters?");
    
     console.log(pwLower, pwUpper, pwNumber, pwSpecialChar, pwLength) 

    // Validtate all negative option
    if(!pwLower && !pwUpper && !pwNumber && !pwSpecialChar){
      var choice = alert ("You must choose a criteria");
      
    } 

    var password = generatePassword(pwLower, pwUpper, pwNumber, pwSpecialChar, pwLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
 
}
// generate password function
// generatePassword(lower, upper, number, spchar, length){

// }
  // Confirm function
function pwConfirm(){
   
}

function randomLower(){
  return String.fromCharCode(math.floor( Math.random()*26)+97);
}
// converts letters to uppercase 
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



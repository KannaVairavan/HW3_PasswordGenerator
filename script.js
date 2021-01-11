// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// random object.  this object contains all function names
const randomObj = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  spchar: randomSpecialChar,
}

// Write password to the #password input
function writePassword() {
    
    
    var pwLength;
    var pwAlert;
    
    
    pwLength = prompt("Enter password length? Choose between 8 to 128.");
    if(!pwLength){
      pwAlert = alert("You must enter password length between 8 to 128.");
      return;
    }
    if (pwLength < 8 ) {
    // Validate user Input
       pwAlert = alert("You must enter password length between 8 to 128.");
       return;
    } 
    if(pwLength > 128) {
        // Validate user Input
       pwAlert = alert("You must enter password length between 8 to 128.");
       return;
    }
    // Confirm lowercase letters
      var pwLower = confirm("Will this contain lower case letters?");
    // Confirm uppercase letters 
      var pwUpper = confirm("Will this contain upper case letters?");
    // Confirm numbers
      var pwNumber = confirm("Will this contain number?");
    // Confirm Special Characters
      var pwSpecialChar =confirm("will this contain special characters?");
    
     console.log(pwLower, pwUpper, pwNumber, pwSpecialChar, pwLength) ;

    // Validtate all negative option
    if(!pwLower && !pwUpper && !pwNumber && !pwSpecialChar){
      var choice = alert ("You must choose a criteria");
      return;
    } 
    // generatePassword function with prompt and confirm inputs as attributes
    var password = generatePassword(pwLower, pwUpper, pwNumber, pwSpecialChar, pwLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
 
}
// generate password function
function generatePassword(lower, upper, number, spchar, length){
  // init variable
  // check password confirm types and filter out false type
  // loop through the password length and call random function
  //assign to password variable
  var generatedPassword='';
  const typeCount=lower + upper + number + spchar;
  const typearray=[{lower}, {upper}, {number}, {spchar}].filter
  (
    item => Object.values(item)[0]
  );
  console.log ('typearray: ', typearray);
  if (typeCount === 0 ){
    return '';
  }
  for (var i = 0; i < length; i += typeCount ){
    typearray.forEach(type =>{
      const pwobj = Object.keys(type)[0]
      generatedPassword += randomObj[pwobj]();
    });
  }
  console.log(generatedPassword);
  return generatedPassword;
}
  //function to get random lowercase letter
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
//function to get random uppercase letter
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//function to get random number
function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
//function to get random special character
function randomSpecialChar(){
  const specialChar = "!@#$*%+-&~|/"
  return specialChar[Math.floor(Math.random()*specialChar.length)];
}




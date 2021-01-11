// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const randomObj = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  spchar: randomSpecialChar,
}
console.log (Math.floor(Math.random()*26)+97);
// Write password to the #password input
function writePassword() {
    
    var pwLength
    
    
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
      var pwLower = confirm("Will this contain lower case letters?");
      var pwUpper = confirm("Will this contain upper case letters?");
      var pwNumber = confirm("Will this contain number?");
      var pwSpecialChar =confirm("will this contain special characters?");
    
     console.log(pwLower, pwUpper, pwNumber, pwSpecialChar, pwLength) ;

    // Validtate all negative option
    if(!pwLower && !pwUpper && !pwNumber && !pwSpecialChar){
      var choice = alert ("You must choose a criteria");
      
    } 

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
  

function randomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
// converts letters to uppercase 
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function randomSpecialChar(){
  const specialChar = "!@#$*%+-&~|/"
  return specialChar[Math.floor(Math.random()*specialChar.length)];
}



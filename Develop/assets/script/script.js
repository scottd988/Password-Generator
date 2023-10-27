// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function to generate password
function generatePassword() {
//creates pop up for user input
var length = prompt("Enter password length (8-128 characters): ")

// verify the length
if (length < 8 || length > 128){
  alert("Invalid input. Password length must be between 8-128 characters. ");
  return '';
}
// confirm character criteria
var useLowercase = confirm("Include lowercase characters?");
var useUppercase = confirm("Include uppercase characters?");
var useNumeric = confirm("Include numeric characters?");
var useSpecial = confirm("Include special characters?");

// create variables for each character type
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specials = '!@#$%^&*()';


// Create a character set based on the user's choices and add them to one string
var characterSet = '';
if (useLowercase) characterSet += lowercase;
if (useUppercase) characterSet += uppercase;
if (useNumeric) characterSet += numbers;
if (useSpecial) characterSet += specials;

// Generate password
var password = '';
for (var i = 0; i < length; i++){
  var randomIndex = Math.floor(Math.random()*characterSet.length);
  //extracts a random character out of the users choices and adds to password
  password += characterSet.charAt(randomIndex);
}

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

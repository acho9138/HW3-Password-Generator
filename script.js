// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


let character = prompt("How many characters would you like in the password?\n(Select between 8 - 128 characters)")
let lowercase = confirm("Would you like the password to have lowercase characters?")
confirm("Would you like the password to have UPPERCASE characters?")
confirm("Would you like the password to have numerals?")
confirm("Would you like the password to have special characters?\n(e.g. !, $, &)")
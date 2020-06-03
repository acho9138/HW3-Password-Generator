// Assignment Code
let generateBtn = document.querySelector('#generate');

// Arrays to contain all the specific character codes
const lowerCharCodes = arr(97, 122)
const upperCharCodes = arr(65, 90)
const numberCharCodes = arr(48, 57)
const specialCharCodes = arr(33, 47).concat(arr(58, 64)).concat(arr(91, 96)).concat(arr(123, 126))

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Function to generate password
function generatePassword() {
  const character = prompt("How many characters would you like in the password?\n(Select between 8 - 128 characters)")
  const passwordLength = Number(character)

  // Check to see if user entered a number within the range 8-128
  if (passwordLength < 8 || passwordLength > 128 || isNaN(character)) {
    alert("Please enter a valid number")
    return ""
  }

  // Ask user for password requirements
  const lowercase = confirm("Would you like the password to have lowercase characters?")
  const uppercase = confirm("Would you like the password to have UPPERCASE characters?")
  const number = confirm("Would you like the password to have numerals?")
  const special = confirm("Would you like the password to have special characters?\n(e.g. !, $, &)")

  // Create an array with the user required characters
  let passwordArr = []
  if (lowercase) passwordArr = passwordArr.concat(lowerCharCodes)
  if (uppercase) passwordArr = passwordArr.concat(upperCharCodes)
  if (number) passwordArr = passwordArr.concat(numberCharCodes)
  if (special) passwordArr = passwordArr.concat(specialCharCodes)

  // Generate a random password string from the array with the user required characters
  const password = []
  for (let i = 0; i < passwordLength; i++) {
    let code = passwordArr[Math.floor(Math.random() * passwordArr.length)]
    password.push(String.fromCharCode(code))
  }
  return password.join('')
}

// Creates array of numbers corresponding to the specific character codes
function arr(x, y) {
  const charCodeArray = []
  for (let i = x; i <= y; i++) {
    charCodeArray.push(i)
  }
  return charCodeArray
}



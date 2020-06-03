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

  // Creates an object with the password requirements selected by user with value 0
  let criteria = {}
  if (lowercase) criteria['lower'] = 0
  if (uppercase) criteria['upper'] = 0
  if (number) criteria['number'] = 0
  if (special) criteria['special'] = 0

  // Creates an array with password requirments as the values
  let criteriaKeys = Object.keys(criteria)
  // Get a number which evenly pulls elements from all the required criteria arrays (ensures all requirements are met)
  let numCriteria = criteriaKeys.length
  const numCharCriteria = Math.floor(passwordLength / numCriteria)
  // Takes the remainder from numCharCriteria and adds to the value of a random key
  const remainder = passwordLength % numCriteria
  const criteriaIndex = randomIndex(numCriteria)

  // Assigns the number of characters which will be pulled from the password requirment arrays
  for (let index = 0; index < numCriteria; index++) {
    let key = criteriaKeys[index]
    criteria[key] = numCharCriteria
    if (index === criteriaIndex) {
      criteria[key] += remainder
    }
  }

  // Creates an array with characters from the password required arrays
  let passwordArr = []
  for (let [key, value] of Object.entries(criteria)) {
    if (key === 'lower') {
      passwordArr = passwordArr.concat(getRandomChars(lowerCharCodes, value))
    }
    if (key === 'upper') {
      passwordArr = passwordArr.concat(getRandomChars(upperCharCodes, value))
    }
    if (key === 'number') {
      passwordArr = passwordArr.concat(getRandomChars(numberCharCodes, value))
    }
    if (key === 'special') {
      passwordArr = passwordArr.concat(getRandomChars(specialCharCodes, value))
    }
  }

  // Shuffles the array and join as a string to return the password
  return shuffle(passwordArr).join('')
}

// Creates array of numbers corresponding to the specific character codes
function arr(x, y) {
  const charCodeArray = []
  for (let i = x; i <= y; i++) {
    charCodeArray.push(i)
  }
  return charCodeArray
}

// Generates array containing characters from the specified password requirement
function getRandomChars(array, numChar) {
  let chars = []
  for (let i = 0; i < numChar; i++) {
    chars.push(String.fromCharCode(array[randomIndex(array.length)]))
  }
  return chars
}

// Generates random number from 0 to a maximum number of the array length
function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

// Shuffles the values in the array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

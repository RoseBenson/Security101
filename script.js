// Array of special characters to be included in password options
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password options
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password options
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password options
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of the password"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128");
    return null;
  }

  var includeSpecialCharacters = confirm("Do you want to include special characters in password?");
  var includeNumericCharacters = confirm("Do you want to include numeric characters in passsword?");
  var includeLowerCasedCharacters = confirm("Do you want to include lowercase characters in password?");
  var includeUpperCasedCharacters = confirm("Do you want to include uppercase characters in password?");

  if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCasedCharacters && !includeUpperCasedCharacters) {
    alert("You must select at least one character type");
    return null;
  }

  return {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters
  };
}

// Function is for getting a random element from an array
function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index];
}

// Function is to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var availableCharacters = [];
  var generatedPassword = '';

  if (options.includeSpecialCharacters) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }
  if (options.includeNumericCharacters) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }
  if (options.includeLowerCasedCharacters) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUpperCasedCharacters) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(availableCharacters);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

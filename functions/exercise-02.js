function fullName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = fullName('What is your first name? ');
let lastName = fullName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`)
let readlineSync = require('readline-sync');
let firstName = readlineSync.question("What's your first name\n");
let lastName = readlineSync.question("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
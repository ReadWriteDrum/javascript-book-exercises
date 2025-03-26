let readlineSync = require('readline-sync');
let name = readlineSync.question("What's your name\n");
console.log(`Hello, ${name}!`);
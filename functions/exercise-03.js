/*
  Write a program that uses a multiply function to multiply two numbers 
  and returns the result. Ask the user to enter the two numbers, then output 
  the numbers and result as a simple equation.

  $ node multiply.js
  Enter the first number: 3.141592653589793
  Enter the second number: 2.718281828459045
  3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

let numberOne = getNumber('Enter the first number: ');
let numberTwo = getNumber('Enter the second number: ');
let product = parseFloat(numberOne * numberTwo);
console.log(`${numberOne} * ${numberTwo} = ${product}`);

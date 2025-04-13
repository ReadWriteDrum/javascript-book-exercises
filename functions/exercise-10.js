/*
  Using the code from Exercise 9, classify each variable name as either global 
  or local. For our purposes here, you may assume that the code from Exercise 9 
  is the entire program.
*/  

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// Global variables: multiply, getNumber, left, right. parseFloat, question
// Local variables: left, right, product, prompt 
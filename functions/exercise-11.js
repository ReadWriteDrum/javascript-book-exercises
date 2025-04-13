/*
  Using the code from Exercise 9, are the left and right variables on lines 1 and 
  2 the same as the left and right variables on lines 10-12? Explain your reasoning.
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

/*
  On line 6, left and right are parameters of the multiply function so they are considered
  local variables, but on lines 15 and 16 they are separate variables and defined at the 
  topmost level of the program and store the values of getNumber making them global variables. 
 */ 


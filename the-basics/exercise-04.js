// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// Because of implicit type coercion, when adding a string to number, JavaScript will convert the number into a string and concatenate them together. 
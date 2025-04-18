/*
  Write a function that logs whether an integer is between 0 and 50 (inclusive), 
  between 51 and 100 (inclusive), greater than 100, or less than 0.
*/

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0.`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50.`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100.`);
  } else {
    console.log(`${number} is greater than 100.`);
  }
}

  console.log(numberRange(-1));
  console.log(numberRange(15));
  console.log(numberRange(62));
  console.log(numberRange(3456));
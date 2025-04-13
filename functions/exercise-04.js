// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');


/*
  Nothing logs to the console because the return statement terminates
  the function before it can log anything.
*/  
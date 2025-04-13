// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

/* 
  The code will output Hello in the place of bar followed by undefined 
  on the next line because a second argument wasn't invoked in the place for qux. 
*/  
// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

/*
  The code will output 42 then 3.1415 on the following line, but won't output
  2.718 because the function only has two parameters.
*/
// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* Even though this program is using two constants with the same variable name, it will not
produce an error because line 5 is within block scope and hidden from line 3 which is in 
global scope. They are treated as separate variables. */
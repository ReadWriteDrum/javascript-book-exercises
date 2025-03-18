// Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// What does this program log to the console? Why?

/* 
  This program logs bar to the console because foo was initialized as 'bar' 
  in the global scope and is referenced outside of the block with console.log.
*/  
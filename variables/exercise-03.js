
// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

/*
  A reference error would occur saying foo is not declared. Since foo is declared 
  inside the block, it only has block scope and can't be referenced outside the block.
*/  
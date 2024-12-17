function combine(a: string, b: number): string {
  return a + b;
}

let result = combine("hello", 5);
console.log(result); // Output: "hello5"

//This is incorrect in some context, because if you expect the number to be converted to a string, it works as expected.
//However, if you expect a different behavior, such as an error, it can be problematic.
//The function signature clearly states that it returns a string, but it also performs an implicit type coercion
//that might not be what you intended.
//In other languages, there may be more explicit type checking or error handling, and the error would be caught at compile time.
//However, in TypeScript, it will compile and run without an error, leading to unexpected behavior in runtime.
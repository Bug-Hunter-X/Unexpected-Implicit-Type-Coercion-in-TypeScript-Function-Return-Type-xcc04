function combine(a: string, b: number): string {
  return a + b.toString(); // Explicitly convert number to string
}

let result = combine("hello", 5);
console.log(result); // Output: "hello5"

//Alternatively, you could use a type guard to handle the situation where you may not want to convert the number to a string.
function combine2(a: string, b: number): string | number {
  if (typeof b === 'number') {
    return a + b.toString();
  } else {
    return b;
  }
}
let result2 = combine2("hello", 5);
console.log(result2); // Output: "hello5"
let result3 = combine2("hello", "world");
console.log(result3); //Output: world
//This approach is more robust and less prone to unexpected behavior.
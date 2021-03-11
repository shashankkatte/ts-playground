// Lets look at this function to add two numbers
//  The moment you type this function without the body, and add the arguments a and b
// TypeScript warns you that a,b are of type any
//  So lets annotate bot a and b as numbers
// Also you add a : and annotate return type which is also a number

const add = (a: number, b: number): number => {
  return a + b;
};

// The moment you annotate the return value type of function, TypeScript looks at the code inside the function body to make sure you are returning the same type if not, it duly gets angry and shows a red swiggly line.

// IMPORTANT! TypeScript can only check what the end return value type is in the function but NOT your logic. So if you have the logic to parse and translate Shakespere to rench but in the end return number 0. TypeScript says all is A-OK. Getting the logic correct is on you!

// Now in the above example annotating return type is not needed as TypeScript infers the return type based on type of argument. However we ALWAYS!ALWAYS!ALWAYS will ad return type annotation. here's why: take a look and figure whats wrong?

const subtract = (a: number, b: number) => {
  a - b;
};

//  In the function above syntactically its a valid function for TypeScript with annotated arguments as numbers, you do some operation but you return nothing.
// so TypeScript invers that return type is void, since you are not returning anything.

// However logically, we know its a bug and TypeScript being the helpful friend didn't help!
// How ever if we make it a practice to always add a return type annotation, TypeScript will remind us of returning from functions when we forget.

//  a few more variations of function annotations syntax

//  lets look at plain old JS function
function divide(a: number, b: number): number {
  return a / b;
}

//  also applies to anonymous functions assined to a variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

//  one last scenario, this function doesnt return anuything so we duly annotate the return type as void.
const logger = (message: string): void => {
  console.log(message);
};

// Note: Technically a function with return type of void can return a null or undefined. but as explained earlier the main intent of adding annotation to return type is to make sure we dont forget and dont screw up the logic

// One last type we have to discuss
// Look at this function that throws error
// Technically this function when you throw an error function doesnt return anything so to indicate that we annotate the return type as never
const throwError = (message: string): never => {
  throw new Error(message);
};

//  the return type never means we are never really gonna reach the end of this function, we will never execute the function completely at some point in time we throw error and exit function early without returning a value

// This is a corner case we will rarely have this scenario. mostly you have functions as below where you always return some type or void.

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

//  thats it for functions here! get back to the main README.md to continue.

/* Here's a variable declaration that has a type annotation. Here : and the word after it (number) is the type annotation
let apples: number = 5; */

/* This syntax is pretty common in majority of Typescript projects you might work with
 Here we are telling Typescript that we will only assign values of type number to variable apples.
If we ever assign something else... show us an error. */

// Now if you try and assign true it will yell at you
apples = true;

// Lets look at some other basic type annotations
let speed: string = 'fast';
let hasName: boolean = true;

/* here's interesting. Here the type and value are of same name. It's not uncommon to see such code in typescript. I know its wierd to wrap your head around but you'll be OK as we learn more */

let wierdStuff: null = null;

//  also here's another
let globalPeace: undefined = undefined;

//  Here are built in objects
let now: Date = new Date();

//  Array, here colors is a type of array of strings
let colors: string[] = ['red', 'green', 'blue'];

/* one of the confusing sytaxes in Typescript to get used to is, when we are actually declaring an array and when we are just indicating a type of array. Practice makes it easy. */

//  likewise this is an exaple where luckyNumbers is of type : array of numbers
let luckyNumbers: number[] = [1, 3, 13, 39, 99];

// array of booleans
let alternateTruths: boolean[] = [true, true, false];

// Type annotation with classes

/* I know the example below feels twisted but you'll see this all the while as its convention.
We usually use Capital letter C Car for class and we are creating an object small c car of type Car (Try saying that 10 times ...lol. If you think this is crazy wait till you see next one.) */

class Car {}
let car: Car = new Car();

// Object literal.. take a look

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

/* So here all we are doing is creating an object literal point which has properties x and y, each of type number. Do note that we use ; to seperate types */

// Function
// Here's a normal JS arrow function

const logNumber = (i) => {
  console.log(i);
};

/* Annotating function basically meants we are telling Typescript what vales the function takes and what vales it returns along with type */

const logNumberts: (i: number) => void = (i) => {
  console.log(i);
};

//  I know... this is really nasty stnax
// where does the annotation end and where does the function begin? right?

// Everything on the right side of = is the actual function

/******************************************/

//  so then when do we use annotations?
// 1. Function that returns the 'any' type

const json = '{"x": 10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

// If you mouse over cordinates above you will see that Typescripy thinks that corordinates is of type 'any'.
// TypeScript just cannot predict what the JSON.Parse() will return as it depends on whats between {}.
// So when ever TypeScript cant infer it convenienty says 'any'. Read more about any type in README.md

// To fix this we add annotation for coordinates (note I have slightly diff variables names to demo this here)

const json1 = '{"x": 10, "y":20}';
const coordinates1: { x: number; y: number } = JSON.parse(json1);
console.log(coordinates1); // {x:10, y:20}

//  now if you mouse over you'll see the proper type annotation on corordinates1


//  2. When we declare variable on one line and initialize on another



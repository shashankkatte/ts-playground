//  Here's an array of strings
const carMarkers = ['ford', 'ferrari', 'bmw'];

//  If you hover over carMakers you will see its type : array of strings. Type Inference in action.

//  if we want to be explicit about it we can always annoate it

const carMakers1: string[] = ['ford', 'ferrari', 'bmw'];

//  we would want to use this explicit annotation when we initialize an empty array in our app
const carMakers3 = [];

//  With this example above you'll see that type is of 'any[]' type which means TypeScript doesnt have enough information to infer the Type on its own

//  It is a good to always annotate in such scenarios
const carMakersr: string[] = [];

// We can also put complex object inside arrays
const dates = [new Date(), new Date()];

//  if you hover over dates it tells you that its an array of instastances of dates

// Yes, we can have two dimentional arrays
const carsByMake = [['F150'], ['Enzo'], ['M3']];

// Again we dont have to add the annotation in above case, as its inferred but if we have to for empty array initializations
const carsByMake1: string[][] = [];

/****  Why do we need Typed Arrays? ****/
/* Go back to the README.md for introduction and come back here */

// 1. Help with inference when extracting values
const car = carMakers1[0];

//  If you hover over car you can see that type inference has already come into play.
// since carMakers1 is an array of strings, TypeScript know that when you pull one element its of type string.

// likewise for pop method, inference is in play
const myCar = carMakers1.pop();

//  2. Prevent incompatible values in Array

//  If we try to push a number into carMakers1 which is an array of string, TypeScript will protest
carMakers1.push(100);

// 3. We can get help with `map`, `foreach`, `reduce` functions
// Here since typescript knows that car is of string tupe we get auto complete suggestions when we return car like touppercase.
carMakers1.map((car: string): string => {
  return car.toUpperCase();
});

// 4. Flexible arrays can still contain multiple different types.
// This is an array with important date values some of them are strings and some strings
const importantDates = [new Date(), '2020-10-10'];

// Notice how if you hover over importantDates, type inference shows its  an array of types which are string or Date type

//  Now if you are thinking of initializing it just with date object and later pusing a string, you better annotate it as

const importantDates1: (Date | string)[] = [new Date()];

//  Now if you hover over, it shows that its a type of Array that can take both string and date type, although its cureently initialed with Date type only.

//  So now we can do this and its valid
importantDates1.push('2030-10-10');
importantDates.push(new Date());

//However if you try to push in a number it will cry foul!
importantDates1.push(40);

// Thats pretty much about Arrays. Lets head back to README.md

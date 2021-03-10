// Here's a variable declaration that has a type annotation. Here : and the word after it (number) is the type annotation
let apples: number = 5;

//  This syntax is pretty common in majority of Typescript projects you might work with
//  Here we are telling Typescript that we will only assign values of type number to variable apples. 
// If we ever assign something else... show us an error.

// Now if you try and assign true it will yell at you
apples = true;

// Lets look at some other basic type annotations
let speed: string = 'fast';
let hasName: boolean = true;

// here's interesting. Here the type and value are of same name. It's not uncommon to see such code in typescript. I know its wierd to wrap your head around but you'll be OK as we learn more

let wierdStuff: null = null;

//  also here's another
let globalPeace: undefined = undefined;

//  Here are built in objects
let now: Date = new Date();
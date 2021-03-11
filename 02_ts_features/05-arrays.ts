//  Here's an array of strings
const carMarkers = ['ford', 'ferrari', 'bmw'];

//  If you hover over carMakers you will see its type : array of strings. Type Inference in action.

//  if we want to be explicit about it we can always annoate it

const carMarkers1: string[] = ['ford', 'ferrari', 'bmw'];

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

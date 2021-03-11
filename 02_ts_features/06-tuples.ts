// Lets create an object to represent a drink or beverage
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//  This is pretty easy to understand as plain Javascript Object

//  Lets try to represent this with a tuple, say pepsi, basically take the values and put it in same order
const pepsi = ['brown', true, 40];

//  you can hover over pepsi and see the type inference kick in
// The issue here is we can change the order of elements and no one will stop us, and we break things! or worse as developrs we have to memorise the order

//  TypeScript to the rescue
//  her's how we annotate and use a tuple

const pepsi1: [string, boolean, number] = ['brown', true, 40];

// Now this makes it a tuple vs an array
//  if we try messing up the order now, We get yelled at
pepsi1[0] = 40;

// Yes! there is a better way for this too and its called type alias

// This doesnot create an array, its just creating an idea of a tuple
type Drink = [string, boolean, number];

//  now we can use it
const pepsi2 : Drink = ['brown', true, 40];

//  now we can use it for multiple drinks
const sprite : Drink = ['clear', true, 35];
const tea : Drink = ['brown',false, 0]

//  So we have abstracted the idea, the peoperties of a drink and we can use the type alias to create any other drink



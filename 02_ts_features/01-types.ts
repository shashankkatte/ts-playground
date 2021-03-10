// Example 1
// If you hover over today it shows that its of type date
const today = new Date();

// so when you type today and . Typescript give you a bunch of methods you can use on it as its of date type
today.getMonth();

// If you'd try to attach a method that isnt of type date Typescript will freakout with a red swiggly asking you to fix it
today.changeMillenium();

//  Example 2
//  lets create a plain JS object
const person = {
  age: 20,
};
// now if we hover over person it shows the entire definition of this object with age:20. Thats because we havent given any shortened name to thios object

// Lets look at another example, lets define a plain JS class
class Color {}

//  lets create an object from this class
const red = new Color();
 /* now if you hover over red it instantly shows you that red is of type color. So red has access to all the properties and methods that type color has */

 /* now if you try to use them with a red and . we wont get any autosuggetion as the class is empty it has no properties or methods associated for type color. How ever if you do go ahead trying to attach a method it will yell at you proptly with a swiggy line */
red.someWierdMethod();

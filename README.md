# TypeScript Playground

A collection of TypeScript Apps, code snippets and exercises for anyone to understand TypeScript and associated design patterns.

## What is TypeScript?

> TypeScript = JavaScript + A Type system

We are adding some additional syntax to our JS code... or the type system. Think of it as flexibility of JavaScript with strict type system as in C# or Java.

TypeScript has no effect on how the code gets executed by browser or Node.

> TypeScript is like a friend sitting behind you while coding, helping you catch errors while you code.

## How TypeScript helps?

1. Helps us catch errors during development
2. Uses type annotations to analyse our code
3. Only active during development, the browser or node doesnt understand TypeScript, it is just to make development and debugging life easier.
4. Doesnt provide any performance optimization. It is still our JavaScript that runs in the end.

## How do we run our code with type script?

1. Create / write TypeScript code (.ts file extension)
2. Run it through TypeScript compiler which spits out JavaScript code
3. Run this javascript code from compiler as usual in browser or node. (Again now browser or node has no idea we used TypeScript)

## Getting TypeScript - Environment setup

Install TypeScript through npm as global module, using this command in the terminal

`npm install -g TypeScript`

Also install command line tool ts-node that allows us to compile and execute TypeScript code with one command at our terminal

`npm install -g ts-node`

check the installation by using the type script compiler command with help tag

`tsc --help`

If it shows all the documentation of tsc command and its options, then you are all set.

## Executing TypeScript code

We cannot directly execute TypeScript files, we need to first compile TypeScript to JavaScript and then execute the resulting JavaScript file

`tsc <filename.ts>`

This command compiles the Ts code to JS code

use the usal means to run the resulting JavaScript file

`node <filename.js>`

This compilation gets tedious pretty soon, w can save one step by using ts node

`ts-node <filename.ts>`

This command compiles the TS files to JS files and executes the JS file, all in one command.

## A quick look at How TypeScript helps with Interfaces and Annotations

> refer to source code at `01_fetchjson/index.ts`

Interfaces in TypeScript help define structure of objects in TypeScript. It helps us to catch type errors early while developing code

Annotations let us assign the data type to function arguments. This is a life saver in situations where we tend to mix up order of arguments while calling functions.

Here is an example of interfaces and type annotations:

```javascript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID : ${id}
     Has a title of: ${title}
     Is it finished? ${completed}
    `);
};
```

> Refer to `01_fetchjson/index.ts` for a complete working exercise.

Great now that we have ataste of TypeScript lets dig deeper from the basics.

## Types in TypeScript

In simple terms, Type in TypeScript is an easy way to refer to the different properties and functions that a value has

A value is anything that we can assign to a variables like strings, numbers, booleans, arrays, undefined etc.

Here's a example:

If we imagine a variable as a bucket and it has a string inside it say "blue". How would you answer the question - Whats in the bucket?

Either you'd say

- Its a string

- OR we can say - It is a value that has all the properties and methods that we assume that a string has.

So instead, as a short cut so humans undertand. We just say... **It's a string**.

Sometimes these types are pretty obvious like strings, but in real world of programming we come across situations where its not so obvious. In a previous example we saw that we defined Todo as an interface type.

So Type in TypeScript is nothing but a short cut, a label or nomenclature of sorts to help us describe what kind of value it is and what can it do.

> Every single value in TypeScript ha sa type

### Some basic Types in TypeScript

- **string** - "hi there"

- **number** - 0.2 0r -20 or 40000

- **boolean** - true false

- **Date** - new Date()

- **custom type** - employee {id:1, name:"john", title:"developer"}

### Categories of types

1. **Primitive types** - Primitive types are all the basic ones that you might guess eg: number, boolean, void, undefined, string, symbol, null.

2. **Object types** - These are any types that you and I create or any other non-primitive types that are built into the language. E.g: functions, arrays, classes, objects.

### Why do we care about Types at all?

1. Types are used by the TypeScript Compiler to analyse our code for errors. Remember? like that good friend to help find errors while develping.

2. Types allow other developers to understand what values are flowing around in the codebase. It makes your code more readable, maintainable and collaboration is easy.

### Code snippet examples on Types

> Refer to `02_ts_features/01-types.ts` for some code snippet examples and inline explanations.

### So where do we use types?

**EVERYWHERE**, well thats the simple answer. You like it or not you will be surrounded by types. every value has a type associated with it.

## Type Annotations and Type Inference

In this section we will try to digest two different systems in TypeScript, by looking at the in parallel so that we can grasp it better.

### What is type Annotation and Type Inference?

1. **Type Annotation** - Code we add to tell TypeScript what type of value a variable will refer to

2. **Type Inference** - When TypeScript tries to figure out what type of value a variable refers to... on its own!

So you'll see that both refer to finding type of variable.

But, the interesting thing here is they both are kind of at odds with each other. With the former (Type annotation) we are adding some code to tell TypeScript what type a variable is and with latter(type inference) we let TypeScript do the guess work on what type a variable is.

> The big question is doing it manually ( you and I) vs letting TypeScript do the guessing.First lets understand annotations in next section

### Understanding Type annotations

We annotate the type of a variable using `:` followed by the type name.

Let's look at annotation for basic and object types. Refer to the code snippets and examples at `02_ts_features/01_variables.ts`

But do we need to annotateevery variable? Read on to Type Inference to find out...

### Understanding Inference

Everytime we make a variable inside our code:

```javascript
const color = 'red';
```

we are essentially doing 2 steps

1. Here the left hand side of `=` is the Variable declaration

2. right hand side is the variable initialization.

> If we do our declaration and initialization on the same line, TypeScript will figure out the type for us.

So in this example even though we do not annotate color like `color: string` TypeScript gets that color is of type string.

To make this even clear if we do the same in two lines, Type script cant figure out anymore

```javascript
const color;
color = 'red';
```

If you hover over color after initialization it would say type as `any`. (We will look at any shortly)

> Rule of thumb: if we do the declarationa nd initialization in the same line TypeScript will do the TYpe inference for us.

### So then when should we use what?

- **Type Inference** : ALWAYS! When ever we can we use type infrerence by default. We will let TypeScript figure out the type for us as much as possible

- **Type Annotations** - There are 3 Scenarios where we might have to add annotations to help TypeScript find the type

  1. Whenever a function returns a `any` type and we need to clarify the value

  2. When we declare a variable on one line but initialize on another

  3. When we want the variable to have a type that can't be inferred.

> checkout examples on when to use typeannotations at the bottom section of `02_ts_features/01_variables.ts`

### What the hell is `any` type?

`any` type means that the TypeScript absolutely has no idea what time a variable or value is! No clue at all!

So `any` type is

1. A type , just like `boolean` or `string`

2. Means TypeScript has no idea what this is and cant check for correct property references.

> **Avoid Variables with `any` at all costs. Its generally a bad thing b'coz TypeScript cant do its job of helping you**

> checkout examples on when to use typeannotations at the bottom section of `02_ts_features/01_variables.ts`

### Functions - Type Annotation and Type Inference

We got a glimpse of type annotation and functions when we discussed varaiables in `02_ts_features/01_variables.ts`.

```javascript
const logNumbers: (i: number) => void = (i) => {
  console.log(i);
};
```

However we looked at the annotation for the function variable, The left side of `=` sign. Now lets look at how we add annotations for the function itself the right side of `=` sign.

Here's whats going on with functions and TypeScript

- **Type Annotation** - Code we add to tell TypeScript what type of arguments a function will receive and what type of values it will return

- **Type Inference** - TypeScript will to figure out what type of value a function will return.

> The big difference here is we are no longer annotating a variable declaration, instead we are annotating the function itself.

I know this sends our brain on a spin. so lets jump back into code and undertsnad it better. `02_ts_features/03-functions.ts`

### Destructuring and Annotations

Lets look at an example where we have an object that describes todats weather

```Javascript
const todaysWeather = {
date: new Date(),
weather: 'sunny'
};
```

and we have a function that logs out weather

```Javascript
const logWeather = (forecast: {date:Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);
```

Now if we use the modern Javascript syntax to destructure the forecast object and pull the properties, we will have the type annotations like this where we just replace the varial with the actual destructuring statement.

```Javascript
const logWeather = ({date, weather}: {date:Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};
```

Note here that the destructuring and the annotations are still seperate, seperated by the `:`

### Annotating around Objects

Annotating Objects is similar to destructuring argument list we saw in pervious section.

Lets head back into the code and play with it. `02_ts_features/objects.ts`

## Arrays in TypeScript

When working with Arrays in TypeScript, we are essentially working with plain JavaScript Arrays. You'll still have access to all the familiar Array behaviour as in JavaScript e.g push into an array, for loop etc. All the good stuff!

> Typed Array = Arrays where each element is some consistant type of value

In Typescript we generally have similar kind of values in an array. Like an array of strings, an array of numbers. We do not mix them as we could with plain JavaScript.

_We can technically have different types in an array, we will look at it in a bit._

Lets head back into code and explore more `02_ts_features/05-arrays.ts`

### Why do we need Typed Arrays?

TypeScript can help us in different ways with typed Arrays

1. TypeScript can do Type inference when extracting values from an array

2. It can prevent us from adding incompatible values to the array

3. We can get help with `map`, `foreach`, `reduce` functions

4. Flexible arrays can still contain multiple different types.

Time to head back into code and explore more `02_ts_features/05-arrays.ts`

### When to use Typed Arrays?

We use typed arrays anytime we want to represent a collection of records with some arbitary sord order usually of the same type.

## Tuples in TypeScript

A tuple looks very similar to an Array. But the big difference is that in Tuple we have every element in this array looking thing represent one specific property about some record.

While Array represents / organizes a buch or collection of different records, Tuple on the other hand, contains multiple different properties to describe one thing.

> Usually inside tuple you mix and match many different types

Lets look at an example:

How would you represent coca-cola? the most famous beverage? we might say it has the following properties

- color property which is a string 'brown'

- Carbonated property which is a boolean - true

- Sugar property in grams will be of type number - 40

When coming from a JavaScript background representing a drink this way makes sense. We have one object to represent one drink.

Now if we had to represent this object with an array how would we do that? it would look something like:

`['brown', true, 40]`

A different data structure that still looks like a drink. However we have lost quite a bit of information in this representation. With earlier representation we as developers could easily undertand that color is brown, carbonated is true and suger is 40.

We have lost those property labels in the representation as an array. You will have to memorise what is what while developing. We have to remember the order of properties.

So this `['brown', true, 40]` is what exactly a Tuple is. We have what looks like an array, and we put in property values into that array in a very specific order. So the **ordering part is very critical**.

If we mess with the order, the structure becomes useless.

> When we work with tuples we have a fix order of elements

### Tuples in action

Head into code at `02_ts_features/06-tuples.ts`

### Tuple why do we care and when to use them?

Sorry to break the news this late. We don't use tuples that often in real life and we will why why in a bit.

Since tuple is included in the official TypeScript documentation you as a developer should at least have a passing idea about it.

Most notably if you are working with a CSV file you might use it, but for most other scenarios you'll find better alternatives.

So then why dont we use it that often? consider this tuple

```Javascript
const carSpecs:[number,number] = [450, 3456];
```

Now as a developer can you comprehend what this tuple means? what do the numbers mean?

Lets create the same datastructure with an object

```Javascript
const carSpecs = {
  horsepower: 450,
  weight:3456
}
```

Now doesnt this make better sense? the object format forces us to put in a key thus making the code more readable.

> In real life you'll see that when ever we need to model some informative data we reach out to object more than tuple. Its all about making the code more readable and in turn making our lives easier.

## Interfaces in TypeScript

This is one of the most imporant concept/ feature to grasp in typescript. Understanding Interfaces really well will help you design excellent applications.

> Interfaces + Classes = Strong code reuse with TypeScript

When we create an interface, we are creating a new type that describes the property names and value types of an object. It is a custom type that we define

### An Analogy to understand Interfaces

Conceptually, think of interfaces as being a contract or a design agreement.

Imagine you are Car maker that makes cars which run on gas and also electric cars.

Now the motor in the cars are very different for Gas and electric cars.

However when a driver gets in the car, they find the save steering wheel the same gas pedal, the same brakes.

Here, you can imagine that the gas pedal, brake pedal and the steeing wheels implement a standard or a common "Interface" that makes it easier for drivers to drive any of these cars in the same manner.

It doesnt matter how the motor, gas pedal and brake pedal works internally... Gas motor or eectric motor, normal steering or power steering, drum brakes or disc brakes.

For the driver, if you turn the steering car turns, press the gas pedal car moves, hit the brake it stops! doesnt marter which type of car you drive.

### Intefaces in Action

Understanding Interfaces is a lot easier with code, so lets jump back into code at `02_ts_features/07-interfaces.ts`

### Interface and code reuse

General strategy for reusable code in TypeScript (Mostly if not always)

1. Create functions that accept arguments that are typed with interfaces

2. Objects/classes can decide to 'implement' a given interface to work with a fuction

Interfaces are used as _gatekeepers_. If certain object likes to access some functionality it has to impliment the interface.

Imagine this real world scenario: Its a cold winter morning and its also raining outside.

You have two woolen jackets a red one that keeps you warm but is not water proof. It easily gets wets in the rain.

You also have a Blue woolen jacket that gets wet in the rain too, but it came with an additional Yellow rain overcoat. 

So to stay toasty and dry you use the blue woolen jacket with the yellow rain overcoat over it.

Lets break it down:

- Both the red and blue woolen jackets are the objects.

- Yellow rain jacket is like an interface

- In order to provide you the _funtionality of rain protection_ the blue jacket _implements the yellow rain overcoat_

- If the red jacket also had to provide you the funtionality of protection from rain. it has to impliment the interface - Yello rain overcoat. i.e You have to wear the yello rain over coat.

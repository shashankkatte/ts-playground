# TypeScript Playground

A collection of TypeScript Apps, code snippets and exercises for anyone to understand typescript and associated design patterns.

## What is Typescript?

> Typescript = JavaScript + A Type system

We are adding some additional syntax to our JS code... or the type system. Think of it as flexibility of JavaScript with strict typse system as C# or Java.

Typescript has no effect on how the code gets executed by browser or Node.

> Typescript is like a friend sitting behind you while coding, helping you catch errors while you code.

## How Typescript helps?

1. Helps us catch errors during development
2. Uses type annotations to analyse our code
3. Only active during development, the browser or node doesnt understand typescript, it is just to make development and debugging life easier.
4. Doesnt provide any performance optimization. It is still our JavaScript that runs in the end.

## How do we run our code with type script?

1. Create / write typescript code (.ts file extension)
2. Run it through typescript compiler which spits out JavaScript code
3. Run this javascript code from compiler as usual in browser or node. (Again now browser or node has no idea we used typescript)

## Getting Typescript - Environment setup

Install typescript through npm as global module, using this command in the terminal

`npm install -g typescript`

Also install command line tool ts-node that allows us to compile and execute typescript code with one command at our terminal

`npm install -g ts-node`

check the installation by using the type script compiler command with help tag

`tsc --help`

If it shows all the documentation of tsc command and its options, then you are all set.

## Executing typescript code

We cannot directly execute Typescript files, we need to first compile Typescript to JavaScript and then execute the resulting JavaScript file

`tsc <filename.ts>`

This command compiles the Ts code to JS code

use the usal means to run the resulting JavaScript file

`node <filename.js>`

This compilation gets tedious pretty soon, w can save one step by using ts node

`ts-node <filename.ts>`

This command compiles the TS files to JS files and executes the JS file, all in one command.

## A quick look at How Typescript helps with Interfaces and Annotations

> refer to source code at `01_fetchjson/index.ts`

Interfaces in Typescript help define structure of objects in Typescript. It helps us to catch type errors early while developing code

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

Great now that we have ataste of Typescript lets dig deeper from the basics.

## Types in TypeScript

In simple terms, Type in Typescript is an easy way to refer to the different properties and functions that a value has

A value is anything that we can assign to a variables like strings, numbers, booleans, arrays, undefined etc.

Here's a example:

If we imagine a variable as a bucket and it has a string inside it say "blue". How would you answer the question - Whats in the bucket?

Either you'd say

* Its a string

* OR we can say - It is a value that has all the properties and methods that we assume that a string has.

So instead, as a short cut so humans undertand. We just say... **It's a string**.

Sometimes these types are pretty obvious like strings, but in real world of programming we come across situations where its not so obvious. In a previous example we saw that we defined Todo as an interface type.

So Type in Typescript is nothing but a short cut, a label or nomenclature of sorts to help us describe what kind of value it is and what can it do.

> Every single value in Typescript ha sa type

### Some basic Types in typeScript

* **string** - "hi there"

* **number** - 0.2 0r -20 or 40000

* **boolean** - true false

* **Date** - new Date()

* **custom type** - employee {id:1, name:"john", title:"developer"}

### Categories of types

1. **Primitive types** - Primitive types are all the basic ones that you might guess eg: number, boolean, void, undefined, string, symbol, null.

2. **Object types** - These are any types that you and I create or any other non-primitive types that are built into the language. E.g: functions, arrays, classes, objects.

### Why do we care about Types at all?

1. Types are used by the Typescript Compiler to analyse our code for errors. Remember? like that good friend to help find errors while develping.

2. Types allow other developers to understand what values are flowing around in the codebase. It makes your code more readable, maintainable and collaboration is easy.

### Code snippet examples on Types

> Refer to `02_ts_features/01-types.ts` for some code snippet examples and inline explanations.

### So where do we use types?

***EVERYWHERE**, well thats the simple answer. You like it or not you will be surrounded by types. every value has a type associated with it.

## Type Annotations and Type Inference

In this section we will try to digest two different systems in Typescript, by looking at the in parallel so that we can grasp it better.

### What is type Annotation and Type Inference?

1. **Type Annotation** - Code we add to tell typescript what type of value a variable will refer to

2. **Type Inference** - When typescript tries to figure out what type of value a variable refers to... on its own!

So you'll see that both refer to finding type of variable.

But, the interesting thing here is they both are kind of at odds with each other. With the former (Type annotation) we are adding some code to tell Typescript what type a variable is and with latter(type inference) we let Typescript do the guess work on what type a variable is.

> The big question is doing it manually ( you and I) vs letting TypeScript do the guessing.First lets understand annotations in next section

### Understanding Type annotations

We annotate the type of a variable using `:` followed by the type name.

Let's look at annotation for basic and object types. Refer to the code snippets and examples  at `02_ts_features/01_variables.ts`

But do we need to annotateevery variable? Read on to Type Inference to find out...

### Understanding Inference

Everytime we make a variable inside our code:

```javascript
const color = 'red';
```

we are essentially doing 2 steps

1. Here the left hand side of `=` is the Variable declaration

2. right hand side is the variable initialization.

> If we do our declaration and initialization on the same line, Typescript will figure out the type for us.

So in this example even though we do not annotate color like `color: string` Typescript gets that color is of type string.

To make this even clear if we do the same in two lines, Type script cant figure out anymore

```javascript
const color;
color = 'red';
```

If you hover over color after initialization it would say type as `any`. (We will look at any shortly)

> Rule of thumb: if we do the declarationa nd initialization in the same line Typescript will do the TYpe inference for us.

### So then when should we use what?

* **Type Inference** : ALWAYS! When ever we can we use type infrerence by default. We will let Typescript figure out the type for us as much as possible

* **Type Annotations** - There are 3 Scenarios where we might have to add annotations to help Typescript find the type

  1. Whenever a function returns a `any` type and we need to clarify the value

  2. When we declare a variable on one line but initialize on another

  3. When we want the variable to have a type that can't be inferred.

> checkout examples on when to use typeannotations at the bottom section of `02_ts_features/01_variables.ts`

## What the hell is `any` type?

`any` type means that the Typescript absolutely has no idea what time a variable or value is! No clue at all!

So `any` type is

1. A type , just like `boolean` or `string`

2. Means Typescript has no idea what this is and cant check for correct property references.

> **Avoid Variables with `any` at all costs. Its generally a bad thing b'coz Typescript cant do its job of helping you**

> checkout examples on when to use typeannotations at the bottom section of `02_ts_features/01_variables.ts`

## Functions - Type Annotation and Type Inference

We got a glimpse of type annotation and functions when we discussed varaiables in `02_ts_features/01_variables.ts`.

```javascript
const logNumbers: (i: number) => void = (i) => {
  console.log(i);
};
```

However we looked at the annotation for the function variable, The left side of `=` sign. Now lets look at how we add annotations for the function itself the right side of `=` sign.

Here's whats going on with functions and Typescript

* **Type Annotation** - Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

* **Type Inference** - Typescript will to figure out what type of value a function will return.

> The big difference here is we are no longer annotating a variable declaration, instead we are annotating the function itself.

I know this sends our brain on a spin. so lets jump back into code and undertsnad it better. `02_ts_features/03-functions.ts`

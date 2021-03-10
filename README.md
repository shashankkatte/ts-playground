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

# Maps

This is an Application where we generate random user and company date using faker.js and display markers using the gps corodinates on google map. If we click on the marker it shows more details about user or company on a popup. THis is a simple html and JS web application. Ofcourse we develop the JS parts with Typescript layer during our development

## How to get started?

- Clone the parent repository using the command in terminal: `git clone git@github.com:shashankkatte/ts-playground.git`

- Get all the dependencies `cd <this directory>` and then `npm install`

- To start a live session with parcel use the command in terminal `parcel index.html` and you should see the output 

`Server running at http://localhost:1234 ✨  Built in 350ms.`

## Third party packages/tools and dependencies we use

- Parcel.js : Web appplication bundler to help translate our typeScript to plain JS for browser

- Faker.js : Just to get some real life like fake data for person manes and company names

- Add Type definition files and @types/faker

- Google Maps : Maps JavaScript API

- Add Google Maps type def : @types/googlemaps

## Concepts covered

The whole intent of this app is to show you the interplay between interfaces and classes in TypeScript that helps us acheive code reusability and Type checking at devlopment time.

You will see the design pattern used in this app in most of the other real world applications

> This App is not intended to teach you HTML, CSS or Google maps beautification. Your eyes may hurt :cry: but the fous hhere is on Typescript!

Here's what You'll learn while going through the code files.

- Using parcel.js as bundler

- Using Faker.js to genrate fake data in your development projects / proptotypes

- Type Definition files 

- Export statements in TypeScript

- Cmd + Click on a Type to see the type definition

- How to Abstract and limit access using modifiers in classes

- Avoiding code duplicity in code

- Inverting dependency by defining interfaces for classes

- Implicit type checks

- Implements clauses with classes and interfaces.
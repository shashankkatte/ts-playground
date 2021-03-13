// Lets define an object that represents a car
const oldHondaCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

//  This function prints out the object, Lets annotate it
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

//  Now we should be able to send oldHondaCivi as argument to printVehicle
printVehicle(oldHondaCivic);

//  Now everything looks perfect here, but as a developer are you happy with the type annotation?
//  Do you think that this long way of annotating is feasable if OldHondaCivic object has many more properties?
// Also don't you think that we will have to duplicate this annotation if we had nother function that uses oldCivicObject?

// Is there a better way of doing this?

//  Ofcourse there is... We use Interface

// Anytime we create an interface we create a new type
// It is convention to use Capital letter starting interface name
//  always create interfaces for generic ters like vehicle instead of car, pets instead of dogs
// List the property name s and types
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// So now if we had to redefine the print vehicle statement
// You can just annotate it with interface its faster, easier cleaner and reusable
const printVehicleBetter = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

//  Now if you call printVehicleBetter function on OldHondaCivic
//  TypeScript behind the scenes checked if oldCivid has the same property types as defined in the interface Vehicle

printVehicleBetter(oldHondaCivic);

// Try changing broken property from true to any number and you'll see TypeScript yelling at you all over again!
// Also if you rename broken property in OldHondaCivic to isBroken, TYpeScript will yell because in the Vehicle Interface it is still called "broken".
// It is very important to have the same property names and the Types as defined in the interface.
// This OCD strictness will save you from lots and lots of bugs while developing large applications.

//  Lets explore more about interfaces now
//  You are not just limited to primitive data types you can use complex datatypes as well like you can change Year from string to a Date Type

interface Vehicle1 {
  name: string;
  year: Date;
  broken: boolean;
}

// You can also have functions in Interfaces
// To add a function to interfaces you add the function name followed by ():return type
//  Here Vehicle2 has a function called summary that expects to return a string type

interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

//  Now The object OldHondaCivic has to implement summary function to be considered of type Vehicle2 or else TypeScript will complain again

const oldHondaCivic2 = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return "Get a new car now!"
    }
  };

  printVehicleBetter(oldHondaCivic2);


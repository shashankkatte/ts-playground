//  Lets create a class that represents a vehicle.
//  we use the class keyword followed by class name.
// We capitalise first character in name as per convention

//  Lets add a method drive that just prints to console, attotate it as no argument and retun type void
class Vehicle {
  drive(): void {
    console.log('speed is good');
  }

  honk(): void {
    console.log('Beep beep');
  }
}

// Like we saw in README.md, class is just a blue print or definition of what a vehicle should be.
// We generally dont call the method attached to class directly
// In some cases we can but with normal methods we do not.
// Instead we use the class to create an instance (object)
//  We use the new keyword to to create an instance of the class
//  As convention you will see sometimes the instance also has same name but lowercase like so
const vehicle = new Vehicle();

//  Now vehicle instance has access to drive method that was in class
vehicle.drive();

// Now if you run this file you will see the output Speed is good.
// In the terminal
// change to current directory with this file using cd command $cd 02_ts_features
// $ ts-node 08-classes.ts

//  You can lo have as many methods as you want in class. lets go back and add a method honk in class and call it with instance

vehicle.honk();

//  Now if yoy run it with ts-node you will see both 'speed is good' and 'beep beep'

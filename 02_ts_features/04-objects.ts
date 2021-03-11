//  lets create a profile object for a person
//  It has name, age, gps corodinates and a method to set age with function annotation
const profile = {
  name: 'John',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

// lets now try to some ES 2015 destructuring
//  Here the type inference has kicked in and you can hover over age to see that its of type number
const { age } = profile;

// However if you do want to annotate, its sligtly different with destructuring (ignore the erros for now)

//  you wouldnt say
const { age }: number = profile;

// but rather this way. This seems like its violating the way we annotate but this is how we do it with destructuring
const { age }: { age: number } = profile;

// Lets see how we can destructure latitute and longitude from person object
// TypeScript does infer that lat and lng are numbers
const {
  coords: { lat, lng },
} = profile;

// If you do have to annotate  this is how
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// Wondering why is it so complicate?
// Let go back to our first example, imagine this wuld be valid syntax to annotate with destructuring
const { age }: number = profile;

//  Now if we had to also destructure name along with age , remember name is a string this would screw things up
const { age, name }: number = profile;

//  This is why we double up when ever we are destructuring

// Thats pretty much it brave soul! head back to README.md

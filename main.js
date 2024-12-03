// ########
// ########
// ## Task 1 - Declaring Objects

// Create an object called `myHouse`:

// > My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D.

const myHouse = {
  stories: 2,
  parking: 0,
  bedrooms: 2,
  hasGarden: true,
  energyEfficiencyRating: "D",
};

// Create an object called `myCar`:

// > My car is red, has 4 wheels, power steering, and 2 seats, and does 20 miles per gallon.

const myCar = {
  color: "red",
  wheels: 4,
  hasPowerSteering: true,
  seats: 2,
  milesPerGallon: 20,
};

// Create an object called `myFavouriteFilm`:

// > My favourite film's title is The Dark Knight, it was released in 2008, and the lead actor is Christian Bale.

const myFavouriteFilm = {
  title: "The Dark Knight",
  releaseDate: 2008,
  leadActor: "Christian Bale",
};

// ########
// ########
// ## Task 2 - Reading values

let person = {
  name: "Ben",
  likesChocolate: true,
};

// Below that, use dot notation to console.log the value of the `likesChocolate` property.
console.log(person.likesChocolate);

/* Then write an if statement that will console.log `"Ben loves chocolate"` 
if likesChocolate has a value of true else console.log `"Ben hates chocolate"`.
 The condition for the if, and the name Ben should both be read from the object using dot notation.

 if person object key likesChocolate === true
 console.log("Ben loves chocolate")
 else if person object key likesChocolate === false
 console.log("Ben hates chocolate")

 log string interpolation person.name + loves/hates chocolate
*/

if (person.likesChocolate === true) {
  console.log(`${person.name} loves chocolate`);
} else {
  console.log(`${person.name} hates chocolate`);
}

// ########
// ########
// ## Task 3 - Bracket Notation

let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

// Use bracket notation and the `smallTalk property` to console.log Ben's smalltalk phrase.
console.log(bensPhrases["smallTalk"]);

// Use bracket notation and the `desiredPleasantry` variable to console.log Ben's greeting phrase.
console.log(bensPhrases[desiredPleasantry]);

// Change what is console logged by changing the value of `desiredPleasantry`.

// ########
// ########
// ## Task 4 - Reassigning Properties

// Copy the object below, and fill in the blank name values to represent yourself, but do not change the `isBootcamper` key; it must remain as false (just for a little bit...).

let me = {
  firstName: "Kim",
  lastName: "Lida",
  isBootcamper: false,
};

// Below your object, reassign the property of `isBootcamper` using the assignment operator. Make it `true`!
me.isBootcamper = true;

// ########
// ########
// ## Task 5 - Nested Objects

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

// Using dot notation, read the text from the communication object and store it in a variable.

let communicationMessage = communication.payload.message.text;

/* If the priority is urgent, 
then console.log the variable, 
else do nothing.
*/

if (communication.payload.message.priority === "URGENT") {
  console.log(communicationMessage);
}

// ########
// ########
// ## Task 6 - Get Experimental

// Explore objects more. For example, you could...

// - Create multi-layered nested objects, and access properties at different layers.

let strangeFamily = {
  familyName: "Scarygang",
  family: {
    ella: {
      name: "Ella",
      age: 34,
      arms: 8,
      isStrange: true,
    },
    john: {
      name: "John",
      age: 87,
      arms: 13,
      isStrange: false,
    },
  },
};

console.log(strangeFamily["familyName"]);

let accessStrangeFamilyElla = "ella";
let accessStrangeFamily = "family";
let armsNumber = "arms";
console.log(
  strangeFamily[accessStrangeFamily][accessStrangeFamilyElla][armsNumber]
);

// - Create functions that take in information and use that information to create or change objects. For example,
// you could make a function that took in someone's name and age
// and return an object for that person with those details as properties.

function newFamily(name, personCount) {
  let family = {};
  family[name] = name;
  family.personCount = personCount;
  console.log(family);
}

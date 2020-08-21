///const and let/////////////////////////////////////////////////////

var nameVar = 'Ayumi';
var nameVar = 'Amy';
console.log('nameVar', nameVar); //nameVar, Amy

let nameLet = 'Jen';
nameLet = 'Julie'; // Can not let nameLet = ...
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Bob'; // Error
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Chibi';
    return petName;
}
const petName = getPetName();
console.log(petName); 

// Block scoping
const fullName = 'Ayumi Tanaka';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName); //Ayumi
}

console.log(firstName); //Ayumi

///arrow function/////////////////////////////////////////////////////

const square = function(x) {
    return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x; //simple syntax

console.log(squareArrow(8));

// Challange

const getFirstName = (x) => {
    return x.split(' ')[0];
};
console.log(getFirstName('Mike Smith'));

const getFirstNameTwo = (x) => x.split(' ')[0]; //simple syntax
console.log(getFirstNameTwo('Mike Smith'));

///arrow function 2/////////////////////////////////////////////////////

// arguments object
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001)); //56

// this ketword

const user = {
    name: 'Ayumi',
    cities: ['Vancouver', 'Tokyo'],
    printPlacesLived() {
        return this.cities.map((city) => 
        this.name + ' has lived in ' + city); //["Ayumi has lived in Vancouver", "Ayumi has lived in Tokyo"]

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challange

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    } 
};

console.log(multiplier.multiply());

///classes/////////////////////////////////////////////////////

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'none') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation = 'none') {
        super(name, age);
        this.homelocation = homelocation;
    }
    hasHomelocation() {
        return !!this.homelocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomelocation()) {
            greeting += ` I'm visiting from ${this.homelocation}.`
        }
        return greeting;
    }
}

const me = new Person('Ayumi Tanaka');
console.log(me.getGreeting()); //Hi! Ayumi Tanaka

const other = new Person();
console.log(other.getGreeting()); //Hi! Anonymous

const challenge = new Student('Andrew Mead', 26, 'Computer Science');
console.log(challenge.getDescription()); //Andrew Mead is 26 years old. Their major is Computer Science.

const challengeTwo = new Traveler('Andrew Mead', 'Tokyo');
console.log(challengeTwo.getGreeting()); //Hi! Andrew Mead I'm visiting from Tokyo.

/// /////////////////////////////////////////////////////

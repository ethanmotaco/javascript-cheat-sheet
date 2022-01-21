/* -------------------------------------------------------------------------- */
/*                                 PRIMITIVES                                 */
/* -------------------------------------------------------------------------- */

/*
    Primitives are immutable so their values cannot be changed but they can be reassigned to a different value
*/

var boolean = true // Boolean is a logical entity and can have one of two values: true or false
var undefinedVariable // Undefined is a variable that has not yet been assigned a value
var nullVariable = null // Null is an empty variable like undefined but it is assigned the null value explicitly
var number = 1 // Number is a double-precision 64-bit binary format IEEE 754 value. In addition to representing floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number")
var bigint = 1n // BigInt is an integer with arbitrary precision. BigInts can safely store and operate on large integers even beyond the safe integer limit for Numbers
var string = 'hello world' // String is a sequence of characters used to represent text.
var symbol = Symbol('sym') // Symbol is a built-in object whose constructor returns a symbol primitive that is guaranteed to be unique.

// The typeof operator can be used to check the type of a variable
console.log(typeof boolean) // boolean

/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */

//TODO add variables

/* -------------------------------------------------------------------------- */
/*                                CONTEXT/THIS                                */
/* -------------------------------------------------------------------------- */

//TODO add context/this

/* -------------------------------------------------------------------------- */
/*                           CONDITIONAL STATEMENTS                           */
/* -------------------------------------------------------------------------- */

//TODO add conditional statements

/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

//TODO add loops

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

//TODO add functions

/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

/*  
    Anything that is not a primitive is an object

    Objects are a collection of properties which are key/value pairs 
    The key corresponds to a property's NAME and the value corresponds to a property's VALUE

    NAME must be a unique value that is a string
    VALUE can be anything including a primitive, another object or a function
*/

/* -------------- Object Literal syntax for creating an object -------------- */

const car = { // Object set as const variable can still set properties after it has been created
    make: 'Toyota', // Primitive string
    model: 'Corolla', // Primitive string
    year: 2021, // Primitive number
    stats: { weight: 2910, horsepower: 139, mpg: 40 }, // Nested object

    // When a function is a property of an object it is called a method
    fullName: function () { return this.make + " " + this.model; }, // Method that outputs the car's make and model
    // Shorthand syntax allows a named function to be declared without the property name
    fullName() { return this.year + " " + this.make + " " + this.model; },
    // If multiple properties have the same name, the value of the property on the left will be overwritten by the value of the one on the right.
}

/* --------------- Bracket notation to set/get property values -------------- */

car['model'] = 'Camry'; // Set 'model' property value to 'Camry'

console.log(car['model']); // Get 'model' property value

/* ---------------- Constructor syntax for creating an object --------------- */

const bike = new Object();

/* ----------------- Dot notation to set/get property values ---------------- */

bike.brand = 'Huffy'; // Set 'brand' property value

console.log(bike.brand); // Get 'brand' property value

/* ------------- Computing property name when object is created ------------- */

const random = () => Math.random().toString(36).slice(-5); // This function will return a random property name

const obj = {
    // Property name can be an computed by an expression by wrapping the function in brackets.
    [random()]: true, // Property name will now be randomized
}

/* ---------------- Defining a property using defineProperty ---------------- */

Object.defineProperty(obj, 'emoji', { // arg1 is the object, arg2 is the property name, arg3 is a descriptor with options
    value: '🙂', // value option is used to set the value of the property
})

Object.defineProperty(obj, 'getEmoji', {
    get: function () { return this.emoji }, // defineProperty can be used to define a getter 
})

/* ------------------------- Looping over an object ------------------------- */

const dog = {
    name: 'Fido',
    age: 3,
    picture: '🐶'
}

// For in loop
for (k in dog) { // Will loop over all enumerable property names in object and its prototypes
    console.log(k) // name, age, picture
}

// For of loop 
for (value of Object.values(dog)) { // Will loop over all property values in object
    console.log(value) // Fido, 3, 🐶
}

for (key of Object.keys(dog)) { // Will loop over all property names in object
    console.log(key) // name, age, picture
}

for (property of Object.entries(dog)) { // Will loop over all properties in object
    console.log(property) // [ 'name', 'Fido' ], [ 'age', 3 ], [ 'picture', '🐶' ]
}

for (const [key, value] of Object.entries(dog)) { // Will loop over all properties in object
    console.log(key, value) // name Fido, age 3, picture 🐶
}

/* ------------- Creating an object using a constructor function ------------ */

/*
    A constructor function is similar to a class in other languages or how the 'class' keyword works in JavaScript

    It can be used to define how an object is created

    It can take arguments and do additional setup like defining additional properties and methods
*/

function Tree(species) { // Constructor function name should be capitalized
    this.species = species; // Set internal property using the argument
    this.planted = Date.now(); // Defining an additional property

    this.grow = function () {
        return this.species + " tree is growing"; // Defining a method
    }
}

const newTree = new Tree('Birch'); // Initialize new object with 'new' keyword

console.log(newTree.grow()) // 'Birch tree is growing'

/* ---------------------------- Object Prototypes --------------------------- */

/*
    Prototypes are the mechanism by which objects inherit properties from one another

    Every object in JavaScript has a built-in property, which is called its prototype

    The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain

    The chain ends when we reach a prototype that has null for its own prototype
*/

const vehicle = Object.create(car); // Using the static method 'create' on the Object class will create an object with its prototype set as the passed object

console.log(vehicle); // Object is still empty

console.log(vehicle.make); // If we call a property of the 'vehicle' object's prototype, the prototype object 'car' now provides the property

console.log(Object.getPrototypeOf(vehicle)); // Using the static method 'getPrototypeOf' on the Object class will output the prototype of the passed object

/* -------------------------------------------------------------------------- */
/*                                  CLOSURES                                  */
/* -------------------------------------------------------------------------- */

//TODO add closures

/* -------------------------------------------------------------------------- */
/*                                  PROMISES                                  */
/* -------------------------------------------------------------------------- */

//TODO add promises

/* -------------------------------------------------------------------------- */
/*                                 ASYNC/AWAIT                                */
/* -------------------------------------------------------------------------- */

//TODO add async/await
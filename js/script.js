//Declare variable with different data types 

//String
let name = "John";

// Number
let age = 30;

//Boolean
let isEmployed = true;

// Array (List of values)
let hobbies = ["reading", "coding", "travelling"];

//Object (key-value pairs)
let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "coding", "traveling"]
};
//Log the variable to the console
console.log(name);
console.log(age);
console.log(isEmployed);
console.log(hobbies);
console.log(person);

// Function that greets the user by name
function greet(name) {
    console.log("Hello, " + "!");
}

// Calling the function with a parameter
greet("John"); // Output: Hello, John!

// Function with a return value
function add(a, b) {
    return a + b;
}

// Storing the result of the function
let result = add(10, 65)
console.log(result); // Output: 75

// Example of scope 
let globalVar = "I am global variable";

function checkScope() {
    let localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar);
}

//Calling the function
checkScope();

let userage = 20;
let userAge = 20;
if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// For loop (repeat code multiple times)
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// While loop (repeat code until a condition is false)
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}
// Array example
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // Output: apple

// Adding items to an array
fruits.push("orange");
console.log(fruits);  // Output: ["apple", "banana", "cherry", "orange"]

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);  // Output: each fruit in the array
}

// Object example
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

// Accessing properties of an object
console.log(car.make);  // Output: Toyota
console.log(car["model"]);  // Output: Corolla

// Get references to the header and button elements
const header = document.getElementById('header');
const button = document.getElementById('change-background');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Change the background color of the header
  header.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

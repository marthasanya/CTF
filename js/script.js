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

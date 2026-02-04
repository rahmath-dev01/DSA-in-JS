// syntax :- function function name(){
// logic
// }

// Types of Functions in JavaScript
// 1️ Named Function
//Has a function name
// Can be called anytime
function add(a, b) {
  return a + b;
}

//2 Function Expression
// Stored in a variable
// Cannot be called before declaration
let add = function(a, b) {
  return a + b;
};

// 3 Arrow Function (ES6)
// Short syntax
// this behaves differently

const add = (a, b) => a + b;

// 4 Anonymous Function
// Function without a name
// Mostly used as callback

setTimeout(function() {
  console.log("Hello");
}, 1000);


// 5 IIFE (Immediately Invoked Function Expression)
// Executes immediately
// Avoids global scope pollution

(function() {
  console.log("IIFE");
})();

// 6 Callback Function
// Function passed as argument to another function
function greet(fn) {
  fn();
}

greet(function() {
  console.log("Hello");
});

// 7 Higher Order Function
// Accepts a function OR returns a function
// Examples:
// map()
// filter()
// reduce()


// find the largest number 
let a = Number(prompt("Enter a number"))
let b = Number(prompt("Enter a number"))
function largest(a,b){
if(Number.isNaN(a)){
  console.log("Enter a valid number ");
  
}
else if(a>b){
  console.log(`${a} is largest`);
  
}
else {
  console.log(`${b} is the largest`);
  
}
}
largest(a,b);
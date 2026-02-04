// Write a function to add two numbers.

function add(a,b){
  let sum = a+b;
  return sum;
}
console.log(add(10,20));



// Write a function to check even or odd.
let num =prompt('enter number')
function evenodd(num){
  if(num%2 ===0 ){
    console.log('even');
    
  }
  else{
    console.log('odd')
  }
}
evenodd(num);

// Write a function to find the square of a number.

let n = prompt("enter the number");
function square(n){
  return n*n

}
console.log(square(n));


// Write a function to convert Celsius to Fahrenheit.
let celsius = prompt('')
function Celsiusfahrenheit( celsius){
  return (celsius *9/5) + 32
  
}
console.log(Celsiusfahrenheit(celsius));

// Write a function to find the largest of two numbers.
let a =10;
let b = 24;
function largest (a,b){
  if (a>b){
    console.log("a is largest");
    
  }
  else{
    console.log("b is largest");
    
  }
}
largest(a,b);

// Write a function to swap two numbers.
let A = 25;
let B = 10;
function swap(A,B){
 return [B,A]
}
console.log(swap(A,B));



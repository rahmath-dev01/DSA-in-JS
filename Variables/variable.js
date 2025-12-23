// Type of Variables in JS
// ->var
// ->let
// ->const

//Var 
var a = 2;
var a = 23; // redeclare can be done 
a=99; // reassign can also be done
console.log(a);

//Let
let b=5;
b=12; //can be reassign 
// let b=15; //but can't be redeclare
console.log(b);

//const
const city1 ="Hyderabad";
//city=Delhi; // cant be reassign
//const city ="punjab" // can't be redeclared
console.log(city1);

// if const holds an object then you can change the content 
// Example
 const student = {name:"rahmath"};
 student.name ="Mohi";
 console.log(student.name);

 //Block scope ->{}
 //Function scope -> inside a function like "function age {};"
 // var ignore block scope which gives bugs
 //Example
 {
  var a = 11;
  let b = 20;
  const c = 30; 
 }
 console.log(a);
 //taking the the above value global scope 
 console.log(b);
//  console.log(c);

 



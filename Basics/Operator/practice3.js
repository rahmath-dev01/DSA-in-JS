console.log("Arithmetic operators");
// Arithmetic operators question
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log("Assignment operators");
// Assigment operator 

let x = 5;
 x += x;//10
 x -= 3;//7
 x *= 2;//14
 x /= 7;//2
 console.log(x); //now x value is 2

 console.log("Camparison operators");
 //camparison opeartors "===", "!==", ">", >= , <, <=. 
//compare two value 5 == "5" and 5 === "5";
let r = 5;
let s = "5";
console.log( r == s);//true only equal to "bug"
console.log( r === s);//false 
console.log( 5 === "5");//false bcz strict equal to "==="
//!== strict not equal to.
console.log(5 !== 10);//true
console.log(10 !== 10);//false

//>  and >= greater then or equal to 
console.log("greater then");
console.log(25>77);//false
console.log(20>=20);//true

let age1 = 20;
if (age1>=18){
  console.log(true);
}
else {
  console.log(false)
}
console.log("Less then");
//< or <= 
console.log(10<=12);//true

console.log("Logical operators");
//AND 
console.log(10>5 && 4>3);
//OR
console.log(5>3 || 10<8);
//NOT
console.log (!(10>5));

console.log("Ternary Operator")

let age = 20;
let message = age >=18 ? "Adult" : "Minor";
console.log(message); 






 










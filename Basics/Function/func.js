// syntax :- function function name(){
// logic
// }

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
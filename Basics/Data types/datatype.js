// In JavaScript, data types define the kind of value a variable can hold.
// They are divided into primitive and non-primitive (reference) types

//Primitive
//Primitive data types are basic, simple values that are stored directly in memory.
// When you copy them, you get a new, separate value.

//  Example:
// let a = 5; let b = a; → changing b won’t change a
let a =5;
let b = a;

b = 10;
console.log(b);
console.log(a);

// Reference
// Reference data types are complex or collection types (like objects, arrays, functions).
// They are stored by reference, meaning they point to the same memory location.
// So if one changes, the other also changes.

//Example
//let obj1 = { name: "Rahmath" }; let obj2 = obj1; → changing obj2 also changes obj1.
let obj1 ={name: "Rahmath"};
let obj2 = obj1;
obj2.name = "Mohiuddin";
console.log(obj1);
console.log(obj2);

//primitive - string, number, boolean, null, symbol, undefined, bigint.

//String -> text written in between "", '', ``.
 let username = "AZAM"
 console.log(username);

 //Number
 let rollno = 79; // number
 let marks = 89.8 // float
 console.log (rollno);
 console.log(marks)


 //boolean -> True false
 let playgames = true;
 let readbooks = false;
 console.log(playgames && readbooks);

 //null -> means user is empty or not yet assigned
 let user = null;
 //bug
 console.log(typeof user);// typeof null returns object -> this is a historical bug in js

 /*symbols ->A Symbol is a unique and immutable (unchangeable) value.
It’s mainly used to create unique property keys for objects keys that won’t accidentally conflict with other keys*/
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); //false

//undefined -> a variable in which the value is not assigned.
let ak;
console.log(ak);

//bigint ->In JavaScript, the maximum safe integer value you can use with the normal Numbertype
//Number.MAX_SAFE_INTEGER
// is:9007199254740991
 //BigInt is a special data type in JavaScript that lets you work with very large whole numbers  larger than what the normal Number type can safely handle.

let r = 9007199254740991n; // BigInt
let k = 10n;

let sum = a + b;
console.log(sum); // 9007199254741001n

//Array -> array is a collection of elements, which can be any data type.
let fruits = ["apple" , "banana" , "cherry", 22, true, null];
console.log(fruits[3]);
//Array is objects in js 
console.log(typeof fruits)//object

//Object -> object store data in key value pairs. Each property has name(key) and a value.

let person ={
  username: "Rahmath",
  Rollno : 160923737077,
  Branch : "INF"
}
console.log(person.Rollno);


 



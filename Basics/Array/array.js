// An array is a data structure used to store multiple values in a single variable
// Array elements are accessed using a zero-based index
// Arrays can store numbers, strings, mixed data types, and nested arrays
// They are widely used in DSA and problem solving
// Common operations include traversal, insertion, deletion, searching, and sorting
// Important array methods are push(), pop(), shift(), unshift(), and length
// Arrays can be traversed using for, for...of, and forEach() loops
// Higher-order methods like map(), filter(), and reduce() are used for data processing
// Arrays are reference types, so changes inside a function affect the original array

// Find the largest element in an array
let arr = [10, 25, 7, 90, 45];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// Find the sum of array elements

let arr1 = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(sum);

// Reverse an array
let arr2 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr2.length - 1; i >= 0; i--) {
  reversed.push(arr2[i]);
}
console.log(reversed);

// Count even and odd numbers
let arr3 = [1, 2, 3, 4, 5, 6];
let even = 0, odd = 0;

for (let num of arr3) {
  if (num % 2 === 0) even++;
  else odd++;
}

console.log("Even:", even, "Odd:", odd);

// Find second largest element
let arr4 = [10, 50, 30, 40, 20];
let largest = -Infinity;
let second = -Infinity;

for (let num of arr4) {
  if (num > largest) {
    second = largest;
    largest = num;
  } else if (num > second && num !== largest) {
    second = num;
  }
}

console.log(second);


// Remove duplicates from array

let arr5 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let num of arr5) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}
console.log(unique);







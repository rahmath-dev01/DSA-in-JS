// 1.print 1 to 10 using for

for(i=0;i<=10;i++){
  console.log(i)
}

//2. print even numbers between 1 to 20

 let i=0;
 while(i<=20){
 if(i%2===0){
 console.log(i);
 }
 i++
}


//3. print number from 10 to 1 using a while loop

let i=10;
while(i>=1){
  console.log(i)
  i--;
}

//4.print odd number from 1 to 15 using while loop

let i=0;
while(i<=20){
  if(i%2 === 1){
    console.log(i)
  }
  i++
}

//5. find the sum of no from 1 to 100 using a loop

let sum=0;
for(i=0;i<=100;i++){
  sum+=i;
}
console.log(sum);

// 6. print the multiplication table of 5

for(let i=1;i<=10;i++){
  console.log(`5*${i}=${5*i}`);
}

// 7. print all no that are divisble by 3 from 1-50

for(let i=0;i<=60;i++){
  if(i%3===0){
  console.log(i)
  }
}

//8. ask the user for a number and print whether each number is from 1 to that is even or odd

let value = prompt("enter number")
for(i=0;i<=value;i++){
 if(i%2 === 0){
  console.log(`${i} is even`);
 }else {
  console.log(`${i} is odd`);
 }
}


//9 print number from 10 to 1 using reverse loop 

for( let i=10;i>=1;i--){
  console.log(i);
}

// let count =0;
// for(let i=1;i<=15;i++){
//   if(i>8){
//     count++;
//   }
// }
// console.log(count);






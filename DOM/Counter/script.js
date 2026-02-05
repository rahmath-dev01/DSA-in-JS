let h1 = document.querySelector ('h1')
let inc =document.querySelector('#inc')
let dec =document.querySelector('#dec')
let reset =document.querySelector('#reset')
let a=0;

inc.addEventListener('click',function(){
  a++
  h1.innerHTML =a
})

dec.addEventListener('click',function(){
a--;
h1.innerHTML = a
})

reset.addEventListener('click',function(){

h1.innerHTML = a = 0
})

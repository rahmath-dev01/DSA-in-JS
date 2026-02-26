let btn = document.querySelector('button')
let box = document.querySelector('div')



let flag = 0
btn.addEventListener('click',function(){
 if(flag === 0 ){
  box.style.backgroundColor = 'yellowgreen'
  
  btn.innerHTML = 'OFF'
  flag = 1
 }
 else{
  box.style.backgroundColor = 'white'
  btn.innerHTML = 'ON'
  flag =0 
 }
})
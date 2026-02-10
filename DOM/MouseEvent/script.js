

let box = document.querySelector('div');

box.addEventListener('mouseenter',function(){
 box.style.backgroundColor ='yellow'
 box.style.cursor = 'pointer'
 let h1 =document.createElement('h1') 
 h1.innerHTML = 'hello'
 box.appendChild(h1)
})

box.addEventListener('mouseleave',function(){
 box.style.backgroundColor ='green'
 box.style.cursor = 'pointer'
})

let btn = document.querySelector('button')
let inner = document.querySelector('#inner')
let h1 = document.querySelector('h1')
let grow = 0
btn.addEventListener('click',function(){
  btn.style.pointerEvents = 'none'
  let num = 50 + Math.floor(Math.random()*50)
  
  let int = setInterval(() => {
    grow++
    h1.innerHTML = grow +'%'
    inner.style.width = grow+'%'
  }, num);
  
  setTimeout(() => {
    clearInterval(int)
    btn.innerText= 'Downloaded'
    btn.style.opacity = 0.5
    console.log('downloaded in',num/10 , 'seconds')
    
  }, num*100);
})
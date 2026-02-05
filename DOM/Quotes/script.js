

let btn = document.querySelector('button')
let main = document.querySelector('main')


let arr = ['Start now. Get better daily.',

'Small steps beat no steps.',

'Consistency creates confidence.',

'Don’t quit on hard days.',

'One hour today > someday.',

'Discipline > motivation.',

'Progress, not perfection.',

'Keep going. You’re closer.',

'Learn. Practice. Repeat.',

'Your future self is watching.']

btn.addEventListener('click', function(){
  let x = Math.random()*80
  let y = Math.random()*80
  let rot = Math.random()*360
   let scl = Math.random()*3
  let h1 = document.createElement('h1')
  let a = Math.floor(Math.random()*arr.length)
  
  h1.innerHTML= arr[a]

  h1.style.position = 'absolute'

  h1.style.left =  x+'%'
  h1.style.top = y+'%'
  h1.style.rotate = rot +'deg'
  h1.style.scale = scl
  main.appendChild(h1) 
  

})
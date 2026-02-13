const para = document.querySelector('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const txt = para.innerHTML
para.addEventListener('mouseenter', () => {
  
  
  const A = setInterval(()=> {
    
    const str = txt.split('').map((char, index)=>{
      return characters.split("")[Math.floor(Math.random()*53)]
      
    }).join('')
    
    para.innerHTML =str
  },30)

  setTimeout((  )=>{
    clearInterval(txt)

},100)
})
const para = document.querySelector('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const txt = para.innerHTML

let iteration =0

  para.addEventListener('mouseenter', function(){

 
  function randomtext(){
  const str = txt.split("").map((char,index)=>{
    if(index < iteration ){
      return char 
    }
    return characters.split("")[Math.floor(Math.random() *52)]
  }).join("")

  para.innerText = str
  iteration += 0.50
}
setInterval(randomtext , 30)
 })

addEventListener('mousemove',function(e){
  

  document.body.style.setProperty('--x', e.clientX + 'px')
  document.body.style.setProperty('--y', e.clientY + 'px')
})

  
  
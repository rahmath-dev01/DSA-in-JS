const para = document.querySelector('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const txt = para.innerHTML

let iteration =0


  function randomtext(){
  const str = txt.split("").map((char,index)=>{
    if(index < iteration ){
      return char 
    }
    return characters.split("")[Math.floor(Math.random() *52)]
  }).join("")

  para.innerText = str
  iteration += 0.25
}
setInterval(randomtext , 30)

  
  
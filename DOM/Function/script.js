let h1 = document.querySelector('h1')

window.addEventListener("keydown",function (dets){
 if(dets.key === " "){
  h1.textContent = "SPC"
 }else{
   console.log(dets.key)
   h1.textContent = dets.key;

 }
 
})


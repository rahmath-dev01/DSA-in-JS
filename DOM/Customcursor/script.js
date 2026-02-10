var cursor = document.querySelector('#cursor')
var body = document.body

body.addEventListener('mousemove',function(dets){
 
  cursor.style.left = dets.x + 'px'
  cursor.style.top = dets.y + 'px'
})
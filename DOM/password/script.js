let togglebtn  = document.querySelector('#show')
let password = document.querySelector('.password')


togglebtn.addEventListener('click', function(){
  if(password.type === 'password'){
    password.type = 'text';
    togglebtn.innerHTML ='Hide'
  }
  else{
    password.type = 'password'
    togglebtn.innerHTML ='Show'
  }
  
})
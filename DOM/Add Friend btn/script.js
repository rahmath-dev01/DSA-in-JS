
let buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function () {

    if (btn.innerHTML === 'Follow') {
      btn.style.color = 'black';
      btn.style.backgroundColor = 'lightgray';
      btn.innerHTML = 'Following';
     
    } 
    else {
      btn.style.color = 'white';
      btn.style.backgroundColor = 'rgb(20, 20, 241)';
      btn.innerHTML = 'Follow';
      
    }

  });
});



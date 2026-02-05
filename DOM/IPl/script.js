
let arr =[
  {
    Team: 'CSK',
    primary:'yellow',
    secondary : 'blue',
    captain : 'MSD',
    tropies : 5,
  },
    {
    Team: 'RCB',
    primary:'red',
    secondary : 'blue',
    captain : 'Virat',
    tropies : 1,
  },
    {
    Team: 'SRH',
    primary:'orange',
    secondary : 'black',
    captain : 'Cummins',
    tropies : 1,
  },
    {
    Team: 'PBSK',
    primary:'crimson',
    secondary : 'gray',
    captain : 'Iyer',
    tropies : 0,
  },
    {
    Team: 'MI',
    primary:'blue',
    secondary : 'gold',
    captain : 'Rohit',
    tropies : 5,
  }
]
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let btn = document.querySelector('button')
let div = document.querySelector('div')
let body = document.querySelector('body')


btn.addEventListener('click',function(){
  let a= Math.floor(Math.random()*arr.length)
  h1.innerHTML = arr[a].Team;
  h2.innerHTML = arr[a].captain;
  h3.innerHTML = arr[a].tropies;
  div.style.backgroundColor = arr[a].primary;
  body.style.backgroundColor = arr[a].secondary;
  
})


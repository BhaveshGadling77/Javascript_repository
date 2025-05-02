const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

//events 
buttons.forEach( function (button) {
//  console.log(button);
 button.addEventListener('click', function (event){
     body.style.background = event.target.id;
 })
})
let timer = document.getElementById('clock')
let date = new Date()
//1000 milisecond
setInterval(function(){
// console.log(date.toLocaleTimeString());
  timer.innerHTML = date.toLocaleTimeString();
}, 1000)
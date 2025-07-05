let timer = document.getElementById('clock')

//1000 milisecond
setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleTimeString());
  timer.innerHTML = date.toLocaleTimeString();
}, 1000)
//generate a random hex code for color
const randomColor = () => {
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++) {
      let indx = Math.floor(Math.random()* 16)
      color += hex[indx];
    }
    // console.log(color);
    return color;
  }
  let intervalId;
  //  randomColor()
  document.querySelector('#start').addEventListener('click', () => {
    if(!intervalId) {
       
    intervalId =  setInterval(() => {
      let color = randomColor()
     document.querySelector('body').style.background = color;
    }, 1000);
    }
    
  })
  document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = null
  })
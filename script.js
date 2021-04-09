const myInput = document.getElementById('input-button');
const breakStart = document.getElementById('break');
const enterTime = document.querySelector('#submit');
const myHour = document.getElementById('hour');
const myMin = document.getElementById('min');
const mySec = document.getElementById('sec');
const beep = new Audio('mixkit-classic-alarm-995.wav');

const userHour = document.getElementById('time-hour').value
const userMin = document.getElementById('time-min').value
let totalSeconds = Math.floor(userHour *60 *60) + Math.floor(userMin * 60);
let breakSeconds = Math.floor(totalSeconds / 4);


document.getElementById('break').style.display = 'none';
myInput.addEventListener('click', setTime);
breakStart.addEventListener('click', breakTime);


function setTime() {

  const timer = setInterval(function(){
    if (totalSeconds <= -1) {
            
      clearInterval(timer);
      document.getElementById('program').innerHTML = 'Work-Break Timer'
      document.getElementById('input').style.display = 'flex';
      document.getElementById('submit').style.display = 'none'; 
      document.getElementById('input-text').style.display = 'none'; 
      document.getElementById('input-box').style.display = 'none'; 
      document.getElementById('break').style.display='inline';
      return
    } else {
    document.getElementById('program').innerHTML = 'Time to work'
    document.getElementById('submit').style.display = 'none';
    document.getElementById('input').style.display = 'none';
    document.getElementById('timer').style.marginTop = '20vh';

    let hour = Math.floor(totalSeconds / 3600) % 24;
    let min = Math.floor(totalSeconds / 60) % 60;
    let sec = Math.floor(totalSeconds) % 60;

    myHour.innerHTML = hour;
    myMin.innerHTML = min;
    mySec.innerHTML = sec;
    totalSeconds--
    if (totalSeconds <= -1) {
      document.getElementId('beep').play()
    }
    } 
  }, 1000);  
}


function breakTime() {
  console.log(userHour);
  console.log(userMin);
  console.log(breakSeconds);
  const breakTimer = setInterval(function(){
    if (breakSeconds <= -1) {      
      clearInterval(breakTimer);
      document.getElementById('input').style.display = 'flex';
      document.getElementById('submit').style.display = 'inline'; 
      document.getElementById('input-text').style.display = 'inline'; 
      document.getElementById('input-box').style.display = 'inline';
      document.getElementById('break').style.display='none';
      location.reload()
    } else {
      document.getElementById('program').innerHTML = 'Break Time'
      document.getElementById('input').style.display = 'none';
      let hour = Math.floor(breakSeconds / 3600) % 24;
      let min = Math.floor(breakSeconds / 60) % 60;
      let sec = Math.floor(breakSeconds) % 60;

      myHour.innerHTML = hour;
      myMin.innerHTML = min;
      mySec.innerHTML = sec;
      breakSeconds--
    } 
  }, 1000);
}
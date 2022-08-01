 console.log('This is project5');
// var audio = new Audio('https://freesound.org/data/previews/316/316847_4939433-lq.mp3');
// audio.play();

let alarm = document.getElementById("alarm"); 
let alarmSubmit = document.getElementById("alarmSubmit");

alarmSubmit.addEventListener("click", runAlarm);
 
 function alarmBell(){
    let audio = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
    audio.play();
 }

function runAlarm(e){
    e.preventDefault();
    console.log("runAlarm called");
    
    inputAlarm = new Date(alarm.value);
    console.log(inputAlarm);
  now = new Date();
  let setAlarmTime = inputAlarm - now;
  console.log(setAlarmTime);

   setTimeout(() => {
    console.log("alarm Ringing");
    alarmBell();
   }, setAlarmTime);
  }


 
const starStopBn=document.querySelector('#starStopBtn');
const restartBtn=document.querySelector('#restartBtn');

let seconds=0;
let minutes=0;
let hours=0;

let leadingsecond=0;
let leadingminute=0;
let leadinghour=0;

let timerinterval=null;
let timerstatus="stopped";

function stopwatch(){
     
    seconds++;
    if(seconds/60===1){
        minutes++;

        if(minutes/60===1){
            hours++;
        }
    }
    if(seconds<10){
        leadingsecond="0"+seconds.toString();
    }else{
        leadingsecond=seconds;
    }
    if(minutes<10){
        leadingminute="0"+minutes.toString();
    }else{
        leadingminute=minutes;
    }
    if(hours<10){
        leadinghour="0"+hours.toString();
    }else{
        leadinghour=hours;
    }
}

let displayTimer=document.getElementById('timer').innerText=leadinghour.toString() + ":" leadingminute.toString() +  ":" leadingsecond.toString();



starStopBn.addEventListener('click',stopwatch)
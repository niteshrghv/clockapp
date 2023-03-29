// Start-Stop______________
const timer=()=>{
    let newDate=new Date();
    document.getElementById("timer").innerHTML=newDate.toLocaleTimeString();
}
let interval;
const startTimer=()=>{
    interval=setInterval(timer, 1000);
}
const stopTimer=()=>clearInterval(interval);



// BackGroundColor Changing______________
const colorChangeFun=()=>{
    document.body.style.backgroundColor ='rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}
let intervalBG;
const colorChange=()=>{
    intervalBG=setInterval(colorChangeFun, 3000);
}
const stopColorChange=()=>clearInterval(intervalBG);   



// Hands moving______________
const secondHand = document.querySelector('.sec');
const minsHand = document.querySelector('.min');
const hourHand = document.querySelector('.hr');

function clockTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

let clock;
const startClock=()=>{
    clock=setInterval(clockTime, 1000);
}
const stopClock=()=>clearInterval(clock);

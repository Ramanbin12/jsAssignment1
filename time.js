// let start=document.getElementById("start");
// let stop=document.getElementById("stop");
// let pause=document.getElementById("pause");
let displayTime=document.getElementById("displayTime")
let hours=0;
let min=0;
let sec=0;
let timer=null;
function stopwatch(){
sec++;
if(sec==60){
    sec=0;
    min++;
}
if(min==60){
min=0;
hours++;
}
let h=hours<10?"0"+hours :hours;
let m=min<10?"0"+min :min;
let s=sec<10?"0"+sec :sec;
displayTime.innerHTML = `${h} : ${m} : ${s}`;
}

function start(){
    if(timer!=null){
        clearInterval(timer)
    }
   timer= setInterval(stopwatch,1000);
}
function pause(){
    clearInterval(timer);
}
function stop(){
    clearInterval(timer)
    hours=0;
    min=0;
    sec=0;
    displayTime.innerHTML = "00 : 00 : 00";

}
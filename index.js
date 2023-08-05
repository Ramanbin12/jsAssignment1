
//BMI Calculator

function calculate(){
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
    let bmi=(weight)/((height/100)*(height/100));
    let res=bmi.toFixed(2);
    document.getElementById("result").innerHTML=`Your BMI is ${res}`
}
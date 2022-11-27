// geting id and classes
//start btn id
var startTimmerBtn = document.getElementById('start-timmer');

//stop btn id
var stopTimmerBrn = document.getElementById('stop-timmer');

//reset btn id
var resetTimmerBrn = document.getElementById('reset-timmer');

//reset btn id
var counter = document.getElementsByClassName('counter');


//adding event listen 
//start 
startTimmerBtn.addEventListener("click", startTimmer);

//stop
stopTimmerBrn.addEventListener('click',stopTimmer);

//reset
resetTimmerBrn.addEventListener('click',resetTimmer)

//Globle values for timmer 
let count0=0,count1=0,count2=0,count3=0;
var intervalId;

function startTimmer() {

    //after timmer start start btn is disabled
    startTimmerBtn.disabled=true;
    
    intervalId = setInterval(start, 10);

    function start() 
    {
        count3++;
        counter[3].innerHTML = count3;

        if (count3 > 9 && count2<6) {
            count3 = 0;
            count2++;
            console.log(count2);

            counter[2].innerHTML = count2;

            counter[3].innerHTML = count3;
        }
        else if(count2>=6 && count1<10){
            count1++;
            count2 = 0;
            count3 = 0;
            console.log("this is working");
            counter[1].innerHTML = count1;
            counter[2].innerHTML = count2;
            counter[3].innerHTML = count3;
        }
        else if(count1==10 && count0<6){
          
            count0++;
            count1 = 0;
            count2 = 0;
            count3 = 0;
          
            counter[0].innerHTML = count0;
            counter[1].innerHTML = count1;
            counter[2].innerHTML = count2;
            counter[3].innerHTML = count3;
        }
        else if(count0==6){
            clearInterval(intervalId);
            
            count1 = 0;
            count2 = 0;
            count3 = 0;
            counter[0].innerHTML = count0;
            counter[1].innerHTML = count1;
            counter[2].innerHTML = count2;
            counter[3].innerHTML = count3;
        }
    }
}

//stop timmer function
function stopTimmer(){

    if(intervalId!=undefined){
        clearInterval(intervalId);
        startTimmerBtn.disabled=false;
    }
    else{
        alert("First Start Stopwatch");
    }
}

//reset timmer function
function resetTimmer(){
    if(intervalId!=undefined){
        count0=0;
        count1=0;
        count2=0;
        count3=0;
        counter[0].innerHTML=count0;
        counter[1].innerHTML=count1;
        counter[2].innerHTML=count2;
        counter[3].innerHTML=count3;

        clearInterval(intervalId);
        intervalId=undefined;
        startTimmerBtn.disabled=false;
    }
    else{
        alert("First Start Timmer ")
    }
}
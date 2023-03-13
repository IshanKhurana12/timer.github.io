const start=document.getElementById('start');


const stop=document.getElementById('stop');


const reset=document.getElementById('reset');


//my timer function
let i = 0;
function myTimer() {
  document.getElementById("time").innerHTML = i;
  i++;
}

///adding click to starrt the timer
start.addEventListener("click",function(){
   myInterval=setInterval(myTimer,1000);
});


/// addimg event to stop the timer
stop.addEventListener("click",function(){
    clearInterval(myInterval);
    myInterval=null
})



//to clear the Timer;
reset.addEventListener("click",function(){
    clearInterval(myInterval)
    i=0;
    document.getElementById("time").innerHTML = 0;

})


















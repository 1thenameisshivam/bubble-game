var clutter="";
var rn=0;
var timer=60;
var score=0;

function bubblemaker(){
    for(var i=1;i<=161;i++){
       var rndm=Math.floor(Math.random()*10);
        clutter += `<div class="bubble"><h3>${rndm}</h3></div>`;
    }
    
    document.querySelector(".pbotm").innerHTML=clutter;
    clutter="";
}


function runtimer(){
   var timeinterval= setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector(".elem #timer").textContent=timer;
        }
        else{
             clearInterval(timeinterval);
             document.querySelector(".pbotm").innerHTML=`<h1>GAME OVER</h1>`
        }
    },1000)
};

function newhit(){
      rn=Math.floor(Math.random()*10);
      document.querySelector("#hitval").textContent=rn;
}

function increasescore(){
    score+=10;
    document.querySelector("#nscore").textContent=score;
}

document.querySelector(".pbotm").addEventListener("click" , function(detail){
        var matchno = Number(detail.target.textContent);
        if(rn===matchno){
            increasescore();
            bubblemaker();
            newhit();
        } 
});


runtimer();
bubblemaker();
newhit();

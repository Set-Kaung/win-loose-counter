let winIncreBtn = document.querySelector(".winIncrement");
let winText = document.querySelector(".win");
let looseIncreBtn = document.querySelector(".looseIncrement");
let looseText = document.querySelector(".loose");
let percentageText = document.querySelector(".percentage");
let resetBtn = document.querySelector(".reset");
let winDecreBtn = document.querySelector(".winDecrement");
let looseDecreBtn = document.querySelector(".looseDecrement");


let win = 0;
let loose = 0;
let percentage = 0;

function updateUI(){
    winText.textContent = win +"W";
    looseText.textContent = loose + "L"
    percentageText.textContent = percentage +"%";
}

function winIncrement(){
    win++;
    calcPercentage();
    updateUI();
}

function looseIncrement(){
    loose++;
    calcPercentage();
    updateUI();
}

function winDecrement(){
    if(win>0){
        win--;
    }
    calcPercentage();
    updateUI();
}

function looseDecrement(){
    if(loose>0){
        loose--;
    }
    calcPercentage();
    updateUI();
}

function reset(){
    win = 0;
    loose=0;
    percentage=0;
    updateUI();
}

function calcPercentage(){
    if(win==0 && loose ==0){
        percentage =0;
    }else{
        percentage = (win /(win+loose)) *100;
        percentage = Math.round(percentage*100)/100;
    }
    
}

winIncreBtn.addEventListener("click", winIncrement);
looseIncreBtn.addEventListener("click", looseIncrement);
resetBtn.addEventListener("click",reset);
winDecreBtn.addEventListener("click",winDecrement);
looseDecreBtn.addEventListener("click",looseDecrement)
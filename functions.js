//First
var randii = Math.random();
randii = randii*6;
randii = Math.ceil(randii);
//Second
var randii1 = Math.random();
randii1 = randii1*6;
randii1 = Math.ceil(randii1);
console.log(randii);
console.log(randii1);
if(randii>randii1){
document.querySelector("#refresh").innerHTML="Player 1 WINS";
}
else if(randii === randii1){
document.querySelector("#refresh").innerHTML="DRAW";
}
else{
document.querySelector("#refresh").innerHTML="Player 2 WINS";    
}

if(randii === 1){
document.querySelector(".img1").setAttribute("src","dice1.png");    
}
else if(randii === 2){
document.querySelector(".img1").setAttribute("src","dice2.png");    
}
else if(randii === 3){
document.querySelector(".img1").setAttribute("src","dice3.png");    
}
else if(randii === 4){
document.querySelector(".img1").setAttribute("src","dice4.png");    
}
else if(randii === 5){
document.querySelector(".img1").setAttribute("src","dice5.png");    
}
else if(randii === 6){
document.querySelector(".img1").setAttribute("src","dice6.png");    
}
//Second Dice
if(randii1 === 1){
document.querySelector(".img2").setAttribute("src","dice1.png");    
}
else if(randii1 === 2){
document.querySelector(".img2").setAttribute("src","dice2.png");    
}
else if(randii1 === 3){
document.querySelector(".img2").setAttribute("src","dice3.png");    
}
else if(randii1 === 4){
document.querySelector(".img2").setAttribute("src","dice4.png");    
}
else if(randii1 === 5){
document.querySelector(".img2").setAttribute("src","dice5.png");    
}
else if(randii1 === 6){
document.querySelector(".img2").setAttribute("src","dice6.png");    
}



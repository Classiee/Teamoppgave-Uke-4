const washBar = document.getElementById('washColor');
const foodBar = document.getElementById('healthColor');
const playBar = document.getElementById('playColor');
var foodProgress = 100;
var washProgress = 100;
var playProgress = 100;

var minTimer;
timer()
function timer(){
minTimer = setInterval(decay, 1000);
}

function decay() {
    washBar.style.height = washProgress + '%';
    playBar.style.height = playProgress + '%'; 
    foodBar.style.width = foodProgress + '%';

    foodProgress -= 5;
    washProgress -= 5;
    playProgress -= 5;

if (foodProgress <= 30) {
    badHealth();
    foodBar.style.backgroundColor = 'red';
}
if (washProgress <= 30) {
    badHealth();
    washBar.style.backgroundColor = 'red';
}
if (playProgress <= 30){
    badHealth();
    playBar.style.backgroundColor = 'red';
}
if (foodProgress == -5){
    dead();
}
if (washProgress == -5) {
    dead();
}

if (playProgress == -5){
    dead();  
}
   
}
function hungry() {
    document.getElementById('textContainer').innerHTML += '<li>Du har mada dyret! </li>';
    foodBar.style.backgroundColor = 'rgb(236, 78, 78)';
    foodProgress = 100;
    goodHealth();
}

function playMe() {
    document.getElementById('textContainer').innerHTML += `<li> Du har lekt med dyret! </li>`;
    playBar.style.backgroundColor = 'lightyellow;' 
    playProgress = 100;
    goodHealth();

}
function dirty(){
    document.getElementById('textContainer').innerHTML += `<li> Du har vaska dyret! </li>`;
    washBar.style.backgroundColor = 'lightblue';
    washProgress = 100;
    goodHealth();
}

function goodHealth(){
    document.getElementById('imageContainer').innerHTML = `
    <img id="pet" src="/img/happyChicken.png" alt="Pet">
    `;    
  
}
function badHealth(){
    document.getElementById('imageContainer').innerHTML = `
    <img id="pet" src="img/MadChicken.png" alt="Pet">
    `;    
   
}
function dead(){
    document.getElementById('imageContainer').innerHTML = `
    <img id="pet" src="img/deadChicken.png" alt="Pet">
    `;    

    clearInterval(minTimer);
}
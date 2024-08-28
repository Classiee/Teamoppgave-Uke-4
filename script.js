const washBar = document.getElementById('washColor');
const foodBar = document.getElementById('healthColor');
const playBar = document.getElementById('playColor');
let textContainer = document.getElementById('textContainer')
let imageContainer = document.getElementById('imageContainer')
let changeText = document.getElementById('text')
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
    
if (foodProgress == -10 || washProgress == -10 || playProgress == -10){
    dead();
    textContainer.innerHTML += `<li> Ahhhhh, jeg døde! </li><br>`;
}
if (foodProgress == 30) {
    badHealth();
    foodBar.style.backgroundColor = 'red';
}
if (washProgress == 30) {
    badHealth();
    washBar.style.backgroundColor = 'red';
}
if (playProgress == 30){
    badHealth();
    playBar.style.backgroundColor = 'red';
}
if (playProgress == 30 || washProgress == 30 || foodProgress == 30) {
    textContainer.innerHTML += `<li> Hjelp, jeg dør! </li><br>`;
}
if (foodProgress == 50) {
    badHealth();
    foodBar.style.backgroundColor = 'orange';
    textContainer.innerHTML += `<li> Jeg er sulten, gi meg noen kyllingvinger! </li><br>`;
}
if (washProgress == 50) {
    badHealth();
    washBar.style.backgroundColor = 'orange';
    textContainer.innerHTML += `<li> Jeg trenger en runde med hageslangen! </li><br>`;
}
if (playProgress == 50){
    badHealth();
    playBar.style.backgroundColor = 'orange';
    textContainer.innerHTML += `<li> Lek med meg! </li><br>`;
}
/**/



if (foodProgress == 70) {
    //medHealth();
    foodBar.style.backgroundColor = 'yellow';
    textContainer.innerHTML += `<li> Jeg kunne gjerne spist et egg nå! </li><br>`;
}

if (washProgress == 70) {
    //medHealth();
    textContainer.innerHTML += `<li> Jeg trenger en kattevask! </li><br>`;
    washBar.style.backgroundColor = 'yellow';
}
if (playProgress == 70){
    //medHealth();
    playBar.style.backgroundColor = 'yellow';
    textContainer.innerHTML += `<li> Kan man dø av kjedsomhet?! </li><br>`;
}

// if (foodProgress == 100 && foodProgress >= 70) {
//     goodhealth();
// }
// if (playProgress == 100 && playProgress >= 70) {
//     goodhealth();
// }

// if (washProgress == 100 && washProgress >= 70) {
//     goodhealth();
// }


// For å redusere IF statements, og i tillegg gjøre funksjonen mer presis og pålitelig
// (Kristian's input, NOT TO USE!)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// function updateProgressBar(bar, progress, type) {
//     if (type === 'height') {
//         bar.style.height = progress + '%';
//     } else if (type === 'width') {
//         bar.style.width = progress + '%';
//     }

//     if (progress <= 30) {
//         badHealth();
//         bar.style.backgroundColor = 'red';
//     } else if (progress == 45) {
//         medHealthMinus();
//         bar.style.backgroundColor = 'orange';
//     } else if (progress == 70) {
//         bar.style.backgroundColor = 'yellow';
//     }
// }

// function decay() {
//     updateProgressBar(washBar, washProgress, 'height');
//     updateProgressBar(playBar, playProgress, 'height');
//     updateProgressBar(foodBar, foodProgress, 'width');

//     foodProgress -= 5;
//     washProgress -= 5;
//     playProgress -= 5;

//     if (foodProgress <= -10 || washProgress <= -10 || playProgress <= -10) {
//         dead();
//     }
// }
   
}
function hungry() {
    textContainer.innerHTML += '<li>Du har mada dyret! </li>';
    foodBar.style.backgroundColor = 'lightgreen';
    foodProgress = 100;
    goodHealth();
}

function playMe() {
   textContainer.innerHTML += `<li> Du har lekt med dyret! </li>`;
    playBar.style.backgroundColor = 'lightgreen' 
    playProgress = 100;
    goodHealth();

}
function dirty(){
    textContainer.innerHTML += `<li> Du har vaska dyret! </li>`;
    washBar.style.backgroundColor = 'lightgreen';
    washProgress = 100;
    goodHealth();
}

function goodHealth(){
    imageContainer.innerHTML = `
    <img id="pet" src="img/happyChicken.png" alt="Pet">
    `;    
    }
/*function medHealth() {
      imageContainer.innerHTML = `
        <img id=pet src="img/SleepingChicken.png" alt="Pet">`;
    }
    function medHealthMinus() {
        imageContainer.innerHTML = `
        <img id=pet src="img/SleepingHungryChicken.png" alt="Pet">`;
    }
*/
function badHealth(){
    imageContainer.innerHTML = `
    <img id="pet" src="img/MadChicken.png" alt="Pet">
    `;    
   
}
function dead(){
    changeText.innerHTML = 'Døde'
   imageContainer.innerHTML = `
    <img id="pet" src="img/deadChicken.png" alt="Pet">
    `;    
    clearInterval(minTimer);
}

function popupRefresh(){
      location.reload();   
}

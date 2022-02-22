console.log("Javascript Intialized");
const hi = new Audio('./audio/hi.wav');
const lo = new Audio('./audio/lo.wav');
let bpm = 70;
import Timer from './timer.js';

document.addEventListener("DOMContentLoaded", function(event){
document.querySelector('#submit').addEventListener('click', e =>{
    e.preventDefault();
    console.log("Start Button Pressed");
    let bars = document.querySelector('#bars').value;
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    console.log(bars);
    console.log(min);
    console.log(max);
    if (bars == 0 || max < min || min == max) {
        alert (`Bars (${bars}) must be greater than 0 and the minimum tempo (${min}) must be greater than the maximum (${max}).`);
    }
    else {
        return;
    }
});

document.querySelector('#stop').addEventListener('click', e =>{
    console.log("Stop Button Pressed");
});

});

function playClick(){
    hi.play();
}

const metronome = new Timer(playClick, 60000 / 70, { immediate: true });

metronome.start();
console.log("temp");
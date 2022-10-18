console.log("Javascript Intialized");
const hi = new Audio('./audio/hi.wav');
const lo = new Audio('./audio/lo.wav');
const currentTempo = document.getElementById("current-tempo");
import Timer from './timer.js';
let count = 0; //current quarter beat count
let min = 70; //minimum bpm
let max = 110; //maximum bpm
let bpm = 70; //current bpm
let bars = 1; // number of bars to be run before tempo change
let bar = 0; //counter of current bar

document.addEventListener("DOMContentLoaded", function(event){
document.querySelector('#submit').addEventListener('click', e =>{
    e.preventDefault();
    console.log("Start Button Pressed");
    bars = document.querySelector('#bars').value;
    min = document.querySelector('#min').value;
    max = document.querySelector('#max').value;
    console.log(`Bars: ${bars}`);
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
    if (bars <= 0 || min == max) {
        alert (`Bars (${bars}) must be greater than 0 and the minimum tempo (${min}) must be greater than the maximum (${max}).`);
    }
    else {
        generateBPM();
        metronome.timeInterval = 60000 / bpm;
        metronome.start();
        currentTempo.innerHTML = bpm.toString();
        console.log(bpm);
    }
});

document.querySelector('#stop').addEventListener('click', e =>{
    console.log("Stop Button Pressed");
    metronome.stop();
    count = 0;
    bar = 0;
});

});


function playClick() {
    if (count === 0) {
        hi.play();
        hi.currentTime = 0;
    }

    if (count < 4){
        lo.play();
        lo.currentTime = 0;
    }
   if (count === 4) {
        count = 0;
        bar++;
   }
    else if (bar == bars) {
        hi.play();
        hi.currentTime = 0;
        bar = 0;
        generateBPM();
        metronome.timeInterval = 60000 / bpm
        currentTempo.innerHTML = bpm.toString();
        console.log(`New Tempo ${bpm}`)
    }

    count++;
    console.log("Count: " + count);

}

function generateBPM() {
    bpm = Math.floor(Math.random() * (max - min)) + parseInt(min);
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });


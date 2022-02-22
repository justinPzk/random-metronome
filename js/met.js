console.log("Javascript Intialized");
const hi = new Audio('./audio/hi.wav');
const lo = new Audio('./audio/lo.wav');
import Timer from './timer.js';
let count = 0;
let min = 70;
let max = 110;
let bpm = 70;
let playing = false;
let bars = 1;
let bar = 0;

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
    if (bars == 0 || min == max) {
        alert (`Bars (${bars}) must be greater than 0 and the minimum tempo (${min}) must be greater than the maximum (${max}).`);
    }
    else {
        bpm = Math.floor(Math.random() * (max - min)) + parseInt(min);
        playing = true;
        metronome.timeInterval = 60000 / bpm;
        metronome.start();
        document.getElementById("current-tempo").innerHTML = bpm.toString();
        console.log(bpm);
    }
});

document.querySelector('#stop').addEventListener('click', e =>{
    console.log("Stop Button Pressed");
    metronome.stop();
    count = 0;
    bar = 0;
    playing = false;
});

});


function playClick() {
    if (count === 4) {
        count = 0;
        bar++;
    }
    if (bar == bars) {
        bar = 0;
        let newbpm = Math.floor(Math.random() * (max - min)) + parseInt(min);
        metronome.timeInterval = 60000 / newbpm
        document.getElementById("current-tempo").innerHTML = newbpm.toString();
        console.log(`New Tempo ${newbpm}`)
    }
    if (count === 0) {
        hi.play();
        hi.currentTime = 0;
    } else{
        lo.play();
        lo.currentTime = 0;
    }

    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });


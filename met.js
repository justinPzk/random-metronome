console.log("Javascript Intialized");


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
    if (min > max){
        alert (`Your minimum tempo is ${min}bpm, which is greater than the maximum tempo of ${max}bpm. Please assure that the minimum tempo is less than the maximum!`);
    }
    else if (min = max) {
        alert (`You entered ${min}bpm as both values. Please make the maximum tempo greater than the minimum!`)
    }
    else {
        return;
    }
});

document.querySelector('#stop').addEventListener('click', e =>{
    console.log("Stop Button Pressed");
});

});
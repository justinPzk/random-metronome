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
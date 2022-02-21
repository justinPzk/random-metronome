console.log("Javascript Intialized");


document.addEventListener("DOMContentLoaded", function(event){
document.querySelector('#submit').addEventListener('click', e =>{
    e.preventDefault();
    let bars = document.querySelector('#bars').value;
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    console.log(bars);
    console.log(min);
    console.log(max);

});
});
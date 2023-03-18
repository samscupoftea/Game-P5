// CREATE VARIABLES CALLED "HOLE" AND "BLOCK"
let block = document.getElementById("block");
let hole = document.getElementById("hole");
// CREATE EVENT LISTENER ON THE "HOLE" ELEMENT THAT RUNS AFTER EVERY ANIMATION. 
hole.addEventListener('animationiteration' , () => {
    let random = ((Math.random()*300)+150);
    hole.style.top = random + "px";


});

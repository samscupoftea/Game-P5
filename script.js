// CREATE VARIABLES CALLED "HOLE" AND "BLOCK"
let block = document.getElementById("block");
let hole = document.getElementById("hole");
// CREATE EVENT LISTENER ON THE "HOLE" ELEMENT THAT RUNS AFTER EVERY ANIMATION. 
hole.addEventListener('animationiteration' , () => {
    //GETS RANDOM NUMBER BETWEEN 0 AND 1, TIMES 300 AND PLUS 150 SO IT RETURNS NUMBER BETWEEN 150 AND 450. THESE ARE THE MARGINS DEFINED BY OUR CSS. WE NOW ADD NEGATIVE AS OUR TOP FOR " HOLE"IN CSS WAS NEGATIVE 500PX.
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
});

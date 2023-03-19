// CREATE VARIABLES CALLED "HOLE" AND "BLOCK"
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
// CREATE EVENT LISTENER ON THE "HOLE" ELEMENT THAT RUNS AFTER EVERY ANIMATION. 
hole.addEventListener('animationiteration' , () => {
    //GETS RANDOM NUMBER BETWEEN 0 AND 1, TIMES 300 AND PLUS 150 SO IT RETURNS NUMBER BETWEEN 150 AND 450. THESE ARE THE MARGINS DEFINED BY OUR CSS. WE NOW ADD NEGATIVE AS OUR TOP FOR " HOLE"IN CSS WAS NEGATIVE 500PX.
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
});
//ADD FUNCTION SIMILAR TO GRAVITY WHEREBY THE CHARACTER CONSTANTLY FALLS TO THE BOTTOM. 
//1st SET INTERVAL FUNCTION THAT RUNS EVERY TEN MILLESECONDS SECONDS. 
setInterval(function(){
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top = (characterTop+3) +"px";
    }
},10);
//NOW TO CREATE JUMPING FUNCTION
//FIRST CREATE JUMP FUNCTION 

function jump(){
    jumping = 1;
    letJumpCount =0;
    let jumpInterval = setInterval(function(){
        jumpCount++;

    },10);

}

// CREATE VARIABLES CALLED "HOLE" AND "BLOCK"
//let block = document.getElementById("block");
//let hole = document.getElementById("hole");
//let character = document.getElementById("character");
// CREATE EVENT LISTENER ON THE "HOLE" ELEMENT THAT RUNS AFTER EVERY ANIMATION. 
//hole.addEventListener('animationiteration' , () => {
//GETS RANDOM NUMBER BETWEEN 0 AND 1, TIMES 300 AND PLUS 150 SO IT RETURNS NUMBER BETWEEN 150 AND 450. THESE ARE THE MARGINS DEFINED BY OUR CSS. WE NOW ADD NEGATIVE AS OUR TOP FOR " HOLE"IN CSS WAS NEGATIVE 500PX.
//let random = -((Math.random()*300)+150);
//hole.style.top = random + "px";
//});
//ADD FUNCTION SIMILAR TO GRAVITY WHEREBY THE CHARACTER CONSTANTLY FALLS TO THE BOTTOM. 
//1st SET INTERVAL FUNCTION THAT RUNS EVERY TEN MILLESECONDS SECONDS. 
//setInterval(function(){
//let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
// if(jumping==0){
// character.style.top = (characterTop+3) +"px";
//   }
//},10);
//NOW TO CREATE JUMPING FUNCTION
//FIRST CREATE JUMP FUNCTION 

//function jump(){
// jumping = 1;
//letJumpCount = 0;
// let jumpInterval = setInterval(function(){
//let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//if((characterTop>6)&&(jumpCount<15)){
// character.style.top = (characterTop-5) +"px"; 
// }  
//  if(jumpCount>20){
//clearInterval(jumpInterval);
// jumping=0;
// jumpCount=0;

// }
//  jumpCount++;
// },10);

//
// Re-done 

const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});
setInterval(function () {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500 - characterTop);
    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert("Game over. Score: " + (counter - 1));
        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    const jumpInterval = setInterval(function () {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 4) + "px";
        }
        if (jumpCount > 12) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}

// Below is template script to a possible game structure. But it's not the way i want the gam eot operate. I am going to build it from the ground up taking instruction from the game tutorials I have followed. 

// <script>
//     // Game variables
//     let attacker;
//     let defender;
//     let round = 1;
//     let attackerScore = 0;
//     let defenderScore = 0;
//     let currentPlayer = "Attacker";

//     // Game elements
//     const roleElement = document.getElementById('role');
//     const startButton = document.getElementById('startBtn');
//     const messageElement = document.getElementById('message');
//     const directionsElement = document.getElementById('directions');
//     const directionButtons = document.getElementsByClassName('directionBtn');

//     // Display the Attacker and Defender roles
//     const displayRoles = () => {
//         roleElement.textContent = `Round ${round}: Attacker (${attacker}) vs Defender (${defender})`;
//     };

//     // Event handler for direction selection
//     const directionClickHandler = (event) => {
//       const direction = event.target.textContent;
//     const currentPlayerDirection = direction;

//     if (currentPlayer === "Attacker") {
//         // Attacker's turn
//         attacker = currentPlayerDirection;
//     directionsElement.textContent = `Defender, point your head in a direction (up, down, left, or right).`;
//     currentPlayer = "Defender";
//       } else {
//         // Defender's turn
//         defender = currentPlayerDirection;

//     if (attacker !== defender) {
//         // Defender wins the round
//         defenderScore++;
//     messageElement.textContent = 'Defender wins the round!';
//         } else {
//         // Attacker wins the round
//         attackerScore++;
//     messageElement.textContent = 'Attacker wins the round and hits the Defender!';
//         }
//     round++;

//     // Switch roles if the Defender wins or Attacker reaches 3 points
//     if (defender !== attacker || attackerScore === 3) {
//           const temp = attacker;
//     attacker = defender;
//     defender = temp;
//         }

//     displayRoles();

//     // Check if the game is over
//     if (attackerScore === 3) {
//         messageElement.textContent = 'Attacker wins the game!';
//     disableDirectionButtons();
//         } else if (defenderScore === 3) {
//         messageElement.textContent = 'Defender wins the game!';
//     disableDirectionButtons();
//         }

//     // Attacker's turn
//     directionsElement.textContent = `Attacker, point your hand to a direction (up, down, left, or right).`;
//     currentPlayer = "Attacker";
//       }
//     };

//     // Enable direction buttons
//     const enableDirectionButtons = () => {
//       for (let i = 0; i < directionButtons.length; i++) {
//         directionButtons[i].addEventListener('click', directionClickHandler);
//       }
//     };

//     // Disable direction buttons
//     const disableDirectionButtons = () => {
//       for (let i = 0; i < directionButtons.length; i++) {
//         directionButtons[i].removeEventListener('click', directionClickHandler);
//       }
//     };

//     // Start the game
//     const startGame = () => {
//         round = 1;
//     attackerScore = 0;
//     defenderScore = 0;
//     currentPlayer = "Attacker";

//     displayRoles();
//     messageElement.textContent = '';
//     directionsElement.textContent = `Attacker, point your hand to a direction (up, down, left, or right).`;
//     enableDirectionButtons();
//     };

//     // Event listener for the start button
//     startButton.addEventListener('click', () => {
//         startGame();
//     });
// </script>
// </body >
// </html >



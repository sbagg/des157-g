/*Crazy Pixel
Interval
Random
Score
Timer
Reset button
+ go full screen
*/

"use strict";

// send a message to the console
console.log("reading js");

var pixel = document.querySelector("#pixel");
var pixelW = pixel.offsetWidth; // width of pixel
var pixelH = pixel.offsetHeight; // height of pixel
var section = document.querySelector("section");
var sectionW; // for width of section, updated in movePixel
var sectionH; // height of section, updated in movePixel
var score = document.querySelector("#score");
var scoreCount = 0; // beginning score
var timeLeft = document.querySelector("#timeLeft");
var count = 30; // for the time remaining, starts at 30
var reset = document.querySelector("#stop");
var gameOverImg = document.querySelector('#gameOverImg');
var gameOverAnim; // animation 
var gameOverX = -200; // x positgameOverXion of graphic

/* setInterval invokes a callback function repeatedly with a designated delay in milliseconds */
var pixelInterval = setInterval(movePixel, 2000); // change the second parameter to move the pixel faster/slower
var countInterval = setInterval(countDown, 1000); // to display Time Remaining
/* setTimout invokes a callback function at a designated delay in milliseconds */
var timerId = setTimeout(gameOver, 1000 * count); // to end the game when the time limit is reached

/* call the addEventListener method on "pixel" 
to bind a click event type that invokes a
named function, "updateScore"
*/
pixel.addEventListener("click", updateScore);

/* call the addEventListener method on "reset" 
to bind a click event type that invokes a
named function, "resetGame"
*/
reset.addEventListener("click", resetGame);

// movePixel moves the pixel randomly with the area of the section
function movePixel() {
  // get section width and height
  sectionW = section.offsetWidth; // width of section
  sectionH = section.offsetHeight; // height of section
  
  // console.log('sectionW: ' + sectionW + '; sectionH: ' + sectionH);
  
  /* get random values for new position with 'px' for the css
  
     note: the Math.random() method generates a random number 
        between 0 and almost 1
     note: the Math.floor() method rounds a number downwards 
        to the nearest integer
  */
  var newLeft = Math.floor(Math.random() * (sectionW - pixelW)) + "px";
  var newTop = Math.floor(Math.random() * (sectionH - pixelH)) + "px";

  // update pixel location
  pixel.style.left = newLeft;
  pixel.style.top = newTop;
}

// updateScore updates the scoreCount and adds the score to the UI
function updateScore() {
  scoreCount++;
  score.innerHTML = "Score: " + scoreCount;
}

// update the time remaining and display in UI
function countDown() {
  count = count - 1; // same as count--
  section.style.opacity = count * .075; // darken the screen
  timeLeft.innerHTML = "Time Remaining: " + count; // show remaining time on screen
}

// show an alert with the score and clear the timeout and reset the game
function gameOver() {
  timeLeft.innerHTML = "Time Remaining: 0";
  // alert("Game Over! Your score is " + scoreCount);
  // resetGame();
  pixel.style.display = 'none';
  playGameOverAnim();
}

// play animation around viewport
function playGameOverAnim(){
  clearInterval(pixelInterval);
  clearInterval(countInterval);
  clearTimeout(timerId);
  
  //pixel.style.display = 'none';
  gameOverImg.style.display='block';
  animate();
  gameOverAnim = requestAnimationFrame(playGameOverAnim);

}

function animate(){
        if(gameOverX < sectionW ){
            gameOverX+=2;
        }else{
            gameOverX = -200; 
        }
        gameOverImg.style.left = gameOverX + 'px';
}
/* 
    prompt 01: define the function playGameOverAnim() with the following:
              a. clear both intervals and timeout 
              b. hide pixel so users don't click on it anymore
              c. display game over graphic
              d. animate position of game over graphic 
                 1. add a condition that checks if game over graphic is at right edge, then reset graphic to left edge
                 2. update game over graphic x position by 2 pixels
              e. add a call to recursively invoke the playGameOverAnim callback function
              
              hint: variableName = requestAnimationFrame(function);
}
*/

// reset all variables and UI features
function resetGame() {
  // console.log("reset");
  
  // clear intervals, timeout and animation
  clearInterval (pixelInterval); 
  clearInterval (countInterval);  
  clearTimeout (timerId); 
  cancelAnimationFrame(gameOverAnim);
  // prompt 02: cancel the animation frame for gameOverAnim
  
  gameOverImg.style.display = "none";
  
  // reset scoreCount, count, gameOverX and pixel
  scoreCount = 0;
  count = 10;
  gameOverX = -200;
  pixel.style.display = 'block';

  // update interface
  timeLeft.innerHTML = "Time Remaining: " + count;
  score.innerHTML = "Score: " + scoreCount;
  section.style.opacity = 1;

 // start intervals and timer again
  pixelInterval = setInterval(movePixel, 1000);
  countInterval = setInterval(countDown, 1000);
  timerId = setTimeout(gameOver, 1000 * count);
}

//adding fullscreen button
var fullS = document.querySelector("#fullScreen");
fullS.addEventListener("click", requestFullScreen);

function requestFullScreen() {
  var body = document.querySelector('body');
  // expand section height
  section.style.height = '70%';
  fullS.style.display = "none";

  // going fullscreen. supports most browsers and their versions
  var requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // native full screen
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // older IE
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

//  bind a listener to the document for fullscreenchange
// to reset section height and to show fullScrren button
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  console.log('exitHandler');
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      
       fullS.style.display = 'inline';
      section.style.height = '320px';
    }
}  
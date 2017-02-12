/*  Created by Josh Baker
    Last edited 2/11/2017
    Description: Creates a one-cylinder combustion engine with moving parts
*/

// variables --------------------------------------------------------------------------------------------------
var x;
var y = 1; // y coordinate for movement
var valve = 0; // tracks which valve to move
var leftValve = 0;   // current left valve
var rightValve = 0;  // current right valve
var dir = 1; // direction of movement
var valveWidth = 275; // sets width of image (original size: 148px * 484px)
var aspectRatio = 148 / 484; // sets image aspect ratio

// image preload fxn ------------------------------------------------------------------------------------------
function preload() { // preloads image file
  valveImg = loadImage("valve.png") // calls image of valve
}

// setup fxn --------------------------------------------------------------------------------------------------
function setup() { // creates initial parameters 
 createCanvas(900,900); // defines size of canvas
 background(245); // sets background color
 noStroke(); // disables stroke
}

// draw fxn ---------------------------------------------------------------------------------------------------
function draw() {  // begins draw fxn
 background(245); // sets background color
 engine(); // calls engine function
 image(valveImg, 125, leftValve - 60, valveWidth * aspectRatio, valveWidth); // calls image
 image(valveImg, 290, rightValve - 60, valveWidth * aspectRatio, valveWidth); // calls image
 
 // if valve is currently zero
  if (valve == 0) {
    leftValve = leftValve + 2; // move the valve down
    if (leftValve > 20 || leftValve < 0) { // sets range of movement limits
      dir = dir * -1; // reverses movement direction
    }
    leftValve = min(leftValve + dir, 20); // sets minimum value
  } else {
    rightValve = rightValve + 2; // othewise move the right valve
    if(rightValve < 0 || rightValve > -40) { // sets range of movement limits
      dir = dir * -1; // reverses direction of movement
    }
    rightValve = min(rightValve + dir, 20); // sets minimum value
  }
 
  // if the valves are 20 pixels appart
  if (abs(leftValve - rightValve) >= 20) { // calculates absolute value
    valve = 1 - valve; // switch the moving valve
  }
  
  if (y > 300 || y < 250) {
    dir = dir * -1;
  }
  y = y - dir;
}

// fxn calling all other fxn's that make up engine ------------------------------------------------------------
function engine() {
  engineCase();
  pistonRod();
  piston();
  // counterBalance();
}

// fxn containing the parameters for the static pieces of the engine case -------------------------------------
function engineCase() {
  // intake();
  // exhaust();
  vertzLrg(50);
  vertzLrg(400);
  vertzSml(50);
  vertzSml(400);
  hortzLrg(50);
  hortzSml(50);
  hortzSml(215);
  hortzSml(375);
}

function vertzLrg(x) { // fxn defining large vertical rectangle -----------------------------------------------
  fill(50);
  rect(x, 150, 50, 425);
}

function vertzSml(x) { // fxn defining small vertical rectangle -----------------------------------------------
  fill(50);
  rect(x, 650, 50, 225);
}

function hortzLrg(x) { // fxn defining large horizontal rectangle (base) --------------------------------------
  fill(50);
  rect(x, 850, 400, 50);
}

function hortzSml(x) { // fxn defining small horizontal rectangles (top) --------------------------------------
  fill(50);
  rect(x, 150, 75, 50);
}

function piston() { // fxn defining the piston ----------------------------------------------------------------
  fill(100);
  rect(110, y + 250, 280, 150);
}

function pistonRod() { // fxn defining piston rod -------------------------------------------------------------
  fill(70);
  rect(225, 300, 40, 250);
}

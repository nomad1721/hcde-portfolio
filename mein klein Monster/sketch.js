/*
Created by: Josh Baker
Last Edited: 2/4/17
Description: Homework. Program that will animate a monster, and switch between two animation sets.
*/


// variables -----------------------------------------------------------
var toothX = 400
var page = 0
var eyeDirection = 0
var jumpValue = 0
var jumpDirection = 1

function setup() {
  createCanvas(800, 800); // sets canvas dimensions (in pixels)
  background(0); // sets background color (to black)
  noStroke(); // disables stroke
}

function draw() {
  background(0); // sets a black background for each frame
  monster(); // draws the monster
  // call your monster function
  if (page == 0) {  // if mouseX coordinate is less than 375, the eye moves to the left, if it's more than 375, it moves to the right
      if (mouseX >= 375){
        eyeDirection = min(eyeDirection + 2, 60);
      } else {
        eyeDirection = max(eyeDirection - 2, -60);
      }
  } else { // if page !0 then switches to jump animation
      jumpValue = jumpValue + jumpDirection;
      
      if (jumpValue == 100 || jumpValue == -100) {
        jumpDirection = jumpDirection * -1;
      }
  }

}

// changes between animations ------------------------------
function mousePressed() {
  page = 1 - page;
}

// function that contains the code which defines my monster
function monster() {
  
  // monster body ------------------------------------------
  fill(88, 127, 77);
  rectMode(CENTER);
  rect(400, jumpValue + 400, 250, 350, 20);
  ellipse(525, jumpValue + 552.5, 45, 45);
  rect(510, jumpValue + 552.5, 35, 45);
  
  // monster mouth -----------------------------------------
  fill(0);
  rectMode(CORNER);
  rect(400, jumpValue + 450, 125, 80);
  ellipse(400, jumpValue + 490, 80, 80);
  
  // eyes --------------------------------------------------
  fill(63, 91, 55);
  ellipse(360, jumpValue + 330, 165, 165);
  ellipse(480, jumpValue + 330, 55, 55);
  fill(255);
  ellipse(360, jumpValue + 330, 150, 150); // big eye
  ellipse(480, jumpValue + 330, 50, 50); // small eye
  
  // monster legs -------------------------------------------
   // peg leg -----------------------------------------------
  fill(94, 62, 20);
  quad(350, jumpValue + 575, 390, jumpValue + 575, 380, jumpValue + 650, 360, jumpValue + 650);
  ellipse(370, jumpValue + 650, 20, 20);
  
  // normal leg ---------------------------------------------
  fill(88, 127, 77);
  rect(420, jumpValue + 565, 30, 95, 10);
  rect(420, jumpValue + 620, 60, 40, 10);

  pupils();
  sharpteeth();
  
  // eye lid ----------------------------------------------
  fill(88, 127, 77);
  rect(450, jumpValue + 300, 60, 32);
}

// draws pupils --------------------------------------------
function pupils() {
  pupil(eyeDirection + 360);
  pupil(480);
}

// defines one pupil ---------------------------------------
function pupil(eyeDirection) {
  fill(0);
  ellipse(eyeDirection, jumpValue + 340, 20, 20);
}

// sharp yellow monster teeth ------------------------------
function sharpteeth() { // draws several sharp yellow monster teeth
  sharptooth(toothX);
  sharptooth(toothX + 20);
  sharptooth(toothX + 40);
  sharptooth(toothX + 60);
  sharptooth(toothX + 80);
  sharptooth(toothX + 100);
  sharptooth(toothX + 110);
}

// one sharp yellow monster tooth ---------------------------
function sharptooth(toothX) { // draws one small sharp yellow monster tooth
  fill(158, 142, 44);
  triangle(toothX, jumpValue + 530, toothX + 16, jumpValue + 530, toothX + 8, jumpValue + 500);
}




/*  Created by Josh Baker
    Last edited 2/11/2017
    Description: Creates a spiral which changes size and color according to volume
*/

// variables ---------------------------------------------------------------
var centerX = 250;
var centerY = 250;
var x;
var y;
var mic;
var vol;
var angle;

// setup fxn ----------------------------------------------------------------
function setup() {
  createCanvas(500,500); // determines size of canvas
  background(250); // sets background color of canvas
  strokeWeight(4); // sets thickness of lines
  mic = new p5.AudioIn(); // creates an audio input (thanks for the code, Susan)
  mic.start(); // starts audio input (thanks for the code, Susan)
}

// draw fxn ----------------------------------------------------------------
function draw() {
  background(250); // sets background color
  vol = mic.getLevel(); // finds the overall volume (between 0 and 1.0)
   for (i = 0; i < 2000; i++) { // creates a for loop, of less than 2000 (frames? instances?)
        var adjustedVol = map(vol, 0, 1, 0, 15); // maps volume level to a new volume level
        angle = adjustedVol * .025 * i; // defines angle variable
        point(x, y); // determines x & y coordinates of each point
        x = centerX + (angle) * Math.cos(angle); // determines x-coordinate of center point of spiral & changes distance between points 
        y = centerY + (angle) * Math.sin(angle); // determines y-coordinate of center point of spiral & changes distance between points
  }
  if (adjustedVol < .5) { // if volume is less than ".5" then...
    stroke(0); // sets stroke color to black
  } else if (adjustedVol > .5 && adjustedVol < .75) { // when volume is between ".5" and ".75" then...
    stroke(0, 70, 180); // sets stroke color to blue
  } else if (adjustedVol > .75 && adjustedVol < 2) { // when volume is between ".75" and ".2" then...
    stroke(232, 244, 66); // sets stroke color to yellow
  } else if (adjustedVol > 2 && adjustedVol < 4) { // when volume is between "2" and "4" then...
    stroke(244, 134, 66); // sets stroke color to orange
  } else if (adjustedVol >= 5) { // when volume greater than "5" then...
    stroke(255, 0, 0); // sets stroke color to red
  }
  
}


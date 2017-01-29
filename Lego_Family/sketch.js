// Josh Baker
// edited 1/28/16
// Progam that animates characters from Wall-E movie (in the style of a Lego family)


var x = 600 // define starting point of x variable
var y = 372 // define starting point of y variable
var dir = -1

function setup() {
  createCanvas(1800, 900); // determimes canvas size
  background(206, 233, 244); // sets background color
  noStroke(); // disables stroke
}

function draw() {
  console.log(frameRate()); // displays frame rate in console
  background(206, 233, 244);  // sets background color
  walle(); // draws 'walle' fxn
  walleeyes(); // draws "walleeyes" fxn
  eve(); // draws "eve" fxn
  eveeyes(); // draws "eveeyes" fxn
  moe(); // draws "moe" fxn
  moeeyes(); // draws "moeeyes" fxn
  plant(); // draws "plant" fxn
  
  if (x > 600 || x < 25) { // sets range of allowed movemnet on x axis
  dir = dir * -1; // sets direction of movement 
  }
  x = x + dir  
  if (y > 372 || y < 0){
    dir = dir * -1
  }
  y = y + dir
  
}

// begin "Wall-E" fxns ----------------------------

function walle() { // elements that make up Wall-E character
  // head
  fill(86, 86, 84); // sets fill color
  rect(x, y, 64, 32); // draws a rectangle
  
  // neck
  fill(68, 67, 65); // sets fill color
  rect(x + 24, y + 32, 16, 16); // draws a rectangle
  
  // body
  fill(235, 164, 59); // sets fill color
  rect(x, y + 48, 64, 64); // draws a rectangle
  
  // treads
  fill(53, 49, 48); // sets fill color
  rect(x, y + 112, 64, 16); // draws a rectangle
  
  // red spot
  fill(255, 0, 0); // sets fill color
  ellipse(x + 56, y + 104, 12, 12); // draws an ellipse
}

function walleeyes() { // calls "walleeye" fxn
  walleeye(x + 16); // sets location of "walleeye" fxn
  walleeye(x + 48); // sets location of second "walleeye" fxn
}

function walleeye(x) { // parameters for single eye
  fill(0); // set fill color
  ellipse(x, y + 16, 25, 25); // draws an ellipse
}

// begin "Eve" fxns ------------------------------

function eve() { // elements that make up Eve character
  // head
  fill(255); // sets fill color
  rect(x + 80, 356, 64, 48); // draws a rectangle
  
  // visor
  fill(0); // sets fill color
  rect(x + 80, 372, 64, 16); // draws a rectangle
  
  // body
  fill(255); // sets fill color
  rect(x + 80, 420, 64, 80); // draws a rectangle
}

function eveeyes () { // draws two eyes
  eveeye(x + 86); // determines x coordinate of eye
  eveeye(x + 120); // determines x coordinate of second eye
}

function eveeye(x) { // parameters for eye
  fill(81, 171, 246); // sets fill color
  rect(x, 378, 20, 4); // draws a rectangle
}

// begin "Moe" fxn ---------------------------------

function moe() { // elements that make up Moe character
  
  // light
  fill(235, 164, 59); // sets fill color
  rect(776, 348, 32, 16); // draws a rectangle
  
  // head
  fill(244, 244, 242); // sets fill color
  rect(760, 364, 64, 48); // draws a rectangle
 
  // body
  rect(760, 420, 64, 64); // draws a rectangle
 
  // visor
  fill(0); // sets fill color
  rect(776, 396, 32, 16); // draws a rectangle
  
  // neck
  fill(53, 49, 48); // sets fill color
  rect(784, 412, 16, 8); // draws a rectangle
 
  // treads
  fill(0); // sets fill color
  rect(776, 484, 32, 16); // draws a rectangle
}

function moeeyes() { // draws two eyes
  moeeye(782); // determines x coordinate of first eye
  moeeye(794); // determines x coordinate of second eye
}

function moeeye(x) { // sets parameters for one eye
  fill(235, 164, 59); // sets fill color
  rect(x, 402, 8, 2); // draws a rectangle
}

// begin "Plant" fxns -------------------------------

function plant() { // elements that make up Plant character
  
  // boot
  fill(99, 63, 35); // sets fill color
  rect(840, 468, 48, 16); // draws a rectangle
  rect(840, 484, 64, 16); // draws a rectangle
  
  // stem
  fill(57, 181, 74); // sets fill color
  rect(856, 372, 16, 96); // draws a rectangle
  rect(840, 388, 64, 16); // draws a rectangle
  rect(840, 420, 32, 16); // draws a rectangle
}
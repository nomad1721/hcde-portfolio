// Josh Baker
// edited 1/28/16
// Progam that animates characters from Wall-E movie (in the style of a Lego family)


var walleX = 600 // define starting x coordinate - Wall-E
var walleY = 372 // define starting y coordinate - Wall-E
var eveX = 680 // define starting x coordinate - Eve
var eveY = 356 // define starting y coordinate - Eve
var moeX = 760 // define starting x corrdinate - Moe
var moeY = 356 // define starting y coordinate - Moe
var plantX = 840 // define starting x coordinate - Plant
var plantY = 372 // define starting y coordinate - Plant

var dirx = -1
var diry = 1


function setup() {
  createCanvas(1500, 900); // determimes canvas size
  background(206, 233, 244); // sets background color
  noStroke(); // disables stroke
}

function draw() {
  console.log(frameRate()); // displays frame rate in console
  background(206, 233, 244);  // sets background color
  walle(); // draws 'walle' fxn
  eve(); // draws "eve" fxn
  moe(); // draws "moe" fxn
  plant(); // draws "plant" fxn
  
  // Wall-E movement ---------------------------------------
  
  if (walleX > 600 || walleX < 25) { // sets range of allowed movemnet on x axis for WallE
    dirx = dirx * -1; // sets direction of movement 
  }
  walleX = max(walleX + dirx, 25)  // sets maximum value
  
  if (walleY > 372 || walleY < 25){
    dirx = dirx * -1;
  }
  walleY = max(walleY + dirx, 25)
  
  // Eve movement ------------------------------------------
  
  if (eveX > 680 || eveX < 25 ){
    dirx = dirx * -1;
  }
  eveX = max(eveX + dirx, 25)

  if (eveY > 356 || eveY < 25){
    diry = diry;
  }
  eveY = min(eveY + diry, 720)
  
  // Moe movement -------------------------------------------
  
  if (moeX > 760 || moeX < 1500){
    diry = diry;
  }
  moeX = min(moeX + diry, 1350)
  
  if (moeY > 356 || moeY < 25){
    diry = diry;
  }
  moeY = min(moeY + diry, 720)
  
// Plant movement ------------------------------------------ 
 
  if (plantX > 840 || plantX < 1500){
    diry = diry;
  }
  plantX = min(plantX + diry, 1350)
  
  if (plantY > 372 || plantY < 25){
    dirx = dirx;
  }
  plantY = max(plantY + dirx, 25)
}

// begin "Wall-E" fxns ----------------------------

function walle() { // elements that make up Wall-E character
  // head
  fill(86, 86, 84); // sets fill color
  rect(walleX, walleY, 64, 32); // draws a rectangle
  
  // neck
  fill(68, 67, 65); // sets fill color
  rect(walleX + 24, walleY + 32, 16, 16); // draws a rectangle
  
  // body
  fill(235, 164, 59); // sets fill color
  rect(walleX, walleY + 48, 64, 64); // draws a rectangle
  
  // treads
  fill(53, 49, 48); // sets fill color
  rect(walleX, walleY + 112, 64, 16); // draws a rectangle
  
  // red spot
  fill(255, 0, 0); // sets fill color
  ellipse(walleX + 56, walleY + 104, 12, 12); // draws an ellipse
  
  walleeyes(); // draws "walleeyes" fxn
}

function walleeyes() { // calls "walleeye" fxn
  walleeye(walleX + 16); // sets location of "walleeye" fxn
  walleeye(walleX + 48); // sets location of second "walleeye" fxn
}

function walleeye(walleX) { // parameters for single eye
  fill(0); // set fill color
  ellipse(walleX, walleY + 16, 25, 25); // draws an ellipse
}

// begin "Eve" fxns ------------------------------

function eve() { // elements that make up Eve character
 
  // head
  fill(255); // sets fill color
  rect(eveX, eveY, 64, 48); // draws a rectangle
  
  // visor
  fill(0); // sets fill color
  rect(eveX, eveY + 16, 64, 16); // draws a rectangle
  
  // body
  fill(255); // sets fill color
  rect(eveX, eveY + 64, 64, 80); // draws a rectangle
  
  eveeyes(); // draws "eveeyes" fxn
}

function eveeyes () { // draws two eyes
  eveeye(eveX + 6); // determines x coordinate of eye
  eveeye(eveX + 40); // determines x coordinate of second eye
}

function eveeye(eveX) { // parameters for eye
  fill(81, 171, 246); // sets fill color
  rect(eveX, eveY + 22, 20, 4); // draws a rectangle
}


// begin "Moe" fxn ---------------------------------

function moe() { // elements that make up Moe character
  
  // light
  fill(235, 164, 59); // sets fill color
  rect(moeX + 16, moeY - 8, 32, 16); // draws a rectangle
  
  // head
  fill(244, 244, 242); // sets fill color
  rect(moeX, moeY + 8, 64, 48); // draws a rectangle
 
  // body
  rect(moeX, moeY + 64, 64, 64); // draws a rectangle
 
  // visor
  fill(0); // sets fill color
  rect(moeX + 16, moeY + 40, 32, 16); // draws a rectangle
  
  // neck
  fill(53, 49, 48); // sets fill color
  rect(moeX + 24, moeY + 56, 16, 8); // draws a rectangle
 
  // treads
  fill(0); // sets fill color
  rect(moeX + 16, moeY + 128, 32, 16); // draws a rectangle
  
  moeeyes(); // draws "moeeyes" fxn
}

function moeeyes() { // draws two eyes
  moeeye(moeX + 22); // determines x coordinate of first eye
  moeeye(moeX + 34); // determines x coordinate of second eye
}

function moeeye(moeX) { // sets parameters for one eye
  fill(235, 164, 59); // sets fill color
  rect(moeX, moeY + 46, 8, 2); // draws a rectangle
}

// begin "Plant" fxns -------------------------------

function plant() { // elements that make up Plant character
  
  // boot
  fill(99, 63, 35); // sets fill color
  rect(plantX, plantY + 96, 48, 16); // draws a rectangle
  rect(plantX, plantY + 112, 64, 16); // draws a rectangle
  
  // stem
  fill(57, 181, 74); // sets fill color
  rect(plantX + 16, plantY, 16, 96); // draws a rectangle
  rect(plantX, plantY + 16, 64, 16); // draws a rectangle
  rect(plantX, plantY + 48, 32, 16); // draws a rectangle
}
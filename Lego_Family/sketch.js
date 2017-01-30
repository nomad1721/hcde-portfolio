// Josh Baker
// edited 1/28/16
// Progam that animates characters from Wall-E movie (in the style of a Lego family)


var x = 600 // define starting x coordinate - Wall-E
var y = 372 // define starting y coordinate - Wall-E
var e = 680 // define starting x coordinate - Eve
var v = 356 // define starting y coordinate - Eve
var m = 760 // define starting x corrdinate - Moe
var o = 356 // define starting y coordinate - Moe
var p = 840 // define starting x coordinate - Plant
var l = 372 // define starting y coordinate - Plant

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
  
  if (x > 600 || x < 25) { // sets range of allowed movemnet on x axis for WallE
    dirx = dirx * -1; // sets direction of movement 
  }
  x = max(x + dirx, 25)  // sets maximum value
  
  if (y > 372 || y < 25){
    dirx = dirx * -1;
  }
  y = max(y + dirx, 25)
  
  // Eve movement ------------------------------------------
  
  if (e > 680 || e < 25 ){
    dirx = dirx * -1;
  }
  e = max(x + dirx, 25)

  if (v > 356 || v < 25){
    diry = diry;
  }
  v = min(v + diry, 720)
  
  // Moe movement -------------------------------------------
  
  if (m > 760 || m < 1500){
    diry = diry;
  }
  m = min(m + diry, 1350)
  
  if (o > 356 || o < 25){
    diry = diry;
  }
  o = min(o + diry, 720)
  
// Plant movement ------------------------------------------ 
 
  if (p > 840 || p < 1500){
    diry = diry;
  }
  p = min(m + diry, 1350)
  
  if (l > 372 || l < 25){
    dirx = dirx;
  }
  l = min(l + dirx, 720)
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
  
  walleeyes(); // draws "walleeyes" fxn
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
  rect(e, v, 64, 48); // draws a rectangle
  
  // visor
  fill(0); // sets fill color
  rect(e, v + 16, 64, 16); // draws a rectangle
  
  // body
  fill(255); // sets fill color
  rect(e, v + 64, 64, 80); // draws a rectangle
  
  eveeyes(); // draws "eveeyes" fxn
}

function eveeyes () { // draws two eyes
  eveeye(e + 6); // determines x coordinate of eye
  eveeye(e + 40); // determines x coordinate of second eye
}

function eveeye(e) { // parameters for eye
  fill(81, 171, 246); // sets fill color
  rect(e, v + 22, 20, 4); // draws a rectangle
}


// begin "Moe" fxn ---------------------------------

function moe() { // elements that make up Moe character
  
  // light
  fill(235, 164, 59); // sets fill color
  rect(m + 16, o - 8, 32, 16); // draws a rectangle
  
  // head
  fill(244, 244, 242); // sets fill color
  rect(m, o + 8, 64, 48); // draws a rectangle
 
  // body
  rect(m, o + 64, 64, 64); // draws a rectangle
 
  // visor
  fill(0); // sets fill color
  rect(m + 16, o + 40, 32, 16); // draws a rectangle
  
  // neck
  fill(53, 49, 48); // sets fill color
  rect(m + 24, o + 56, 16, 8); // draws a rectangle
 
  // treads
  fill(0); // sets fill color
  rect(m + 16, o + 128, 32, 16); // draws a rectangle
  
  moeeyes(); // draws "moeeyes" fxn
}

function moeeyes() { // draws two eyes
  moeeye(m + 22); // determines x coordinate of first eye
  moeeye(m + 34); // determines x coordinate of second eye
}

function moeeye(m) { // sets parameters for one eye
  fill(235, 164, 59); // sets fill color
  rect(m, o + 46, 8, 2); // draws a rectangle
}

// begin "Plant" fxns -------------------------------

function plant() { // elements that make up Plant character
  
  // boot
  fill(99, 63, 35); // sets fill color
  rect(p, l + 96, 48, 16); // draws a rectangle
  rect(p, l + 112, 64, 16); // draws a rectangle
  
  // stem
  fill(57, 181, 74); // sets fill color
  rect(p + 16, l, 16, 96); // draws a rectangle
  rect(p, l + 16, 64, 16); // draws a rectangle
  rect(p, l + 48, 32, 16); // draws a rectangle
}
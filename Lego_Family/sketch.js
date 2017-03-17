/*  
    Created By:   Josh Baker
    Description:  Progam that animates characters from Wall-E movie. They move from the four corners to center of the canvas and stop (in the style of a Lego family).
    Last Edit:    03/17/2017
*/

var walleX = 25 // define starting x coordinate - Wall-E
var walleY = 75 // define starting y coordinate - Wall-E
var eveX = 25 // define starting x coordinate - Eve
var eveY = 600 // define starting y coordinate - Eve
var moeX = 1125 // define starting x corrdinate - Moe
var moeY = 600 // define starting y coordinate - Moe
var plantX = 1125 // define starting x coordinate - Plant
var plantY = 75 // define starting y coordinate - Plant
var dir = 2 // sets initial speed of movement of characters

function setup() { // calls intital setup function - this code only runs once at the start of the program
  createCanvas(1200, 800); // determimes canvas size
  background(206, 233, 244); // sets background color
  noStroke(); // disables stroke
}

function draw() { // determines what happens in the draw function - this code repeats until the program stops
  background(206, 233, 244);  // sets background color
  walle(); // draws 'walle' fxn
  eve(); // draws "eve" fxn
  moe(); // draws "moe" fxn
  plant(); // draws "plant" fxn
  
  // Wall-E movement ------------------------------------------------------------------
  walleX = min(walleX + (dir + 3), 425); // moves Wall-E along X axis towards center position and stops
  walleY = min(walleY + (dir + 3), 350); // moves Wall-E along Y axis towards center position and stops
  
  // Eve movement ---------------------------------------------------------------------
  eveX = min(eveX + (dir + 3), 505); // moves Eve along X axis towards center position and stops
  eveY = max(eveY - (dir + 3), 335); // moves Eve along y axis towards center position and stops  
  
  // Moe movement ---------------------------------------------------------------------
  moeX = max(moeX - (dir + 1.25), 585); // moves Moe along X axis towards center position and stops
  moeY = max(moeY - (dir + 1.25), 335); // moves Moe along Y axis towards center position and stops 
  
  // Plant movement --------------------------------------------------------------------- 
  plantX = max(plantX - dir, 665); // moves Plant along X axis towards center position and stops
  plantY = min(plantY + dir, 350); // moves Plant along Y axis towards center position and stops
}

// begin "Wall-E" fxns ================================================================
function walle() { // elements that make up Wall-E character --------------------------
  // head -----------------------------------
  fill(86, 86, 84);
  rect(walleX, walleY, 64, 32);
  // neck ----------------------------------
  fill(68, 67, 65);
  rect(walleX + 24, walleY + 32, 16, 16);
  // body ----------------------------------
  fill(235, 164, 59);
  rect(walleX, walleY + 48, 64, 64);
  // treads --------------------------------
  fill(53, 49, 48);
  rect(walleX, walleY + 112, 64, 16);
  // red spot ------------------------------
  fill(255, 0, 0);
  ellipse(walleX + 56, walleY + 104, 12, 12);
  walleEyes();
}

function walleEyes() { // calls "walleEye" fxn ---------------------------------------
  walleEye(walleX + 16); 
  walleEye(walleX + 48);
}

function walleEye(walleX) { // parameters for single eye -----------------------------
  fill(0);
  ellipse(walleX, walleY + 16, 25, 25);
}

// begin "Eve" fxns ===================================================================
function eve() { // elements that make up Eve character -------------------------------
  // head --------------------------
  fill(255);
  rect(eveX, eveY, 64, 48);
  // visor -------------------------
  fill(0);
  rect(eveX, eveY + 16, 64, 16);
  // body --------------------------
  fill(255);
  rect(eveX, eveY + 64, 64, 80); 
  eveEyes(); 
}

function eveEyes () { // calls "eveEye" function --------------------------------------
  eveEye(eveX + 6); 
  eveEye(eveX + 40);
}

function eveEye(eveX) { // parameters for single eye ----------------------------------
  fill(81, 171, 246);
  rect(eveX, eveY + 22, 20, 4);
}

// begin "Moe" fxns ====================================================================
function moe() { // elements that make up Moe character --------------------------------
  // light ---------------------------
  fill(235, 164, 59);
  rect(moeX + 16, moeY - 8, 32, 16);
  // head ----------------------------
  fill(244, 244, 242);
  rect(moeX, moeY + 8, 64, 48);
  // body ----------------------------
  rect(moeX, moeY + 64, 64, 64);
  // visor ---------------------------
  fill(0);
  rect(moeX + 16, moeY + 40, 32, 16);
  // neck ----------------------------
  fill(53, 49, 48);
  rect(moeX + 24, moeY + 56, 16, 8);
  // treads --------------------------
  fill(0);
  rect(moeX + 16, moeY + 128, 32, 16);
  moeEyes();
}

function moeEyes() { // calls "moeEye" function ---------------------------------------
  moeEye(moeX + 22);
  moeEye(moeX + 34);
}

function moeEye(moeX) { // sets parameters for single eye -----------------------------
  fill(235, 164, 59);
  rect(moeX, moeY + 46, 8, 2);
}

// begin "Plant" fxn ==================================================================
function plant() { // elements that make up Plant character ---------------------------
  // boot ----------------------------
  fill(99, 63, 35);
  rect(plantX, plantY + 96, 48, 16);
  rect(plantX, plantY + 112, 64, 16);
  // stem ----------------------------
  fill(57, 181, 74);
  rect(plantX + 16, plantY, 16, 96);
  rect(plantX, plantY + 16, 64, 16);
  rect(plantX, plantY + 48, 32, 16);
}
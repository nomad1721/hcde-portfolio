/*  Created by Josh Baker
    Last edited: 2/25/17
    Description: Data vizualization of sea otter population in Washington state.
*/

var population = [430,502,433,604,508,641,620,661,703,814,793,1122,1080,1056,1003,1148,1104,1265,1573,1396]; // creates an array with the included values
var otter; // variable for otter image
var waves; // variable for wave image
var wavesY = 500; // y position value for waves image
var wavesDir = .5; // determines speed and movement direction for wave image
var otterWidth = 50;  // original image size 1072 px * 1300 px
var otterAspectR = 1072/1300; // sets aspect ratio of otter image
var otterX = 190; // defines starting coordinate for otter image x coordinate
var imgCred; //variable for image attribution

// loads these functions before executing the setupt and draw functions
function preload() {
 //population = loadTable("assets/sea_otter_pop.csv", "csv"); // <--- trying (unsuccessfully) to load external *.csv file.
  otter = loadImage("assets/otter.png");  // loads image
  waves = loadImage("assets/waves.png"); // loads image
  imgCred = loadImage("assets/freepik_credit.png"); // loads image
}

// instructions for initial program setup. runs once.
function setup() {
  createCanvas(1625, 800); // sets canvas size of program
  background(250); // sets background color
  print(population.length); // displays number of items in the "population" array in the console
}

// instructions for draw function. runs continuously.
function draw() {
  background(255); // sets background color
  wave(); // calls wave fxn
  drawAxis(); // calls drawAxis fxn
  drawLabels(); // calls drawLabels fxn
  tableData(); // calls tableData fxn
  image(imgCred, 1400, 740); // calls image displaying author credit
}

// function for moving wave background
function wave() {
  image(waves, 0, wavesY);
  if (wavesY > 550 || wavesY < 450) {
    wavesDir = wavesDir * -1;
  }
  wavesY = wavesY + wavesDir;
}


// draws chart axis lines
function drawAxis() {
  strokeWeight(4);
  stroke(11, 72, 109);
  line(1500,10, 1500, 700); // y axis
  line(150, 50, 1550, 50); // x axis
}

// draws chart labels
function drawLabels() {
  textSize(12);
  fill(255);
  for (i = 0; i < 18; i++) {
    text(i + 1, 1550, 75 + i * 35);
  }
  text("        94                95                96                97                98                99                00                01                02                03                04                05                06                07                08                09                10                11                12                13                14", 180, 25);
}

// calls data from table, and inserts an image for each value in the "population" array
function tableData() {
  for (i = 0; i < population.length; i++) {
      image(otter, otterX + i * 60, population[i], otterWidth * otterAspectR, otterWidth);
  }
}

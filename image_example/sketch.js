// domo_kun 520 x 440
var domo;
var domoWidth = 520;
var aspectRatio = 520 / 440;

function preload() {
  domo = loadImage("domo_kun.jpg");
}

function setup() {
  createCanvas(500, 500);
 
}

function draw() {
  // background(255);
  // image(domo, 0, 0, mouseY * aspectRatio, mouseY);
}

function mousePressed() {
  domoWidth = random(10, 600);
  image(domo, random(0, 450), random(0, 450), domoWidth * aspectRatio, domoWidth);
}
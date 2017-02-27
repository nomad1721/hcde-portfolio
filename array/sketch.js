var feeling = ["anger", "frustration", "denial"];

function setup() {
  createCanvas(500, 500);
  background(255);
  textSize(40);
}

function draw() {
  background(255);
  for( i = 0; i < feeling.length; i++) {
    text(feeling[i], 100, 25 + i * 50);
  }
  
}
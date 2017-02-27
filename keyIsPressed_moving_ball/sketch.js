var y = 200;
var x = 200;
function setup() {
  createCanvas(500,500);
  background(200);
}

function draw() {
  background(200);
  fill(0, 255, 0);
  ellipse(x, y, 100, 100);
  
  if (keyIsPressed) {
    if (keyCode == UP_ARROW){ // senses if Up Arrow is pressed **** keeps code of key you just pressed - only matters for arrows, symbols, shift, rtn, etc ****
      y = max(50, y - 10);
    } else if (keyCode == DOWN_ARROW) {
      y = min(450, y + 10);
    } else if (keyCode == LEFT_ARROW) {
      x = max(50, x - 10);
    } else if (keyCode == RIGHT_ARROW) {
      x = min(450, x + 10);
    }
  }
}

function keyPressed() {
  
}
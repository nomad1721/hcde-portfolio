var centerX = 250;
var centerY = 250;
var x;
var y;

function setup() {
  createCanvas(500,500);
  background(200);
  strokeWeight(2);
  frameRate(10);
  /* 3 things go inside, variable (usually "i") <-- initializing a variable, 
     then a boolean expression, 
     then i++ (means "i + 1")
  */
  // for (i = 0; i < 10; i++ ) {
  //   for (j = 0; j < 10; j++) {
  //   ellipse(i * 50 + 25, j * 50 + 25, 50, 50);
  //   }
  // }
  // for (i = 0; i < 500; i++) {
  //       angle = 0.1 * i;
  //       point(x, y);
  //       x = centerX + (1 * angle) * Math.cos(angle);
  //       y = centerY + (1 * angle) * Math.sin(angle);
  // }
  
}

function draw() {
   stroke(0);
   for (i = 0; i < 2000; i++) {
        angle = 0.1 * i;
        point(x, y);
        x = centerX + (1 * angle) * Math.cos(angle);
        y = centerY + (1 * angle) * Math.sin(angle);
  }
}
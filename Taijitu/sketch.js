function setup() {
  createCanvas( 1000,1000); //set canvas size to 1K px x 1K px
  smooth(); // enable anti-aliasing
  noStroke(); // disable stroke
  background(255); // set background color - "white"

  
  // large ellipse <-- main ellispse, forms black half of Taijitu
  fill(0); // diable color fill
  ellipse(500,500, 995, 995); // draws an ellipse
  
  // rectangle <-- block of half of black ellipse for white half of Taijitu
  fill(255); // set color fill - "white"
  rect(0,0,500, 1000); // draws rectangle over half of canvas
  
  // medium black ellipse 
  fill(0); // set fill color - "black"
  ellipse(500, 750, 500, 500); // draws an ellipse
    
  // medium white ellipse
  fill(255); // set fill color - "white"
  ellipse(500, 250, 500, 500); // draws an ellipse
  
   // small white ellipse
  ellipse(500, 750, 100, 100); // draws an ellipse
  
  // small black ellipse
  fill(0); // set fill color - "black"
  ellipse(500, 250, 100, 100); // draws an ellipse
  
  // outer ellipse (stroke) <-- defines edge of Taijitu where white rectangle covers black ellipse
  noFill(); // disables fill color
  strokeWeight(5); // defines width of stroke
  stroke(0); // defines color of stroke - "black"
  ellipse(500,500, 995, 995); // draws an ellipse
}


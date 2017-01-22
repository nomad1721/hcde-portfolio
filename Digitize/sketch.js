function setup() {
  createCanvas(325,1000); // defines container size of canvas
  smooth(); // enables anti-aliasing
  strokeWeight(5); // sets stroke width to 5px
  stroke(39, 40, 43); // defines RGB value - dark grey

// begin rectangles

  // largest rectangle
  fill(119, 173, 201); // defines fill RGB value - medium blue
  rect(0, 0, 800, 995); // draws rectangle
  
  // first narrow rectangle
  strokeWeight(10);
  fill(159, 196, 205); // defines fill RGB value - light blue
  rect(5, 0, 160, 650); // draws rectangle
  
  // second narrow rectangle
  noFill() // disable fill color
  rect(5, 655, 160, 335); // draws rectangle
  
  // third narrow rectangle
  fill(38, 99, 153); // defines fill RGB value - dark blue
  rect(165, 0, 160, 990); // draws rectangle
  
  // fourth narrow rectangle
  fill(159, 196,205); // defines fill RGB value - light blue
  rect(325, 0, 160, 130); // draws rectangle
  
  // fifth narrow rectangle
  noFill(); // disable fill color
  rect(325, 135, 160, 855); // draws rectangle
  
  // sixth narrow rectangle
  fill(38, 99, 153); // defines fill RGB value - dark blue
  rect(485, 0, 160, 480); // draws rectangle
  
  //seventh narrow rectangle
  fill(159, 196, 205); // defines fill RGB value
  rect(485, 485, 160, 505); // draws rectangle
  
// begin lines

  // first column
  noFill();
  strokeWeight(7); // set stroke width to 5px
  line(30, 5, 30, 650); // draws line
  line(40, 655, 40, 990); // draws line
  bezier(40, 725, 40, 925, 100, 800, 40, 880); // draws bezier curve
  line(40, 850, 65, 850); // draws line
  line(50, 825, 65, 655); // draws line
  line(50, 870, 65, 990); // draws line
  line(55, 5, 30, 310); // draws line
  strokeWeight(10); // increase stroke weight
  line(32, 95, 46, 95); // draws line
  strokeWeight(7);  // decrease stoke wieght 
  line(120, 5, 120, 525); // draws line
  line(120, 650, 130, 560); // draws line
  line(86, 5, 120, 200); // draws line
  strokeWeight(10); // increase stroke weight
  line(100, 80, 119, 80); // draws line
  
  // second column
  strokeWeight(14); // decrease stroke weight
  bezier(167, 285, 252, 300, 200, 340, 165, 370); // draws bezier curve
  strokeWeight(12); // modify stroke weight
  line(165, 320, 205, 310); // draw line
  line(180, 317, 185, 330); // draw line
  strokeWeight(7); // modify stroke thickness
  bezier(195, 5, 170, 320, 190, 200, 175, 290); // draw bezier curve
  bezier(230, 5, 215, 320, 220, 200, 200, 295); // draw bezier curve
  bezier(260, 5, 245, 340, 240, 200, 220, 305); // draw bezier curve
  bezier(300, 5, 215, 320, 290, 200, 230, 320); // draw bezier curve
  strokeWeight(9); // modify stroke thickness
  line(180, 355, 190, 990); // draw line
  strokeWeight(5); // modify stroke thickness
  line(190, 350, 215, 990); // draw line
  strokeWeight(9); // modify stroke thickness
  line(205, 337, 235, 990); // draw a line
  
  
  
// begin shapes
  
  // black triangle 1
  fill(39, 40, 33); // set fill RGB color - dark grey
  triangle(30, 175, 40, 175, 30, 260); // draw a triangle
  
  // black triangle 2
  fill(39, 40, 33); // set fill RGB color - dark grey
  triangle(120, 200, 110, 110, 120, 110); // draw a triangle
  
  // white ellipse
  strokeWeight(4); // modify line thickness
  fill(255); // set fill RGB color - white
  ellipse(165, 540, 105); // draw an ellipse
  
  // grey arc
  noFill(); // disables color fill of shape
  strokeWeight(6); // modify line thickness
  stroke(39, 40, 43); // was trying to change color of arc, but having trouble. I will ask you about this later.
  arc(165, 540, 100, 100, PI+QUARTER_PI, TWO_PI); // draws an arc within ellipse shape
  
}
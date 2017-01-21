function setup() { //called once on program start. Defines initial environment properties (e.g.screen size, bg color, etc) Only called once.
  createCanvas(720, 480); //defines overall size of element
  smooth(); // enables anti-aliasing (no jaggies) turned ON by default
  strokeWeight(2); // sets stroke weight (thickness) for all subsequent lines, borders, etc
}

// When removing the background parameter, we are able to see each individual rendering of our robot as the draw function repeats itself over and over again. By specifying a background color, the function is essentially "erasing" the previous frame by drawing another grey background and robot over the previous one. This gives the illusion of the robot moving on a blank background.

function draw() { // draws elements until stopped
  background(205); // sets background color
  translate(mouseX, mouseY); // specifies displacement along x & y axes

  //Neck <-- notation separating out neck section of code
  stroke(153, 10, 48); //sets color information for stroke (line) elements - burgundy. Format: stroke(red channel, green channel, blue channel, alpha channel)
  line(266, 257, 266, 162);// draws first line of neck. Parameters define the starting and ending points that the line will be drawn between in the format line( x1, y1, x2, y2)
  line(276, 257, 276, 162);// draws second line of neck 
  line(286, 257, 286, 162);// draws third line of neck
  
  //Antennae <-- notation separating out antennae section of code
  line(276, 155, 246, 112); // First antenna line (clockwise from left). Parameters define the starting and ending points that the line will be drawn between in the format line( x1, y1, x2, y2)
  line(276, 155, 306, 56); // Second antenna line (clockwise from left)
  line(276, 155, 342, 170); // Third antenna line (clockwise from left)
  
  //Body <-- notation separating out body section of code
  stroke(102,102, 102); // sets color of wheel shape - medium grey
  fill(255); // RGB fill value of next element (white). Format: stroke(red channel, green channel, blue channel, alpha channel)
  ellipse(264, 377, 66, 66);// draws wheel shape on bottom of rectangle body
  noStroke(); // command to disable stroke attribute from subsequent elements
  fill(25, 72, 135); // RGB fill value of next element (dark blue)
  rect(219, 257, 90, 120); // draws large rectangle (body of robot)
  fill(153, 10, 48); // RGB fill value of next element (burgundy)
  rect(219, 274, 90, 6); // draws small detail (horizontal) rectangle on robot body
  
  //Head <-- notation separating out head section of code
  fill(234, 124, 56); // RGB fill value of next element (orange)
  ellipse(276, 155, 90, 90); // draws main large ellipse shape
  fill(255); // RGB fill value of next element (purple)
  ellipse(288, 150, 28, 28); // draws white ellipse "eye"
  fill(0); // RGB fill value of next element (black)
  ellipse(288, 150, 6, 6); // draws black ellipse "eye pupil"
  fill(25, 72, 135); // RGB fill value of next element (dark blue)
  ellipse(263, 148, 10, 10); // draws blue ellipse (left)
  ellipse(296, 130, 8, 8); // draws blue ellipse (center-top)
  ellipse(305, 162, 6, 6); // draws blue ellipse (right)
}


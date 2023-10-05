function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  let end = map(mouseX, 0, width, 0, 360); //mouse control over full arc 

  strokeWeight(10); //first arc
  stroke(0);
  arc(700, 400, 400, 400, 0, end);

  strokeWeight(10); //second arc
  stroke(0);
  arc(700, 400, 300, 300, 0, end);
  
  strokeWeight(10); //third arc
  stroke(0);
  arc(700, 400, 250, 250, 0, end);

  strokeWeight(10); //fourth arc
  stroke(0);
  arc(700, 400, 200, 200, 0, end);

  strokeWeight(10); //fifth arc
  stroke(0);
  arc(700, 400, 150, 150, 0, end);

  strokeWeight(10); //sixth arc
  stroke(0);
  arc(700, 400, 100, 100, 0, end);

  strokeWeight(10); //seventh arc
  stroke(0);
  arc(700, 400, 50, 50, 0, end);


  
}

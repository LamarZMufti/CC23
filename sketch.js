let brushSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
}

function mouseDragged(){
  
  if(mouseX < width/2){
    
    fill(random(5), random(255), random(255));
    
  } else {
    
    fill(random(255));
  }
  
  translate(500, 500);
  noStroke();
  for (let i = 0; i < 20; i ++) {
    ellipse(mouseX, mouseY, brushSize);
    rotate(PI/5);
  }
  
}
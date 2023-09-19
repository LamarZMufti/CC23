let x, y; // ball x and x position
let xDir, yDir; // direction of the ball
let size; // size of the ball

function setup() {
  createCanvas(windowWidth, windowHeight);

  // random directions
  xDir = random(-20, 10);
  yDir = random(-10, 10);

  // random size
  size = random(10, 10);

  // starting point is somewhere in the 
  // canvas, not touching a border
  x = random(size, width - size);
  y = random(size, height - size);
  noStroke();
  fill(255,140,0);
}

function draw() {
  // a little motion blur
  background(70, 20);
  // draw our ball
  ellipse(x, y, size);

  // if the ball touches the left or right side
  if (x >= width - size / 2 || x <= size / 2) {
    // reverse it's direction
    xDir = xDir * -1;
    // the follwing line is the lazy way to reverse dir
    // xDir *= -1;
  }

  // if the ball touches the ceilign or floor
  if (y >= height - size / 2 || y <= size / 2) {
    yDir = yDir * -1;
  }

  // update the position of the ball for the next loop
  x = x + xDir;
  y = y + yDir;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(1); // Update every second
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(-90); // Adjust for 0 degrees at the top

  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours() % 12; // Convert 24-hour time to 12-hour time

  // Draw clock face
  stroke(0);
  strokeWeight(8);
  fill(0);
  ellipse(0, 0, 300, 300);

  // Draw hour hand
  stroke(255);
  strokeWeight(8);
  line(0, 0, 60 * cos(360 * hours / 12), 60 * sin(360 * hours / 12));

  // Draw minute hand
  stroke(255);
  strokeWeight(5);
  line(0, 0, 90 * cos(360 * minutes / 60), 90 * sin(360 * minutes / 60));

  // Draw second hand
  stroke(150, 50, 100); // purplish
  strokeWeight(1);
  line(0, 0, 100 * cos(360 * seconds / 60), 100 * sin(360 * seconds / 60));

  stroke(255, 150);
  secondComponent(seconds);
}

function secondComponent(seconds) {
  for (let i = 0; i < 60; i++) {
    let x = 135 * cos(360 * i / 60);
    let y = 135 * sin(360 * i / 60);

   
    if (i % 5 === 0) {
      noFill();
      ellipse(x, y, 15, 15); // Draw circles at hour positions
    } else {
      if (i <= seconds) {
        noFill();
        line(x - 10, y - 2, 10, 4); // Draw lines as seconds pass
      }
    }
  }
}

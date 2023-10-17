let images = []; // Array to store loaded image
let img; // Current image variable
let xPos, yPos; // Position variables
let xSpeed, ySpeed; // Speed variables
let rot = 0.0; // Rotation angle
let sc = 1.0; // Scaling factor

function preload() {
  // Load image from the internet
  let imageURLs = ["https://hips.hearstapps.com/hmg-prod/images/ai-flaw-memes-1677257023.jpg?crop=0.520xw:0.988xh;0.225xw,0&resize=1200:*"]; // image URL
  
  for (let i = 0; i < imageURLs.length; i++) {
    images[i] = loadImage(imageURLs[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight); 

  // Choose a random image from the loaded images
  img = random(images);

  // Set initial positions and speeds
  xPos = random(width);
  yPos = random(height);
  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
}

function draw() {
  background(0, 5); // Background animates with low opacity

  imageMode(CENTER);
  push();
  translate(xPos, yPos); // Translate image's position
  rotate(rot); // Rotate the image
  scale(4.0 * noise(sc)); // Scale the image with noise
  image(img, 0, 0, img.width / 2, img.height / 2); // Display the image
  pop();

  rot += 0.01; // Increment rotation angle
  xPos += xSpeed; // Update horizontal position
  yPos += ySpeed; // Update vertical position

  if (xPos >= width || xPos <= 0) {
    xSpeed *= -1; // Bounce if hitting horizontal boundaries
  }
  if (yPos >= height || yPos <= 0) {
    ySpeed *= -1; // Bounce if hitting vertical boundaries
  }

  sc += 0.001; // Increment scaling factor
}

// Initializes an array to store particle objects
let particles = [];
// Buttons and dropdown menu for user interaction
let clearCanvasButton;
let shapeSelector;

// Sets up the initial canvas
function setup() {
  createCanvas(windowWidth, 600);

  // Creates a button to clear the canvas
  clearCanvasButton = createButton('Clear Canvas');
  clearCanvasButton.position(10, height + 10);
  clearCanvasButton.mousePressed(() => {
    particles = []; // Clear the particle array
  });

  // Creates a dropdown menu for selecting particle shapes
  shapeSelector = createSelect();
  shapeSelector.position(10, height + 40);
  shapeSelector.option('Ellipse');
  shapeSelector.option('Rectangle');
  shapeSelector.option('Triangle');
}

// Draw function runs continuously to update the canvas
function draw() {
  background(0); // Set a black background

  // Updates and displays each particle
  for (let particle of particles) {
    particle.update();
    particle.display();
    particle.checkEdges();
    for (let other of particles) {
      if (particle !== other) {
        particle.interact(other);
      }
    }
  }

  // Randomizes illustration by connecting close particles with glowing lines
  randomizeIllustration();
}

// Function to add a new particle when the mouse is clicked
function mouseClicked() {
  let shape = shapeSelector.value();
  particles.push(new Particle(mouseX, mouseY, shape));
}

// Function to create glowing connections between close particles
function randomizeIllustration() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let distance = dist(particles[i].position.x, particles[i].position.y, particles[j].position.x, particles[j].position.y);
      if (distance < 100) {
        blendMode(ADD); // Applys a glowing effect
        stroke(255, 100); // Dims white stroke for connections
        line(particles[i].position.x, particles[i].position.y, particles[j].position.x, particles[j].position.y);
        blendMode(BLEND); // Resets blend mode
      }
    }
  }
}

// Class representing individual particles
class Particle {
  constructor(x, y, shape) {
    // Particle properties
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D().mult(random(1, 3));
    this.size = random(2, 5); // Smaller particles
    this.color = color(255, random(150, 255), random(150, 255)); // Softer colors
    this.shape = shape || 'Ellipse'; // Default shape is ellipse
  }

  // Updates the particle's position
  update() {
    this.position.add(this.velocity);
  }

  // Displays the particle on the canvas
  display() {
    // Draws the actual shape
    fill(this.color);
    noStroke();
    if (this.shape === 'Ellipse') {
      ellipse(this.position.x, this.position.y, this.size, this.size);
    } else if (this.shape === 'Rectangle') {
      rect(this.position.x, this.position.y, this.size, this.size);
    } else if (this.shape === 'Triangle') {
      triangle(
        this.position.x - this.size / 2, this.position.y + this.size / 2,
        this.position.x + this.size / 2, this.position.y + this.size / 2,
        this.position.x, this.position.y - this.size / 2
      );
    }

    // Draws a slightly larger, blurred version for the glowing effect
    for (let i = 0; i < 5; i++) {
      let alpha = map(i, 0, 4, 50, 0);
      fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], alpha);
      if (this.shape === 'Ellipse') {
        ellipse(this.position.x, this.position.y, this.size * 2 + i, this.size * 2 + i);
      } else if (this.shape === 'Rectangle') {
        rect(this.position.x, this.position.y, this.size * 2 + i, this.size * 2 + i);
      } else if (this.shape === 'Triangle') {
        triangle(
          this.position.x - (this.size + i) / 2, this.position.y + (this.size + i) / 2,
          this.position.x + (this.size + i) / 2, this.position.y + (this.size + i) / 2,
          this.position.x, this.position.y - (this.size + i) / 2
        );
      }
    }
  }

  // Checks if the particle goes beyond the canvas boundaries and reverse its velocity
  checkEdges() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }

  // Simulates interaction between particles based on distance
  interact(other) {
    let attraction = p5.Vector.sub(other.position, this.position);
    let distance = attraction.mag();
    if (distance < 50) {
      let force = attraction.setMag(0.1);
      this.velocity.add(force);
    }
  }
}

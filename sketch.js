let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 25); // Semi-transparent background for trails

  // Creates a new particle at the mouse position
  let p = createVector(mouseX, mouseY);
  let particle = new Particle(p);
  particles.push(particle);

  // Updates and displays particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // Removes particles that are off-screen
    if (particles[i].isOffScreen()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(position) {
    this.position = position.copy();
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255; // Particle's lifespan
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0.5); 

    this.lifespan -= 2; // Decrease the lifespan over time
  }

  display() {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(255, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isOffScreen() {
    return (
      this.position.x < 0 ||
      this.position.x > width ||
      this.position.y < 0 ||
      this.position.y > height ||
      this.lifespan < 0
    );
  }
}

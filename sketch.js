let particles = [];
let clearCanvasButton;
let shapeSelector;

function setup() {
  createCanvas(windowWidth, 600);

  clearCanvasButton = createButton('Clear Canvas');
  clearCanvasButton.position(10, height + 10);
  clearCanvasButton.mousePressed(() => {
    particles = [];
  });

  // Dropdown menu for selecting particle shape
  shapeSelector = createSelect();
  shapeSelector.position(10, height + 40);
  shapeSelector.option('Ellipse');
  shapeSelector.option('Rectangle');
  shapeSelector.option('Triangle');
}

function draw() {
  background(0); // Dark background

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

  // Randomize illustration
  randomizeIllustration();
}

function mouseClicked() {
  let shape = shapeSelector.value();
  particles.push(new Particle(mouseX, mouseY, shape));
}

function randomizeIllustration() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let distance = dist(particles[i].position.x, particles[i].position.y, particles[j].position.x, particles[j].position.y);
      if (distance < 100) {
        blendMode(ADD); // Blend mode for glowing effect
        stroke(255, 100); // Dim white stroke for connections
        line(particles[i].position.x, particles[i].position.y, particles[j].position.x, particles[j].position.y);
        blendMode(BLEND); // Reset blend mode
      }
    }
  }
}

class Particle {
  constructor(x, y, shape) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D().mult(random(1, 3));
    this.size = random(2, 5); // Smaller particles
    this.color = color(255, random(150, 255), random(150, 255)); // Softer colors
    this.shape = shape || 'Ellipse';
  }

  update() {
    this.position.add(this.velocity);
  }

  display() {
    // Draw the actual shape
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

    // Draw a slightly larger, blurred version for the glowing effect
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

  checkEdges() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }

  interact(other) {
    let attraction = p5.Vector.sub(other.position, this.position);
    let distance = attraction.mag();
    if (distance < 50) {
      let force = attraction.setMag(0.1);
      this.velocity.add(force);
    }
  }
}
// Array to store created primitive objects
let primitives = [];
// Variable to store the currently selected primitive
let selectedPrimitive = null;
// Variable to store the type of primitive being created
let currentPrimitiveType;
// Sliders and color picker for customization
let sizeSlider, colorPicker;

function setup() {
  createCanvas(800, 600, WEBGL);

  // Create buttons for selecting primitives
  createPrimitiveButton('Cube', 50, 30);
  createPrimitiveButton('Sphere', 50, 70);
  createPrimitiveButton('Cylinder', 50, 110);

  // Create sliders and color picker for customization
  sizeSlider = createSlider(10, 200, 50);
  sizeSlider.position(10, height + 10);

  colorPicker = createColorPicker('#ff0000');
  colorPicker.position(10, height + 40);
}

function draw() {
  background(240);

  // Orbit control for easy navigation
  orbitControl();

  // Display and update all primitives
  for (let i = 0; i < primitives.length; i++) {
    primitives[i].display();
    primitives[i].update();
  }
}

function mouseClicked() {
  // Check if the user clicked on a primitive
  selectedPrimitive = null;
  // Iterate through the primitives from top to bottom to find the topmost clicked primitive
  for (let i = primitives.length - 1; i >= 0; i--) {
    if (primitives[i].contains(mouseX, mouseY)) {
      selectedPrimitive = primitives[i];
      break;
    }
  }
}

function mouseDragged() {
  // Move the selected primitive with the mouse drag
  if (selectedPrimitive) {
    selectedPrimitive.position.x += mouseX - pmouseX;
    selectedPrimitive.position.y += mouseY - pmouseY;
  }
}

function keyPressed() {
  // Delete the selected primitive when the 'Delete' key is pressed
  if (keyCode === DELETE && selectedPrimitive) {
    let index = primitives.indexOf(selectedPrimitive);
    primitives.splice(index, 1);
    selectedPrimitive = null;
  }
}

function createPrimitiveButton(type, x, y) {
  let button = createButton(type);
  button.position(x, y);
  button.mousePressed(() => {
    currentPrimitiveType = type.toLowerCase();
    createPrimitive(currentPrimitiveType);
  });
}

function createPrimitive(type) {
  let primitive;
  switch (type) {
    case 'cube':
      primitive = new Cube();
      break;
    case 'sphere':
      primitive = new Sphere();
      break;
    case 'cylinder':
      primitive = new Cylinder();
      break;
  }
  primitives.push(primitive);
}

// Base class for primitive objects
class Primitive {
  constructor() {
    this.size = 50;
    this.color = color(255, 0, 0);
    this.position = createVector(random(-200, 200), random(-200, 200), 0);
  }

  // Display the primitive
  display() {
    push();
    translate(this.position.x, this.position.y, this.position.z);
    fill(this.color);
    noStroke();
    this.drawGeometry();
    pop();
  }

  // Update the primitive based on sliders and color picker
  update() {
    this.size = sizeSlider.value();
    this.color = colorPicker.color();
  }

  // Check if a point (x, y) is inside the primitive
  contains(x, y) {
    return (
      x > this.position.x - this.size / 2 &&
      x < this.position.x + this.size / 2 &&
      y > this.position.y - this.size / 2 &&
      y < this.position.y + this.size / 2
    );
  }

  // Method to be overridden by subclasses to draw specific geometry
  drawGeometry() {
    // This method should be overridden by subclasses to draw the specific geometry
  }
}

// Subclass for cube primitive
class Cube extends Primitive {
  drawGeometry() {
    box(this.size);
  }
}

// Subclass for sphere primitive
class Sphere extends Primitive {
  drawGeometry() {
    sphere(this.size / 2);
  }
}

// Subclass for cylinder primitive
class Cylinder extends Primitive {
  drawGeometry() {
    cylinder(this.size / 2, this.size / 2, this.size, 24, 1);
  }
}


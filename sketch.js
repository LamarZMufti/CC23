let angle = 0.0;
let x = 100;
let y = 100;
let w = 60;
let h = 60;

let speedx = 0.5;
let speedy = 0.5;

let input;
let button;
let wordGenerator;

function draw() {
  let sinval = sin(angle);
  let sky1 = map(sinval, -1, 1, 0, 255);
  let sky2 = map(sinval, -1, 1, 255, 0);
  background(sky1);
  angle += 0.1;
  
  fill(sky2);
  noStroke();
  ellipse(random()*width,random()*height,3,3);
  ellipse(random()*width,random()*height,5,5);
  ellipse(random()*width,random()*height,1,1);
  ellipse(random()*width,random()*height,2,2);
  ellipse(random()*width,random()*height,5,5);
  
  
}
 

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  background(255);


  input = createInput();
  input.position(650, 400);

  button = createButton('press');
  button.position(800, 400);
  button.mousePressed(display);


  wordGenerator = createElement('h1', 'Type Anything');
  wordGenerator.position(650, 330);
  
  
 
}

function display() { 
  const word = input.value();
  wordGenerator.html(word);
  input.value('');

  for (let i = 0; i < 1000; i++) {
    push();
    fill(random(0), 0, 0);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(word, 0, 0);
    pop();
  }

  
  
}

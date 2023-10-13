let angle = 0.0;
let x = 100;
let y = 100;
let w = 60;
let h = 60;

let speedx = 0.5;
let speedy = 0.5;

let input;
let button;
let characterGenerator;

function draw() { //taken from https://editor.p5js.org/amena91/sketches/B1JuX5rjb for background animation
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


  input = createInput(); //input type is button
  input.position(650, 400);

  button = createButton('press');
  button.position(800, 400);
  button.mousePressed(display); //when mouse is pressed it will display the inputted character


  characterGenerator = createElement('h1', 'Type Anything'); //type anything will be in heading1
  characterGenerator.position(650, 330);
  
  
 
}

function display() { 
  const character = input.value();
  characterGenerator.html(character);
  input.value(''); //to display input value in place of h1 
  
}

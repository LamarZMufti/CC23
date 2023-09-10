function setup() {
  angleMode(DEGREES); //for arc lip function
  rectMode(CENTER); // a command to center the rect with the ellipse 
  createCanvas(400, 400); // w, h
  background(0, 0, 0); //black rgb 

  fill(92, 64, 51); //brown hair color 
  rect(200, 220, 220, 339, 90); //back hair 

  fill(255, 255, 255); //shirt color white 
  rect(200, 460, 190, 270, 40); //shirt 

  fill(232,190,172); //face and neck color is nude
  rect(200, 270, 80, 200, 30); //neck - the 5th parameter makes rounds the edges
  ellipse(200, 190, 160, 220); // face, x centered y shifted upwards by 190, 160 is for w & 220 is for h

  fill(255, 255, 255); //left and right eye color white
  ellipse(160, 160, 50, 25); //left eye
  ellipse(238, 160, 50, 25); //right eye

  fill(92, 64, 51); //color of eyes 
  ellipse(160, 160, 20, 18); //left eye color
  ellipse(238, 160, 20, 18); //right eye color 

  fill(0); //pupil color is black
  ellipse(160, 160, 12, 10); //left eye pupil resized 
  ellipse(238, 160, 12, 10); //right eye pupil resized
  
  fill(144, 44, 62); //velvet lip color 
  arc(200, 236, 60, 50, 0, 180); //180 is angle for smile

  fill(232, 190, 172);//nose color 
  arc(198, 205, 28, 18, 270, 90);

  noStroke();
  fill(92, 64, 51); //bangs color
  rect(200, 95, 99, 43, 58); //bangs

  
  fill(92, 64, 51); //brow color 
  rect(160, 140, 40, 5); //left brow 
  rect(238, 140, 40, 5); //right brow


  
}


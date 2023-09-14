function setup() {
  createCanvas(400, 400);
  background(135,206,250);
  
  //Table
  fill(210,180,140); 
  rect(0.5, 220, 600, 300, 80);

  
  //Plate Shadow
  fill(0,0,0, 190);
  ellipse(175, 260, 190, 100);

  //Plate
  fill(255, 255, 255);
  ellipse(190, 250, 200, 100);

  //Left Pear Shadow
  fill(0,0,0, 250);
  ellipse(90, 198, 65, 80);

  //Left Pear Stem
  fill(0);
  rect(70, 230, 3, 10); 

  //Left Pear
  fill(0,100,0);
  ellipse(85, 190, 70, 90);

  //Apple 1 Shadow
  fill(0);
  ellipse(160, 228, 69, 65);

  //Apple 1 Left
  fill(255,215,0);
  ellipse(150, 230, 70, 70);
  
  //Apple 2 Shadow Right
  fill(0);
  ellipse(208, 244, 60, 70);

  //Pear Behind Right Apple
  fill(0,100,0);
  ellipse(221, 234, 60, 70);

  //Apple 2 Right
  fill(255,215,0);
  ellipse(215, 240, 70, 70);

  //Apple 2 Stem
  fill(0);
  ellipse(210, 240, 5, 5 );

  //Apple 3 Shadow
  fill(0);
  ellipse(195, 180, 60, 65);

  //Apple 3
  fill(255,215,0);
  ellipse(200, 175, 70, 70);

  //Apple 3 Stem
  fill(0);
  ellipse(200, 180, 5, 5 );
}



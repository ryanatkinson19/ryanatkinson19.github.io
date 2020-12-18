function drawing1() {
background(50,50,50)
  ellipseColor = color (150,150,0);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(ellipseColor);
  ellipse(250,50,400,400)
  
  
  beginShape();
  vertex (250,50)
  vertex (200,150)
  vertex(250,150)
  fill(0,130,90)
  strokeWeight(0)
endShape()
  
  beginShape();
  vertex (250,50)
  vertex (300,150)
  vertex(250,150)
  fill(0,100,60)
  strokeWeight(0)
endShape()
  
  beginShape();
  vertex (250,100)
  vertex (150,300)
  vertex(250,300 )
  fill(0,130,90)
  strokeWeight(0)
  endShape()
  
    beginShape();
  vertex (250,100)
  vertex (350,300)
  vertex(250,300 )
  fill(0,100,60)
  strokeWeight(0)
  endShape()
  
  beginShape();
  vertex (250,200)
  vertex (100,400)
  vertex(250,400 )
  fill(0,130,90)
  strokeWeight(0)
  endShape()
  
   beginShape();
  vertex (250,200)
  vertex (400,400)
  vertex(250,400 )
  fill(0,100,60)
  strokeWeight(0)
  endShape()
  
  beginShape()
  fill(150,100,90)
  rect(220,400,40,90)
  endShape()
  
  beginShape()
  fill(100,50,40)
  rect(250,400,30,90)
  endShape()

  fill(0,100,500)
  ellipse(230,100,15,15)
  ellipse(230,300,15,15)
  ellipse(240,400,15,15)
  ellipse(260,180,15,15)
  ellipse(270,270,15,15)
  
    fill(500,0,0)
  ellipse(260,100,15,15)
  ellipse(190,300,15,15)
  ellipse(240,350,15,15)
  ellipse(260,200,15,15)
  ellipse(300,270,15,15)
  
  fill(500,500,0)
  ellipse(250,150,15,15)
  ellipse(215,230,15,15)
  ellipse(290,200,15,15)
  ellipse(300,380,15,15)
  
  fill(500,0,500)
  ellipse(165,350,15,15)
  ellipse(215,230,15,15)
  ellipse(220,160,15,15)
  ellipse(300,310,15,15)

push();
    translate(250, 51);
    fill(500,500,0);
    beginShape();
    vertex(0, -50);
    vertex(14, -20);
    vertex(47, -15);
    vertex(23, 7);
    vertex(29, 40);
    vertex(0, 25);
    vertex(-29, 40);
    vertex(-23, 7);
    vertex(-47, -15);
    vertex(-14, -20);
    endShape(CLOSE);
    translate(100, 100);
    pop();

}

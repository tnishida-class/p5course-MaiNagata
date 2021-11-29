// 最終課題を制作しよう
let ax;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  ax = 0;
}

function draw(){
  background(160, 192, 255);
  ax += 2;
  angel(ax, height - 70);
  if(ax > width)
  {ax = 0 ;}
  else if( ax < 0)
  { ax = width;}
  push();
  strokeWeight(2);
  fill(160, 192, 255);
  heart(70);
  pop();
  count = (count + 2) % cycle;
  if(count > 40){size = count;}
  else{size = 100 - count;}
  push();
  fill(255, 0,0);
  heart(size);
  pop();
  if(keyIsDown(" ".charCodeAt(0))){noLoop();}
  const x = abs(size - 70);
  textSize(30);
  if(keyIsDown(" ".charCodeAt(0)) && x <= 3)
  {text("Perfect!!", width / 2 - 30, height / 2 - 200);}
  else if(keyIsDown(" ".charCodeAt(0)) && x <= 7)
  {text("Great!", width / 2 - 30, height / 2 - 200);}
  else if(keyIsDown(" ".charCodeAt(0)) && x <= 15)
  {text("Good", width / 2 - 30, height / 2 - 200);}
  else if(keyIsDown(" ".charCodeAt(0)) && x > 15)
  {text("Bad", width / 2 - 30, height / 2 - 200);}
  if(keyIsDown(" ".charCodeAt(0)))
  {arrow(width / 2 , height / 2, 80);}
}


function heart(s) {
  push();
  beginShape();
  const x = width / 2;
  const y = height / 2;
  const Y = y - s;
  vertex(x, Y);
  bezierVertex(x - s, Y - s, x - 2 * s, Y, x, Y + 2 * s);
  bezierVertex(x + 2 * s, Y, x + s, Y - s, x, Y);
  endShape(CLOSE);
  pop();
}

function arrow(x, y, s){
  push();
  push();
  strokeWeight(2);
  line(x, y, x + s, y + s);
  pop();
  fill(0);
  triangle(x, y, x, y + s / 5, x + s / 5, y);
  quad(x + s, y + s, x + s + s / 6, y + s + s / 6, x + s + s / 6, y + s + s / 6 + s / 10, x + s, y + s + s / 10);
  quad(x + s, y + s, x + s + s / 6, y + s + s / 6, x + s + s / 6 + s / 10, y + s + s / 6, x + s + s / 10, y + s);
  pop();
}

function wing(x,y,s){
  push();
  noStroke();
  beginShape();
  vertex(x, y);
  bezierVertex(x + 4 * s, y - 8 * s, x + 5 * s, y - 2 * s , x, y);
  endShape(CLOSE);
  beginShape();
  vertex(x, y);
  bezierVertex(x + 6 * s, y - 2 * s, x + 3 * s, y - 4 * s,  x, y);
  endShape(CLOSE);
  beginShape();
  vertex(x, y);
  bezierVertex(x + 7 * s, y - s * 3 / 2, x + s * 2 / 3, y - 2 * s, x, y);
  endShape(CLOSE);
  beginShape();
  vertex(x, y);
  bezierVertex(x - 4 * s, y - 8 * s, x - 5 * s, y - 2 * s, x, y);
  endShape(CLOSE);
  beginShape();
  vertex(x, y);
  bezierVertex(x - 6 * s, y - 2 * s, x - 3 * s, y - 4 * s,  x, y);
  endShape(CLOSE);
  beginShape();
  vertex(x, y);
  bezierVertex(x - 7 * s, y - s * 3 / 2, x - s * 2 / 3, y - 2 * s, x, y);
  endShape(CLOSE);
  pop();
}

function angel(x, y){
  push();
  wing(x, y + 20, 20);
  ellipse(x, y, 60);
  push();
  fill(0);
  ellipse(x - 10, y ,5);
  ellipse(x + 10, y, 5);
  pop();
  ellipse(x, y - 50, 50, 20);
  push();
  fill(160, 192, 255);
  ellipse(x, y - 50, 40, 10);
  pop();
  arrow(ax - 35, height - 70, 30);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

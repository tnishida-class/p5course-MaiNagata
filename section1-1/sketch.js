function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  stroke(0);
  strokeWeight(4);
  fill(123, 17, 130);
  triangle(12,120,116,120,116,10);
  fill(255);
  triangle(0,108,106,108,106,0);
  fill(241,159,182);
  strokeWeight(0);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
  strokeWeight(1);
  stroke(241,159,182);
  line(104,106,104,4);
  line(104,106,4,106);
  line(104,4,4,106);
}

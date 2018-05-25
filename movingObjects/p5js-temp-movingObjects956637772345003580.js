var x1=700-130, y1=200-20, x2=700-158, y2=200-75, x3=700-186, y3=200-20;
function setup() {
  createCanvas(1000, 800);
}
//somehow this two functions (width, height) are not working, pls find why
function draw() {
  background(211);
  //clear();
  x1--;
  x2--;
  x3--;
  if (x3==0) {
    x1=1000-30;
    x2=1000-58;
    x3=1000-86;
  }
  fill(150);
  rect(x1, y1, 80, 80);
  //triangle(x1, y1, x2, y2, x3, y3);
}

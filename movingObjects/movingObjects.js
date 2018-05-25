var x1=width-130, y1=height-20, x2=width-158, y2=height-75, x3=width-186, y3=height-20;
function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(211);
  //clear();
  x1--;
  x2--;
  x3--;
  if(x3==0){
    x1=width-30;
    x2=width-58;
    x3=width-86;
  }
  fill(150);
  triangle(x1, y1, x2, y2, x3, y3);
}

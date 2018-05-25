function setup() {
  createCanvas(400, 400);//generates a screen in a browser with width 400 and height 400
}
//mouseX or mouseY are the mouse's events in the position X or Y
function draw() {
  fill(255);//fill the next component (in this case a rectangle) in 255 of a gray scale  (which means white)
  rect(0, 0, 400, 400); //creates a rectangle origin of (0,0) coordinate with 400px width and 400px height
  //coordinate
  fill(200, 200, 200);//now the fill method is seted by a rgb scale of color
  rect(mouseX - 40, mouseY - 40, 80, 80); //creates a rectangle of 80 of width and 80 of height with origin in (mouse position x minus 40, mouse position y minus 40)
}

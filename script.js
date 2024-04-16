/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Courier New");
}

function draw() {
  background(200);
  textSize(16);
  text("Who is she ... ?", 20, 60);
  if (mouseIsPressed == true) {
    text(". . . A mystic memory.", 20, 160); 
  }
  textSize(32);
}

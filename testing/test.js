const SCALE = 0.3;

var pngImg, jpgImg;
function preload() {
  pngImg = loadImage("riso.png");
  jpgImg = loadImage("riso.jpg");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  let bubblegum = new Riso("BUBBLEGUM");
  bubblegum.imageMode(CENTER);
  bubblegum.image(pngImg, windowWidth*0.5, windowHeight*0.25, pngImg.width*SCALE, pngImg.height*SCALE);

  let cranberry = new Riso("CRANBERRY");
  cranberry.imageMode(CENTER);
  cranberry.image(jpgImg, windowWidth*0.5, windowHeight*0.75, jpgImg.width*SCALE, jpgImg.height*SCALE);

  drawRiso();
}

function keyPressed() {
  // Press "r" to save riso layers
  if (keyCode === 82) {
    exportRiso();
  }
}

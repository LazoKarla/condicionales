let velocidadX = 5;
let velocidadY = 5;
let posX = 200;
let posY = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(200, 150, 150, 20);
  ellipse(posX, posY, 80, 80);

  posX = posX + velocidadX;
  posY = posY + velocidadY;

  if (posX > width || posX < 0) {
    velocidadX = velocidadX * -1;
  }
  if (posY > height || posY < 0) {
    velocidadY = velocidadY * -1;
  }

  if (mouseIsPressed) {
    fill("black");
  } else {
    fill("purple");
  }
}

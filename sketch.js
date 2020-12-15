var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = false;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  collide(movingRect,fixedRect);
  drawSprites();
}
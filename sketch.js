var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100, 150, 60, 20);
  car.shapeColor = "yellow";
  car.velocityX = 2;

  wall = createSprite(800, 150, 20, 60);
  wall.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (istouching(movingRect, fixedRect))
  {fixedRect.shapeColor = "red";}
    
 
 else {
  fixedRect.shapeColor = "green";
 }


  bounceoff(car, wall);
  drawSprites();
}









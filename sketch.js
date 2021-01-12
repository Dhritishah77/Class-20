var fR, mR
function setup() {
  createCanvas(1200,800);
  fR = createSprite(600, 400, 50, 80);
  fR.shapeColor = "blue";
  mR = createSprite(400,400,80,50);
  mR.shapeColor = "blue"
}

function draw() {
  background(0,0,0); 
  
  mR.x = World.mouseX;
  mR.y = World.mouseY;

  //reference distance  x dir =fR.width/2+mR.width/2
  //y-dir   fR.height/2+mR.height/2

  if(fR.x - mR.x < fR.width/2+mR.width/2 &&
    mR.x - fR.x < fR.width/2+mR.width/2 &&
    fR.y - mR.y < fR.height/2+mR.height/2 &&
    mR.y - fR.y < fR.height/2+mR.height/2){
    fR.shapeColor = "red"
    mR.shapeColor = "red"
  }
  else {
    fR.shapeColor = "blue"
    mR.shapeColor = "blue"
  }
  drawSprites();
}














/*
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}
*/

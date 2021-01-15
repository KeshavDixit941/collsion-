var fixedRec, movingRec;

function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(300, 400, 50, 80);
  fixedRec.shapeColor = "red";
  
  movingRec = createSprite(300,400,80,50);
  movingRec.shapeColor = "red";

}

function draw() {
  background(255,255,255);  

  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

  if(fixedRec.x-movingRec.x<fixedRec.width/2 + movingRec.width/2 && movingRec.x-fixedRec.x<movingRec.width/2 + fixedRec.width/2 &&movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2 && fixedRec.y-movingRec.y<movingRec.height/2+fixedRec.height/2){
    fixedRec.shapeColor = "yellow";
  }
  else {
    fixedRec.shapeColor = "red";
    movingRec.shapeColor = "red";
  }

  drawSprites();
}
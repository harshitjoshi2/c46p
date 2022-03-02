var backgroundImg;
var spaceship,spaceshipImg;
var asteriod,asteriodImg;
var asteriodGroup;
var score=0;

function preload(){
  backgroundImg=loadImage("background.jpg")
  spaceshipImg=loadImage("spaceship.png");
  asteriodImg=loadImage("asteriod.png");
}


function setup() {
  createCanvas(windowWidth-100,windowHeight-100);
  spaceship=createSprite(400, 450, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.3;
 asteriodGroup=new Group();
 
      
      
      
    
}

function draw() {
  background(backgroundImg);  
textSize(35);
  text("Score:"+score,50,50);
  
  
if(keyDown("RIGHT_ARROW")){
  spaceship.x+=5
}
if(keyDown("LEFT_ARROW")){
  spaceship.x-=5
}

if(spaceship.x<0){
  spaceship.x=10;
}
if(spaceship.x>windowWidth-100){
  spaceship.x=windowWidth-150;
}

if(spaceship.isTouching(asteriodGroup)){
  asteriodGroup.destroyEach();
  spaceship.destroy();
 }

  spawnAsteriod();
  drawSprites();
}
function spawnAsteriod(){
  if(frameCount%250===0){
    asteriod=createSprite(10,10,50,100);
    asteriod.x=Math.round(random(100,width-50));
    asteriod.scale=0.2
    asteriod.addImage(asteriodImg);
    asteriodGroup.add(asteriod);
    asteriod.velocityY=2;
  }
}

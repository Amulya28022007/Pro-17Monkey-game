
var monkey , monkey_running
var banana,bananaImage, obstacles, obstaclesImage
var FoodGroup, obstacleGroup;
var score=0;
var ground;

var Survival_Time=0;
function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(60,370,20,20);
  monkey.addAnimation("running",monkey_running); 
  monkey.scale=0.1;

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() {
  
  background("lightblue");
  
  
  ground = createSprite(200,370,900,5);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  if(keyDown("space")&& monkey.y>=310){
    monkey.velocityY=-13;
    
  }
 monkey.velocityY= monkey.velocityY+0.6;
  monkey.collide(ground);

  stroke("black");
  textSize(20);
  fill("black");
  Survival_Time=Math.ceil(frameCount/frameRate());
  text("Survival Time :"+Survival_Time,100,50);
  
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetime=-1;
    obstacleGroup.setLifetime=-1;
    
    obstacleGroup.setVelocityXEach(0);
    }
  
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  if(World.frameCount%80===0){
    
 banana = createSprite(300,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.velocityX=-10;
    banana.scale=0.1;
    banana.lifeTime=100;
    FoodGroup.add(banana);
    
  } 
}
function obstacles()
{
  if (World.frameCount%300===0)
  {
    obstacle = createSprite(400,350,20,20);
    obstacle.addImage(obstaclesImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.lifeTime=110;
    obstacleGroup.add(obstacle);
  }
}





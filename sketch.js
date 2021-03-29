var monkey,monkey_run,banana,bananaimg,ground,groundimg,obstacle;
var obstacleimg,score,invisibleground,survivaltime;
var obstaclesgroup,fruitsgroup;
var PLAY , END , gameState;

function preload(){
  groundimg=loadImage("jungle.jpg");
  
  monkey_run=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
   
}

function setup() {
  createCanvas(800, 400);
  
  ground= createSprite(0,0,800,500);
  ground.addImage("ground", groundimg);
  ground.x = ground.width/2;
  ground.scale = 2
  
  invisibleground=createSprite(400,350,800,10);
  invisibleground.visible = false;  

  monkey= createSprite(50,330,20,20);
  monkey.addAnimation("monkey",monkey_run);
  monkey.scale=0.1;
  
  obstaclesgroup = new Group();
  fruitsgroup = new Group ();
  
  score = 0; 
  PLAY = 1; 
  END = 0; 
  
  gameState = PLAY ; 
  
}

function draw() {
  background(220);
  
  
 
  if(keyDown("space")&&monkey.y>=168){
  monkey.velocityY=-10; 
}
  ground.velocityX = -6; 
  
  fruit();
  obstacle();

  camera.y = monkey.y
  
  if(ground.x<200){
  ground.x = ground.width/2;
  
}
 monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(invisibleground);

  
  
 if(monkey.isTouching(fruitsgroup)){
   fruitsgroup.destroyEach();
   score = score +1;
  
 }
  switch (score){
    case 10 : monkey. scale = 0.2 ;
      break; 
      case 20 : monkey . scale = 0.14;
      break ;
      case 30 : monkey . scale = 0.16;
      break ;
      case 40 : monkey.scale = 0.18;
      break;
  }
   
  if(monkey.isTouching(obstaclesgroup)){
    monkey.scale = 0.08;
  }

  
  

  drawSprites();
  
  fill("white");
  textSize(18);
  text("Score "+score,500,20);
  
  
  
}
 

 
function fruit(){
  if(frameCount%50===0){
    var banana=createSprite(600,290,30,10);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.y = Math.round(random(100,140));
    banana.addImage(bananaimg);
    banana.lifetime=200;
    
   fruitsgroup.add(banana);
}
}
 function obstacle(){
   if(frameCount%100===0){
    var stone =createSprite(800,354,10,40);
    stone.addImage(obstacleimg);
    stone.velocityX = - (6 + 2*score/100);
    stone.scale=0.2;
    stone.lifetime=400;
    
  obstaclesgroup.add(stone);
  }
 }






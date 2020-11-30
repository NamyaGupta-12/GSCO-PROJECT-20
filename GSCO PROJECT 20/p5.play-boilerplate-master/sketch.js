var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  rectMode(CENTER)
 
  speed=random(255,90)
  weight=random(400,150)
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  

}

function draw() {

 
  background(255,255,255);
  car.velocityX=speed; 
  
  if(isTouching())
  {
 car.velocityX=0;

 var deformation=0.5*weight*speed*speed/22500;
 if(deformation>180)
 {
   car.shapeColor= color(255,0,0);
 }

 if(deformation<180 && deformation>100) {
  car.shapeColor= color(230,230,0);
 }

 if(deformation<100){
  car.shapeColor= color(0,255,0)
}
  }
  drawSprites();
}
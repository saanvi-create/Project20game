var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed= random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,200)
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(0,0,0); 

  car.velocityX=speed;
  car.shapeColor=color(255,255,255);
  if(wall.x-car.x<55)
  { car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation<100)
    {car.shapeColor=color(0,255,0)}
    if(100<deformation && deformation<180)
    {car.shapeColor=color(0,0,255)}
    if(deformation>180)
    {car.shapeColor=color(255,0,0)
    }
  }
  drawSprites();
}   
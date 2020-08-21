var car, wall, deformation, weight, speed;

function setup() {
  createCanvas(400, 400);
  weight = Math.round(random(400, 1500));
  speed = Math.round(random(55, 90));
  deformation = (weight*speed*speed)/(22500);
  car = createSprite(100, 300, 30, 20);
  car.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255))
  car.velocityX = speed/20
  wall = createSprite(350, 300, 10, 50)
}

function draw() {
  background("white");
  if (abs(car.x-wall.x) < (car.width/2)+(wall.width/2) && abs(car.y-wall.y) < (car.height/2)+(wall.height/2)
){
    car.velocityX=0
  }
  text("with a speed of "+speed+" and a weight of "+weight+" the deformation is "+deformation+". ", 0, 100);
  drawSprites()
}
var wall,thickness,bullet,damage,bulletspeed,bulletweight ;
function setup() {
  createCanvas(1600,400);
 bullet = createSprite(30,200,20,10);
 bullet.shapeColor = "white";
  bulletspeed = random(223,321);
 bulletweight = random(30,52);
 bullet.velocityX=bulletspeed ;
 thickness = random(22,83);
 wall = createSprite(1200,200,thickness,height/2); 

}

function draw() {
  background(0,0,0);
  damage = 0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness);
   if (wall.x-bullet.x < (bullet.width+wall.width)/2) 
  {
    bullet.velocityX = 0;
    if(damage>=10)
    {
      wall.shapeColor = color(255,0,0);
    }
    else if (damage<10);
    { 
      wall.shapeColor = color(0,255,0);
    } 
  } 
 
 
  drawSprites();
}
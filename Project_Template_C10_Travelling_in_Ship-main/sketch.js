var ship, shipmoving;
var seaImage;
var sea;


function preload(){
  shipmoving = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,300);
  
 // creating sea
  sea = createSprite(200,150);
  sea.addImage("sea",seaImage);
  sea.scale = 0.5;
 // sea.x = sea.width/2;
  sea.velocityX = -6;


  // creating ship
  ship = createSprite(400,160,20,50);
  ship.addAnimation("moving",shipmoving);
  ship.scale = 0.2;
  
  

 
}


function draw(){
  background(180);
 

  /*if (keyDown("space")){
    sea.velocityX = 2;

  }*/

  if(sea.x<0) {
    sea.x=width/2;
  }

  console.log(sea.x);


  drawSprites();
}
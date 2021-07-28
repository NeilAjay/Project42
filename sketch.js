var spaceBg;
var iss, spaceCraft, spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;
var hasDocked=false;
var craft1;

function preload(){
  spaceBg = loadImage("Docking-undocking/spacebg.jpg");

  spaceCraft  = loadImage("Docking-undocking/iss.png");
  spaceCraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceCraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceCraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceCraft4 = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  craft1 = createSprite(270, 340, 50, 50);
  craft1.addImage(spaceCraft1);
  craft1.scale = 0.2
 
  iss = createSprite(400, 150, 50, 50);
  iss.addImage(spaceCraft)
  iss.scale = 0.8


}

function draw() {
  background(spaceBg);
  
  if(keyDown(LEFT_ARROW)){
    craft1.x = craft1.x-5
    craft1.addImage(spaceCraft4);
  }

  if(keyDown(RIGHT_ARROW)){
    craft1.x = craft1.x+5
    craft1.addImage(spaceCraft3);
  }

  if(keyDown(UP_ARROW)){
    craft1.y = craft1.y-5
    craft1.addImage(spaceCraft2);
  }

  if(keyDown(DOWN_ARROW)){
    craft1.y = craft1.y+5
    craft1.addImage(spaceCraft1);
  }

  //console.log(craft1.x)
  //console.log(craft1.y)

  if(craft1.y<=240 && craft1.x<=345){
  hasDocked=true

  textSize(25)
  fill("white")
  text("Docking Successful", 200, 300)
  }

  drawSprites();
}
var canvas;
var music;
var block1,block2,block3,block4;
var invisible,invisible2,invisible3,invisible4;


function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
 block1=createSprite(150,380,90,20)
 block1.shapeColor="yellow";

 block2=createSprite(250,380,90,20)
 block2.shapeColor="red";

 block3=createSprite(350,380,90,20)
 block3.shapeColor="blue";      

 block4=createSprite(50,380,90,20)
 block4.shapeColor="green";

 boxer=createSprite(random(20,375));
 boxer.shapeColor="white";
 boxer.scale=0.3;
 boxer.velocityY=4;
 boxer.velocityX=-5;

 invisible=createSprite(400,200,10,400);
 invisible2=createSprite(1,200,10,400);
 invisible3=createSprite(200,400,400,10);
 invisible4=createSprite(200,1,400,10);

 invisible.visible=false;
 invisible2.visible=false;
 invisible3.visible=false;
 invisible4.visible=false;

}

function draw() {
  background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();

if(block1.isTouching(boxer)){
  boxer.velocityY=0;
  boxer.velocityX=0;
  music.stop();
  boxer.shapeColor="yellow"; 
}

boxer.bounceOff(invisible);
boxer.bounceOff(invisible2);
boxer.bounceOff(invisible3);
boxer.bounceOff(invisible4);

  text(mouseX+','+mouseY,10,15);


if(block2.isTouching(boxer)){
  boxer.shapeColor="red";
  music.play();

}
if(block3.isTouching(boxer)){
  boxer.shapeColor="blue";
  music.play();

}
if(block4.isTouching(boxer)){
  boxer.shapeColor="green";
  music.play();

}
 
  drawSprites();
}

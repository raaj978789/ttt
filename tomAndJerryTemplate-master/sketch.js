var cat1 ;
var mouse1;
var gardenImg;
var Garden;
var cat2;
var mouse2;
var mouseTeasing;
var catRunning;
function preload() {
    gardenImg = loadImage("garden.png");
    cat1Img = loadAnimation("cat1.png");
    mouse1Img = loadAnimation("mouse1.png");
    cat2Img =loadAnimation("cat2.png,cat3.png");
    mouse2Img = loadAnimation("mouse2.png,mouse3.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
function keyPressed(){
    if (keyCode === LEFT_ARROW){
        mouse2.addAnimation("mouseTeasing",mouse2Img);
        mouse2.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }
}
if (cat.x-mouse.x<(cat.width - mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("catRunning",cat2Img);
cat.changeAnimation("catrunning");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

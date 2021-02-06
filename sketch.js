var canvas;
var music;
var block1, block2, block3, block4;
var dice;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(631,600);

    //create 4 different surfaces

    block1 = createSprite(75,595,150,40)
    block1.shapeColor = 'blue'

    block2 = createSprite(235,595,150,40)
    block2.shapeColor = 'red'

    block3 = createSprite(395,595,150,40)
    block3.shapeColor = 'Yellow'

    block4 = createSprite(555,595,150,40)
    block4.shapeColor = 'Green'

    //create box sprite and give velocity
    dice = createSprite(random(20,750),300,40,40)
    dice.shapeColor = 'White'
    dice.velocityX = 5;
    dice.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    dice.bounceOff(edges);
    
  drawSprites();

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(dice) && dice.bounceOff(block1)){
        dice.shapeColor = 'blue';
        music.loop();
    }

    if(block2.isTouching(dice) && dice.bounceOff(block2)){
        dice.shapeColor = 'red';
        music.stop();
    }

    if(block3.isTouching(dice) && dice.bounceOff(block3)){
        dice.shapeColor = 'Yellow';
        music.loop();
    }

    if(block4.isTouching(dice) && dice.bounceOff(block4)){
        dice.shapeColor = 'Green';
        music.stop();
    }

}

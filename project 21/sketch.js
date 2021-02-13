var PLAY = 1;
var END = 0;
var gameState = PLAY;

var canvas;
var music;
var ball;
var box1,box2,box3,box4;





function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(20,750),30,70);
    ball.velocityY = 3;
    ball.shapeColor = 'black';

    box1 = createSprite(100,500,190,50);
    box1.shapeColor = 'red';

    box2 = createSprite(300,500,190,50);
    box2.shapeColor = 'blue';

    box3 = createSprite(500,500,190,50);
    box3.shapeColor = 'yellow';

    box4 = createSprite(700,500,190,50);
    box4.shapeColor = 'green';

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
  
    ball.bounceOff(edges);
    ball.bounceOff(box1);
    ball.bounceOff(box2);
    ball.bounceOff(box3);
    ball.bounceOff(box4);


    if(gameState === PLAY){
        music.play();
    }

    if(box1.isTouching(ball)&& ball.bounceoff(box1)){
        ball.shapeColor = 'red';
    }


    if(box2.isTouching(ball)&& ball.bounceoff(box2)){
        ball.shapeColor = 'blue';
        ball.velocityY = o;
        music.stop();
    }

    if(box3.isTouching(ball)&& ball.bounceoff(box3)){
        ball.shapeColor = 'yellow';
    }

    if(box4.isTouching(ball)&& ball.bounceoff(box4)){
        ball.shapeColor = 'green';
    }

   


drawSprites();
    //add condition to check if box touching surface and make it box
}

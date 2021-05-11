var canvas, backgroundImage;

var gameState = 0;
var database;
var s;
var playerCount;
var form, player,p1, p2, game;
var info;
var p;

function preload(){
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(200, 200, 255);

if(playerCount ===2)
{
  game.update(1);

}
if(gameState===1)
{
  clear();
  game.play();
}

}
 
  

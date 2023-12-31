var player, playerImg
var burger, burgerImg
var background, backgroundImg
var gameover, gameoverImg

function preload(){
  playerImg = loadImage("PrisonInmate.png")
  burgerImg = loadImage("Burger.png")
  backgroundImg = loadImage("rust.png")
}

function setup(){
  createCanvas(400,600)
  
  background = createSprite(400,600);
  background.addImage("background", backgroundImg);
  background.scale = 2.5;

  player = createSprite(200,580)
  player.addImage("PrisonInmate", playerImg);
  player.scale = 0.1;

}

function draw(){
  drawSprites()
}

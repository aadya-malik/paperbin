


	var paperSpritee;
	var paperSpriteImg
	var paper;
var ground;
var one;
var two;
var three;

 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var img
function preload()
{
	 img = loadImage("dustbingreen.png")
	//paperSpriteImg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);

	//paperSpritee.addImage(paperSpriteImg)
	paperSprite = createSprite(100,630,30,30)
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,630,30);
	ground = new Ground(400,650,800,20);
	one = new Dusbin(500,630,70,10);
	two = new Dusbin(465,595,10,70);
	three = new Dusbin(535,595,10,70);
	

     
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	  push( )
imageMode(CENTER);
image(img,500,580,100,100)
       pop()
	  //paperSprite.x= paper.position.x 
  //paperSprite.y= paper.position.y 
  drawSprites();
  paperSprite.position=paper.body.position
	paper.display();one.display();
	two.display();
	three.display();
	ground.display();
	



}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:27,y:-30});
	 }
   }




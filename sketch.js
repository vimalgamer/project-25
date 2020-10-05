const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,paperimage;
var ground;
var trashBin,trashbin_main;
var trash;

function preload()
{

}

function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,290,800,20);
	
	paperObject = new Paper(100,280,20);

	trashBin = new TrashBin(600,270,200,20);
	trashBin2 = new TrashBin(510,230,20,100);
	trashBin3 = new TrashBin(690,230,20,100);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
  
  ground.display();
  paperObject.display();
  trashBin.display();
  trashBin2.display();
  trashBin3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-65});
	}
}


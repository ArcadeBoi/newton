
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var radius;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	radius = 80;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400,300,400,20);

	bob1 = new Bob (300,500,radius);
	bob2 = new Bob (350,500,radius);
	bob3 = new Bob (400,500,radius);
	bob4 = new Bob (450,500,radius);
	bob5 = new Bob (500,500,radius);

 	var bobDiameter = 0*2;
	rope1 = new Rope(bob1.body,roof.body, (-bobDiameter*2)-100,0);
	rope2 = new Rope(bob2.body,roof.body, (-bobDiameter*2)-50,0);
	rope3 = new Rope(bob3.body,roof.body, -bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof.body, (-bobDiameter*2)+50,0);
	rope5 = new Rope(bob5.body,roof.body, (-bobDiameter*2)+100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215);
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
	  
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-105})
	  
	}
  }
  

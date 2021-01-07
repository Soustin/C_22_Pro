var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var engine, world, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world;
	
	var package_option={
		isStatic : true,
		restitution : 0.2,
		friction : 1.2
	}

	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
    
	var ground_option={
		isStatic : true,
	}

	
	
	packageBody = Bodies.rectangle(width/2 , 350 , 5 , package_option);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_option);
	 World.add(world, ground);
	 
	 	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

Engine.update(engine);

  rect(ground.position.x, ground.position.y, width, 10);
  //rect(packageBody.position.x, packageBody.position.y, width/2, 200);
  //packageSprite.x = packageBody.position.x
  //packageSprite.y = packageBody.position.y

  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false);

  }
}
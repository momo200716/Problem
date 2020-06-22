var ball, binline1,binine2,binline3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

//function preload()
//{
	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
    ball=createSprite(100,610,10,10);

	var binline1=createSprite(490,610,10,80);
	binline1.shapeColor=color("black");

	var binline2=createSprite(690,610,10,80);
	binline2.shapeColor=color("black");

	var binline3=createSprite(590,650,210,10);
	binline3.shapeColor=color("black");

	ball = new Ball(100,610,10,80);
	//Create a Ground
	ground=createSprite(400,655,800,10);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
  

  ball.display();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,x:-85});
	}
  
  }
  

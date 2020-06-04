var edge1, edge2, edge3, ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200,200,30);

	//Create a Ground
	ground = new Ground(400,395,800,10)

	edge1 = new SideEdges(645,340,10,100);
	edge2 = new SideEdges(555,340,10,100);
	edge3 = new BottomEdge(600,380,80,20)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(211);

	ground.display();

	ball.display();

	edge1.display();
	edge2.display();
	edge3.display();

	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60, y:-60});
	}
}


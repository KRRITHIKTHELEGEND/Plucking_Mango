
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1100,100,30);
	stoneObj = new Stone(200,50,50,50);
	launcherObject = new SlingShot(stoneObj.body,{x:200, y:340});
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  treeObj.display();
  mango1.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	launcherObject.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		launcherObject.attach(stoneObj.body);
	}
}

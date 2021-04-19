const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;

function preload(){
  polygon_img = loadImage( "polygon.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(315,235,30,40);
  block9 = new Block(345,235,30,40);
  block10 = new Block(375,235,30,40);
  block11= new Block(405,235,30,40);
  block12 = new Block(435,235,30,40);
  block13 = new Block(465,235,30,40);
  block14 = new Block(330,195,30,40);
  block15 = new Block(360,195,30,40);
  block16 = new Block(390,195,30,40);
  block17 = new Block(420,195,30,40);
  block18 = new Block(450,195,30,40);
  block19 = new Block(345,155,30,40);
  block20 = new Block(375,155,30,40);
  block21 = new Block(405,155,30,40);
  block22 = new Block(435,155,30,40);
  BLOCK1 = new Block (615,175,30,40);
  BLOCK2 = new Block (645,175,30,40);
  BLOCK3 = new Block (675,175,30,40);
  BLOCK4 = new Block (705,175,30,40);
  BLOCK5 = new Block (735,175,30,40);
  BLOCK6 = new Block (765,175,30,40);
  BLOCK7 = new Block (630,135,30,40);
  BLOCK8 = new Block (660,135,30,40);
  BLOCK9 = new Block (690,135,30,40);
  BLOCK10 = new Block (720,135,30,40);
  BLOCKxtra = new Block(750,135,30,40);
  BLOCK11 = new Block (645,95,30,40);
  BLOCK12 = new Block (675,95,30,40);
  BLOCK13 = new Block (705,95,30,40);
  BLOCK14 = new Block (735,95,30,40);
  BLOCK15 = new Block (690,55,30,40);
  BLOCK16 = new Block (720,55,30,40);
  BLOCK17 = new Block (660,55,30,40);
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("black");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("green");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("red");
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("skyblue")
  BLOCK1.display();
  BLOCK2.display();
  BLOCK3.display();
  BLOCK4.display();
  BLOCK5.display();
  BLOCK6.display();
  fill("black");
  BLOCK7.display();
  BLOCKxtra.display();
  BLOCK8.display();
  BLOCK9.display();
  BLOCK10.display();
  fill("green");
  BLOCK11.display();
  BLOCK12.display();
  BLOCK13.display();
  BLOCK14.display();
  fill("red");
  BLOCK15.display();
  BLOCK16.display();
  BLOCK17.display();

  //ball.display();
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
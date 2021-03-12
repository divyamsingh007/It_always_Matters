const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {}

function setup() {
  createCanvas(1366, 600);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  plane1 = new Plane(683,height, 1366, 30);
  hammer1 = new Hammer(600, 300);
  iron1 = new Iron(600, 400);
  rubber1 = new Rubber(700, 400);
  sand1 = new Sand(350, 400);
  sand2 = new Sand(500, 400);
  sand3 = new Sand(430, 400);
}

function draw() {
  rectMode(CENTER);
  background('lightblue');

  plane1.display();
  hammer1.display();
  iron1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();

  drawSprites();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ground, ball;

var box1,box2;

function setup() {
    
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,50,50);
    box2 = new Box(100,100,50,100);  

}

function draw() {

    background("lightblue");
    Engine.update(engine);
    box1.display();
    box2.display();

    

}
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

    //box1 = new Box();
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,390,400,10);



    /* var groundOptions = {
        isStatic:true
    }
    ground = Bodies.rectangle(200,380,200,20,groundOptions);
    World.add(world,ground);

    var ballOptions = {
        restitution:1.0
    }
    ball = Bodies.circle(200,100,20,ballOptions);
    World.add(world,ball); */

    /* var objectOptions={
            isStatic:true
       }
    object = Bodies.rectangle(100,100,50,50,objectOptions);
    object = Bodies.rectangle(100,100,50,50);
    World.add(world, object);
    console.log(object);
    console.log(object.type);
    console.log(object.position.x);
    console.log(object.position.y); */

}

function draw() {

    background("lightblue");
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();

    console.log(box2.body.angle);

    /* rectMode(CENTER);
    //rect(object.position.x, object.position.y, 50, 50);
    rect(ground.position.x, ground.position.y, 390, 10);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20); */
}
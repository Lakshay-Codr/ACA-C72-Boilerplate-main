const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, brick1, brick2;
var r1,r2,r3;
var s1;
var c1,c2;
function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(300, 590, 600, 20, ground_options);
    Composite.add(world, ground);

    
    r1=new Rock(400,530,300,20);
    r2=new Rock(400,550,300,20);
    r3=new Rock(400,500,300,20);
    s1=new Square(400,200,100,100);


    c1=new Circle(200,400,50);
    c2=new Circle(50,400,50);
    angleMode(RADIANS);
    
    
}

function draw(){
    background("#00EAFF");
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x, ground.position.y, 600, 20);



    
    r1.display();
    r2.display();
    r3.display();
    s1.display();
    c1.display();
    c2.display();
}

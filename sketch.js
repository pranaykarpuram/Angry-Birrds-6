const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var name="string";
var num = 3;
var ud;
var null1 = null;
var bool = true;
var birds = [];

var array1 = [2,4,[5,4,4],6,"name1",false]
console.log(array1);
console.log(name);
console.log(num);
console.log(ud);
console.log(array1);
console.log(bool);





function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird1 = new Bird(200,50);
    bird2 = new Bird(100,90)
    bird3 = new Bird(60,90)
    birds = [bird3,bird2,bird1];
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird1.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird1.display();
    bird2.display();
    bird3.display();

    platform.display();
    //log6.display();
    slingshot.display();    
    text("x: "+mouseX,mouseX,mouseY);
    text("y: "+mouseY,mouseX+30,mouseY);
}

function mouseDragged(){
    Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    birds.pop();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setAngle(birds[birds.length-1].body, 0);
        Matter.Body.setAngularVelocity(birds[birds.length-1].body, 0);
        Matter.Body.setPosition(birds[birds.length-1].body, {x: 200,y:50});
        slingshot.attach(birds[birds.length-1].body);
        birds[birds.length-1].traj = []
    }
    
}
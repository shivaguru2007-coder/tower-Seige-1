const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(750,240,50,50);
    box2 = new Box(600,240,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(650,240,50,50);
    box5 = new Box(800,240,50,50);
    log = new Ground(700,300,300,20)
    box6 = new Box(750,240,50,50);
    box7 = new Box(700,240,50,50);
    box8 = new Box(650,240,50,50);

    box9 = new Box(700,240,50,50);
    projectile = new Proj(200,350,40,40);
    slingshot = new SlingShot(projectile.body,{x:200, y:350});
}

function draw(){
    background("#372B2B");
    Engine.update(engine);
    strokeWeight(4);
    stroke("yellow");
    box1.display();
    box2.display();
    log.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
   slingshot.display();
   projectile.display();
   
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(projectile.body);
        gameState = "onSling";
        Matter.Body.setVelocity(projectile.body,{x:0,y:0});
        Matter.Body.setPosition(projectile.body,{x:200,y:350});
    }
}

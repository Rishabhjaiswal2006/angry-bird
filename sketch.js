const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var MYengine, MYworld;
var box1, pig1,back;
var platform;

function preload(){
  back=loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);
    MYengine = Engine.create();
    MYworld = MYengine.world;

    
    ground = new Ground(600,390,1200,20)
    platform = new Ground(180,300,350,165);
    box1 = new Box(700,320);
    box2 = new Box(920,320);
    pig1 = new Pigs(810, 350);
    log1 = new Logs(810,260,300, PI/2);

    box3 = new Box(700,240);
    box4 = new Box(920,240);
    pig3 = new Pigs(810, 220);

    log3 =  new Logs(810,180,300, PI/2);

    box5 = new Box(810,160);
    log4 = new Logs(760,120,150, PI/7);
    log5 = new Logs(870,120,150, -PI/7);

    bird = new Bird(270,50);

    //conlog = new Logs(200,150,100,PI/2);
    sling= new SlingShot(bird.body,{x:270,y:50});
   
}

function draw(){
    background(back);
    Engine.update(MYengine);
    
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

    bird.display();
    //conlog.display();

   platform.display();
   sling.display();
   

}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
} 
function keyPressed(){
  if(keyCode===32){
    sling.attach(bird.body);
  }
}
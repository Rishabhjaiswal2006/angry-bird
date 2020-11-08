const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var MYengine, MYworld;
var box1, pig1,back;
var platform,conlog;

function preload(){
  back=loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);
    MYengine = Engine.create();
    MYworld = MYengine.world;

    
    ground = new Ground(600,390,1200,20)
    platform = new Ground(200,300,300,200);
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

    bird = new Bird(100,100);

    conlog = new Logs(200,150,100,PI/2);
    thread= new Thread(bird.body,conlog.body);
   
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
    conlog.display();

   platform.display();
   thread.display();
   

}
/*const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var MYengine,MYworld, box1,box2,ground,pig1,log1,box3,box4,pig2;
var log2,log3,log4,box5;


function setup(){

  createCanvas(1200,600);

  MYengine=Engine.create();
  MYworld=MYengine.world;

  ground = new Ground(600,590,1200,20);
  box1 = new Box(1000,550,80,80);
  box2 = new Box(800,550,80,80);
  box3 = new Box(1000,490,80,80);
  box4 = new Box(800,490,80,80);
  box5 = new Box(900,400,80,80);

  pig1= new Pigs(900,520);
  pig2= new Pigs(900,490);
  
  log1= new Logs(900,500,350,PI/2);
  log2= new Logs(900,460,350,PI/2);
  log3= new Logs(760,120,150,PI/7);
  log4= new Logs(870,120,150,-PI/7);
  
}

function draw(){

  background("pink");
  Engine.update(MYengine);


  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();
  
  log1.display();
  log2.display();
  log3.dislpay();
  log4.dislpay();
}*/
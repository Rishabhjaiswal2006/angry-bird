const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var MYengine, MYworld;
var box1, pig1,back;
var platform,backi;
var gs="onSling";
var score=0;


function preload(){
  
  BackgroundImg();


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
  if(back){
    background(back);
  }
  noStroke();
  textSize(35);
  fill("yellow");
  text("score:"+score,1000,50);


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
    pig1.score();
    pig3.score();
    //conlog.display();

   platform.display();
   sling.display();
   

}
function mouseDragged(){
  if(gs!== "launched"){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  sling.fly();
  gs="launched";
} 
function keyPressed(){
  if(keyCode===32){
    sling.attach(bird.body);
  }
}
async function BackgroundImg(){
  var mytime= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var mytimeJSON= await mytime.json();
  
  var dt= mytimeJSON.datetime;
  
  var hour= dt.slice(11,13);
  
  if(hour >= 05 && hour <= 17){
 backi="sprites/bg.png";
  }
  else{
    backi="sprites/bg2.jpg";
  }

  back=loadImage(backi);
}
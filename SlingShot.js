class SlingShot
{
    constructor(bodyA,pointB)
    {
        var join={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 5
          }
          this.sling1=loadImage("sprites/sling1.png");
          this.sling2=loadImage("sprites/sling2.png");
          this.sling3=loadImage("sprites/sling3.png");
          this.pointB=pointB;
          this.sling= Constraint.create(join);
          World.add(MYworld,this.sling);
      
    }
    attach(body){
        this.sling.bodyA=body;
    }
    
    display(){

        image(this.sling1,270,20);
        image(this.sling2,242,20);
        
        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position;
        var posB=this.pointB;
        push();
        stroke("rgb(48,22,8)");
        if(posA.x<280){
        strokeWeight(10);
        line(posA.x-20,posA.y,posB.x-10,posB.y);
        line(posA.x-20,posA.y,posB.x+30,posB.y-3);
        image(this.sling3,posA.x-30,posA.y-10,15,30);
         }
         else{
             strokeWeight(5);
             line(posA.x+25,posA.y,posB.x-10,posB.y)
             line(posA.x+25,posA.y,posB.x+30,posB.y-3);
             image(this.sling3,posA.x+25,posA.y-10,15,30);
         }
        pop();
        }

    }
    fly(){
        this.sling.bodyA=null;
    }
}
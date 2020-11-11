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
          this.pointB=pointB;
          this.sling= Constraint.create(join);
          World.add(MYworld,this.sling);
      
    }
    display(){
        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position;
        var posB=this.pointB;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
}
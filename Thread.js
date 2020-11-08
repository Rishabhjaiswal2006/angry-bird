class Thread
{
    constructor(bodyA,bodyB)
    {
        var join={
            bodyA: bird.body,
            bodyB: conlog.body,
            stiffness: 1,
            length: 5
          }
          this.thread= Constraint.create(join);
          World.add(MYworld,this.thread);
      
    }
    display(){
        var posA=this.thread.bodyA.position;
        var posB=this.thread.bodyB.position;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}
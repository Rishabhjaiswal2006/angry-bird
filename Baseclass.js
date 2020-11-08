class Baseclass{

    constructor(x,y,width,height,angle){

        var rest={
            'restitution' : 0.8,
            'density':0.3,
            'friction':5
        }

        this.body = Bodies.rectangle(x,y,width,height,rest);
        this.width = width;
        this.height = height;
        this.image=loadImage("sprites/base.png");
        World.add(MYworld,this.body);
    }

    display(){
        var pos = this.body.position ;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
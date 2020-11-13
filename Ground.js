class Ground{
    constructor(x,y,width,height){

        var abc={
            isStatic:true
        }  

        this.body=Bodies.rectangle(x,y,width,height,abc);
        this.width=width;
        this.height=height;
        World.add(MYworld,this.body);
        
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("#56301B");
        rect(pos.x,pos.y,this.width,this.height);
    }
}
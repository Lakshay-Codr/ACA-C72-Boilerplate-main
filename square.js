class Square{
    constructor(x,y,w,h){
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h)
        Composite.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
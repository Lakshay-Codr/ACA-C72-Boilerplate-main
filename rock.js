class Rock{
    constructor(x,y,w,h){
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h)
        Composite.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
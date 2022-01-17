class Circle{
    constructor(x,y,r){
        this.radius=r;
        this.body=Bodies.circle(x,y,r)
        Composite.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x, pos.y, this.radius );
    }
}
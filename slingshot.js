class Slingshot{
    constructor(Body1,Body2){
        var ops={
            bodyA:Body1,
            bodyB:Body2,length:10,stiffnes:0.04
        }
        this.sling=Constraint.create(ops);
        World.add(world,this.sling)
    }
    Display(){
        var point1=this.sling.bodyA.position;
        var point2=this.sling.bodyB.position;
        push();
        strokeWeight(4)

        line(point1.x,point1.y,point2.x,point2.y)
        pop();
    }
}
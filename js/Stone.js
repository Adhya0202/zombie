class Stone {
    constructor(x, y,radius) {
      var options = {
        restitution:0.8,
       
      };
      this.radius = radius
      this.body = Bodies.circle(x, y,radius,options);
      World.add(world, this.body);
    }

    display(){
        fill("yellow");
        ellipseMode(RADIUS)
       ellipse(this.body.position.x, this.body.position.y,this.radius);
        
       }
}
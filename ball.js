class Box {
  constructor(x, y, radius) {
    var options = {
        'restitution':.5,
        'friction':1,
        'density':2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle*60);
    console.log(angle)
    rectMode(CENTER);
    fill(0);
    stroke('brown')
    strokeWeight(5)
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
};

class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'density':1,
        'friction':0.8
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    var angle=this.body.angle;
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};

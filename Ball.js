class Ball {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'density':1.2,
          'friction':0.5,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.img = loadImage("paper.png");
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      image(this.img,-15,-11,50,50);
      pop();
    }
  }
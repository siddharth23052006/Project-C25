class BottomEdge {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': true,
          'restitution':0.0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.img = loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.img,0,-40,110,100);
      /*rectMode(CENTER);
      rect(0,0,this.width,this,height);*/
      rect()
      pop();
    }
  }
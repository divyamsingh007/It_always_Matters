class Iron {
  constructor(x, y) {
    var options = {
      restitution: 1,
      friction: 0.5,
      density: 1.5,
    };
    this.body = Bodies.rectangle(x, y, 50, 30, options);
    this.width = 50;
    this.height = 30;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(rgb(57, 98, 110));
    strokeWeight(4);
    stroke("black");
    text("iron");
    rect(0, 0, this.width, this.height);
    pop();
  }
}

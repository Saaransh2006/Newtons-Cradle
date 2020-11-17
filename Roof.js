class Roof {
    constructor(x, y) {
      this.body = Bodies.rectangle(x, y, 500,80, {isStatic:true});
      World.add(world, this.body);

      this.width = 500;
      this.height = 80;
    }

    display() {
      rectMode(CENTER);
      stroke("black")
      fill("black");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
};
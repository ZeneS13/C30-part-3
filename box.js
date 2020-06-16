class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("pics/virus.png");
    this.Visiblity = 255;
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
   if(this.body.speed > 3){
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
     }
     

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black");
    rect(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

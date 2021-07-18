class Chapulincolorado{
  constructor(x, y, width, height, angle) {
       var options = {
            density: 1, frictionAir: 0.005};
             this.body = Bodies.rectangle(x, y, width, height, options); 
             this.width = width;
              this.height = height;
              this.image=loadImage("chipotle.png");
               World.add(world, this.body);
             } display() 
             { var angle = this.body.angle;
                 push();
                  translate(this.body.position.x, this.body.position.y);
                   rotate(angle);
                   imageMode(CENTER)
                   image(this.image,200,200,200,200);
                     pop(); } 
}
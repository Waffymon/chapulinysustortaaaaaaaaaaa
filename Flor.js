class Flor{
    constructor(x,y,width,height){
        var object_options = {
      isStatic : true     
    }  
    this.body= Bodies.rectangle(x,y,width,height, object_options);
      this.width=width;
      this.height=height;
    World.add(world, this.body)
    }
    display(){
      var pouz=this.body.position;
      rectMode(CENTER);
    fill(250,45,23);
   rect(pouz.x,pouz.y,this.width,this.height);
    }
    
  }
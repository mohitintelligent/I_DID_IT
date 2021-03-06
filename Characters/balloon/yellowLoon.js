class yellowBalloon {
    constructor(x, y, radius) {
      var options = { 
        density: 0.2, 
        frictionAir: 0.005
      };
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.visiblity=255;
      this.score=7;

      this.image = loadImage("images/final yellow loon.png");

      World.add(world, this.body);

    }
    
    display() {

      push();

      translate(this.body.position.x, this.body.position.y);

      imageMode(RADIUS);
      image(this.image, -30, -30, 75, 75);

      pop();

    }

      AddScore(){

        World.remove(world, this.body);
            
        push();
            
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            
        pop();
            
       }
}
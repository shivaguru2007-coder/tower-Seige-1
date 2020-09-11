class Proj extends BaseClass {
    constructor(x, y, width, height){
      var options = {
        isStatic: true,
        density: 0.6,
        friction: 1,
        restitution: 0.4
      }
      super(x,y,width,height);
      this.image = loadImage("proj.png");
    }
    place(){
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
      this.body.position.x = 200;
      this.body.position.y = 350;
    
    }
  };
  
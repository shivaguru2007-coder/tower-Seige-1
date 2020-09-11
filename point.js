class Point extends BaseClass2 {
    constructor(x, y, width, height){
      var options = {
        isStatic: true,
        density: 0,
        friction: 1,
        restitution: 0.4
      }
      super(x,y,width,height);
      this.image = loadImage("point.png");
    }
  
  };
  
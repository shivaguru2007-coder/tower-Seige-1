class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      isStatic: false,
      density: 0.6,
      friction: 1,
      restitution: 0.4
    }
    super(x,y,width,height);
    strokeWeight(4);
    stroke("green");

    this.image = loadImage("cic.png");
  }

};

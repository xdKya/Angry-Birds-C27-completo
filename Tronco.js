class Tronco extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("spritesangrybirds/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}
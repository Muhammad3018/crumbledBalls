class Bird extends BaseClass {
  constructor(x,y, options){
    super(x,y,50,50);
    this.image = loadImage("sprites/paper.png");
  }

  display() {
    //this.body.position.x = 100;
    //this.body.position.y = 370;
    super.display();
  }
}

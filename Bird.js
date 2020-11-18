class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.traj = [];

  }

  display() {
    if (this.body.speed > 8&&this.body.position.x>200) {
      var position = [this.body.position.x, this.body.position.y]
      this.traj.push(position);

      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
    }
    for (var i = 0; i < this.traj.length; i++) {
      image(this.smoke, this.traj[i][0], this.traj[i][1])
    }

    super.display();
    

  }
}

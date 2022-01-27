class Obstacle {
  constructor(ctx, gameSize, obstacleSize, imgArr) {
    this.ctx = ctx;
    this.gameSize = gameSize;
    this.obstacleSize = {
      h: obstacleSize,
      w: obstacleSize / 1.2,
    };
    this.imgArr = imgArr;
    this.obstaclePos = {
      x: this.gameSize.w - this.obstacleSize.w,
      y: this.randomLocation(),
    };

    this.obstacleSpeed = 5;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    const imgName = this.randomImages();
    this.imageInstance.src = `../images/${imgName}`;
  }

  randomLocation() {
    return Math.floor(
      Math.random() * (this.gameSize.h - this.obstacleSize.h) + 150
    );
  }

  randomImages() {
    let i = Math.floor(Math.random() * this.imgArr.length);
    return this.imgArr[i];
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.obstaclePos.x,
      this.obstaclePos.y,
      100,
      100
    );
    this.move();
  }

  move() {
    this.obstaclePos.x -= this.obstacleSpeed;
  }
}

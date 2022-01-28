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

    this.image = this.randomImage();
    // this.image = { url: "Bomb.png", frames: 1, width: 100, height: 100 },

    this.obstacleSpeed = 8;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = `images/${this.image.url}`;
    this.imageInstance.frames = this.image.frames;
    this.imageInstance.framesIndex = 0;
  }

  randomLocation() {
    return Math.floor(
      Math.random() * (this.gameSize.h - this.obstacleSize.h - 151) + 150
    );
  }

  randomImage() {
    let i = Math.floor(Math.random() * this.imgArr.length);
    return this.imgArr[i];
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.imageInstance,
      this.imageInstance.framesIndex *
      (this.imageInstance.width / this.imageInstance.frames),
      0,
      this.imageInstance.width / this.imageInstance.frames,
      this.imageInstance.height,
      this.obstaclePos.x,
      this.obstaclePos.y,
      this.image.width,
      this.image.height
    );
    this.animate(framesCounter);
    this.move();
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.imageInstance.framesIndex++;
    }
    if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
      this.imageInstance.framesIndex = 0;
    }
  }

  // draw() {
  //   this.ctx.drawImage(
  //     this.imageInstance,
  //     this.obstaclePos.x,
  //     this.obstaclePos.y,
  //     100,
  //     100
  //   );
  //   this.move();
  // }

  move() {
    this.obstaclePos.x -= this.obstacleSpeed;
  }
}

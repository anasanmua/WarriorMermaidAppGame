class Live {
  constructor(ctx, gameSize, liveSize, imgArr) {
    this.ctx = ctx;
    this.gameSize = gameSize;
    this.liveSize = {
      h: liveSize,
      w: liveSize / 1.2,
    };

    this.imageInstance = undefined;
    this.imgArr = imgArr;
    this.livePos = {
      x: this.gameSize.w - this.liveSize.w,
      y: this.randomLocation(),
    };

    this.liveSpeed = 4;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    const imgName = this.randomImages();
    this.imageInstance.src = `../images/animals/${imgName}`;
    this.imageInstance.frames = 10;
    this.imageInstance.framesIndex = 0;
  }

  randomLocation() {
    //  return Math.floor(Math.random() * (max - min + 1) + min)
    return Math.floor(
      Math.random() * (this.gameSize.h - this.liveSize.h - 151) + 150
    );
  }

  randomImages() {
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
      this.livePos.x,
      this.livePos.y,
      this.liveSize.h,
      this.liveSize.w
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

  move() {
    this.livePos.x -= this.liveSpeed;
  }
}

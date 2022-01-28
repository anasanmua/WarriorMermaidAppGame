class Bullets {
  constructor(ctx, posPlayerX, posPlayerY, basePosition, playerSize) {
    this.ctx = ctx;
    this.playerSize = { w: 100, h: 100 };
    this.posX = posPlayerX + playerSize.w;
    this.posY = posPlayerY + playerSize.h / 2;
    this.basePosition = basePosition;
    this.playerSize.h = playerSize.h;
    this.playScoreImage = "bubbles.png";
    this.imageInstance = undefined;
    this.velX = 10;
    this.velY = 1;
    this.gravity = 0.5;
    this.bulletSize = { w: 80, h: 80 };

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = `images/${this.playScoreImage}`;
    this.imageInstance.frames = 7;
    this.imageInstance.framesIndex = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.imageInstance.framesIndex *
      (this.imageInstance.width / this.imageInstance.frames),
      0,
      this.imageInstance.width / this.imageInstance.frames,
      this.imageInstance.height,
      this.posX,
      this.posY,
      this.bulletSize.w,
      this.bulletSize.h
    );
    this.move();
  }

  move() {
    this.posX += this.velX;
    this.posY += this.velY;
    this.velX += this.gravity;
  }
}

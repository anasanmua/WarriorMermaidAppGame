class Player {
  constructor(ctx, gameSize, keys) {
    this.ctx = ctx;
    this.gameSize = gameSize;
    this.playerSize = { w: 100, h: 100 };

    this.imageInstance = undefined;
    this.imageUrl = "./images/player.png";

    this.keys = keys;

    this.posX = 50;
    this.posY = this.gameSize.h - this.playerSize.h - 20;
    this.posY0 = this.posY;

    this.speed = 1;
    this.gravity = 0.4;

    this.keys = keys;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = this.imageUrl;
    this.imageInstance.frames = 3;
    this.imageInstance.framesIndex = 0;
  }

  draw(framesCounter) {
    this.drawFilledRectangle();
    this.ctx.drawImage(
      this.imageInstance,
      this.imageInstance.framesIndex *
        (this.imageInstance.width / this.imageInstance.frames),
      0,
      this.imageInstance.width / this.imageInstance.frames,
      this.imageInstance.height,
      this.posX,
      this.posY,
      this.playerSize.w,
      this.playerSize.h
    );
  }

  drawFilledRectangle() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.posX,
      this.posY,
      this.playerSize.w,
      this.playerSize.h
    );
  }
}

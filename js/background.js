class Background {
  constructor(ctx, gameSize) {
    this.ctx = ctx;
    this.backgroundPos = { x: 0, y: 0 };
    this.backgroundSpeed = 1;
    this.backgroundImage = "./images/1_game_background.png";
    this.imageInstance = undefined;
    this.gameSize = gameSize;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = this.backgroundImage;
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.backgroundPos.x,
      this.backgroundPos.y,
      this.gameSize.w,
      this.gameSize.h
    );
    this.ctx.drawImage(
      this.imageInstance,
      this.backgroundPos.x + this.gameSize.w,
      this.backgroundPos.y,
      this.gameSize.w,
      this.gameSize.h
    );
    this.move();
  }

  move() {
    if (this.backgroundPos.x <= -this.gameSize.w) {
      this.backgroundPos.x = 0;
    } else {
      this.backgroundPos.x -= this.backgroundSpeed;
    }
  }
}

class GameOver {
  constructor(ctx, gameSize) {
    this.ctx = ctx;
    this.gameSize = gameSize;
    this.gameOverPos = { x: 100, y: 100 };

    this.gameOverImage = "../images/gameOverC.png";
    this.imageInstance = undefined;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = this.gameOverImage;
    this.imageWithText = new Image();
    this.imageWithText.src = "../images/gameOverText.png";
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.gameOverPos.x,
      this.gameOverPos.y,
      this.gameSize.w,
      this.gameSize.h
    );

    this.ctx.drawImage(
      this.imageInstance,
      this.gameOverPos.x,
      this.gameOverPos.y,
      this.gameSize.w,
      this.gameSize.h
    );
  }

  gameOver() {
    if (this.playLife.this.playLifeSize.w === 0) {
      clearInterval(this.interval);
    } else {
      null;
    }
  }
}

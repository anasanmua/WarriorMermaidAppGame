class PlayScore {
  constructor(ctx, gameSize) {
    this.ctx = ctx;
    this.gameSize = gameSize;
    this.playScoreImage = "dec_5.png";
    this.imageInstance = undefined;

    this.scoreSize = {
      w: 400,
      h: 50,
    };

    this.scorePos = {
      x: 150,
      y: 70,
    };

    this.scoreValue = 0;

    this.init();
  }

  init() {
    // this.imageInstance = new Image();
    // this.imageInstance.src = `../images/chain_1.png`;

    this.imageInstance = new Image();
    this.imageInstance.src = `../images/dec_5.png`;
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.gameSize.w - 400 + 5,
      this.scorePos.y + 5,
      300,
      80
    );

    this.ctx.drawImage(
      this.imageInstance,
      this.gameSize.w - 400 + 5,
      this.scorePos.y + 5,
      300,
      80
    );

    this.ctx.fillStyle = "white";
    this.ctx.font = "bold 50px Courier";
    this.ctx.fillText(
      this.scoreValue,
      this.gameSize.w - 280,
      this.scorePos.y + 55
    );
  }
}

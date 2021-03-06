class Playlife {
  constructor(ctx, gameSize) {
    this.ctx = ctx;
    this.gameSize = gameSize;

    this.playLifeSize = {
      w: 400,
      h: 50,
    };

    this.playLifePos = {
      x: 150,
      y: 70,
    };

    this.health = 250;

    this.init();
  }

  init() {
    this.draw();
  }

  draw() {
    //LIFE

    // this.ctx.fillStyle = "#444";
    // this.ctx.fillRect(
    //   this.playLifePos.x,
    //   this.playLifePos.y,
    //   410,
    //   this.playLifeSize.h + 10
    // );

    this.ctx.fillStyle = "#FF6464";
    this.ctx.fillRect(
      this.playLifePos.x + 5,
      this.playLifePos.y + 5,
      400,
      this.playLifeSize.h
    );

    this.ctx.fillStyle = "#24A19C";
    this.ctx.fillRect(
      this.playLifePos.x + 5,
      this.playLifePos.y + 5,
      this.playLifeSize.w,
      this.playLifeSize.h
    );
  }
}

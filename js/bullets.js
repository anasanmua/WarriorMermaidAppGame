class Bullets {
  constructor(ctx, posPlayerX, posPlayerY, basePosition, playerSize) {
    this.ctx = ctx;
    this.playerSize = { w: 100, h: 100 };
    this.posX = posPlayerX + playerSize.w;
    this.posY = posPlayerY + playerSize.h / 2;
    this.basePosition = basePosition;
    this.playerSize.h = playerSize.h;
    this.radius = 10;
    this.velX = 10;
    this.velY = 1;
    this.gravity = 0.5;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.move();
  }
  move() {
    this.posX += this.velX;
    this.posY += this.velY;
    this.velX += this.gravity;
  }
}

class Player {
  constructor(ctx, gameSize, keys) {
    this.ctx = ctx;
    this.gameSize = gameSize;
    this.playerSize = { w: 200, h: 200 };

    this.imageInstance = undefined;
    this.imageUrl = "./images/mermaid-sprite.png";

    //ATTEMPT
    // this.imageInstance2 = undefined;
    // this.imageUrl2 = "./images/bubbles.png"

    this.keys = keys;

    this.posPlayerX = 50;
    this.posPlayerY = this.gameSize.h / 2;
    this.basePosition = this.posPlayerY;
    this.topPosition = 20;

    this.speed = 1;
    this.gravity = 0.2;

    this.keys = keys;

    this.bullets = [];
    this.canShoot = true;

    // ACTIONS
    this.actions = {
      // floating: true,
      up: false,
      down: false,
      left: false,
      right: false,
    };

    this.setListeners();

    this.init();
  }

  init() {
    //ATTEMPT
    // this.imageInstance2 = new Image();
    // this.imageInstance.src = this.imageUrl;
    this.imageInstance = new Image();
    this.imageInstance.src = this.imageUrl;
    this.imageInstance.frames = 10;
    this.imageInstance.framesIndex = 0;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.imageInstance,
      this.imageInstance.framesIndex *
      (this.imageInstance.width / this.imageInstance.frames),
      0,
      this.imageInstance.width / this.imageInstance.frames,
      this.imageInstance.height,
      this.posPlayerX,
      this.posPlayerY,
      this.playerSize.w,
      this.playerSize.h
    );

    this.animate(framesCounter);
    this.move();
    this.bullets.forEach((bullet) => bullet.draw());
    this.clearBullets();
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
    //floating
    if (
      this.posPlayerY < this.gameSize.h - this.playerSize.h &&
      this.posPlayerY >= -100
    ) {
      this.posPlayerY += this.speed;
    }

    // UP
    if (this.posPlayerY > 150 && this.actions.up) {
      this.posPlayerY -= 10;
    }
    // RIGHT
    if (
      this.posPlayerX < this.gameSize.w - this.playerSize.w &&
      this.actions.right
    ) {
      this.posPlayerX += 10;
    }
    //LEFT
    if (this.posPlayerX > 0 && this.actions.left) {
      this.posPlayerX -= 10;
    }
    //DOWN
    if (
      this.posPlayerY < this.gameSize.h - this.playerSize.h &&
      this.actions.down
    ) {
      this.posPlayerY += 10;
    }
  }

  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.UP:
          this.actions.up = true;
          break;
        case this.keys.RIGHT:
          this.actions.right = true;
          break;
        case this.keys.LEFT:
          this.actions.left = true;
          break;
        case this.keys.DOWN:
          this.actions.down = true;
          break;
        case this.keys.SPACE:
          if (this.canShoot) {
            this.shoot();
            this.canShoot = false
          }
          break;

      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.keyCode) {
        case this.keys.UP:
          this.actions.up = false;
          break;
        case this.keys.RIGHT:
          this.actions.right = false;
          break;
        case this.keys.LEFT:
          this.actions.left = false;
          break;
        case this.keys.DOWN:
          this.actions.down = false;
          break;
        case this.keys.SPACE:
          this.canShoot = true

          break;

      }
    });
  }
  shoot() {
    this.bullets.push(
      new Bullets(
        this.ctx,
        this.posPlayerX,
        this.posPlayerY,
        this.basePosition,
        this.playerSize,
      )
    );
  }
  clearBullets() {
    this.bullets = this.bullets.filter((bull) => bull.posX > 0);
  }
}

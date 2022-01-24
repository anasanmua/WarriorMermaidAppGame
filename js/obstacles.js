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

    this.obstacleSpeed = 5;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    const imgName = this.randomImages();
    this.imageInstance.src = `../images/${imgName}`;
  }

  randomLocation() {
    return Math.floor(
      Math.random() * (this.gameSize.h - this.obstacleSize.h - 0)
    );
  }

  randomImages() {
    let i = Math.floor(Math.random() * this.imgArr.length);
    return this.imgArr[i];
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.obstaclePos.x,
      this.obstaclePos.y,
      80,
      80
    );
    this.move();
  }

  move() {
    this.obstaclePos.x -= this.obstacleSpeed;
  }
}

// class Obstacle {
//   constructor(ctx, gameSize, imgSource) {
//     this.ctx = ctx;
//     this.gameSize = gameSize;
//     this.imgSource = imgSource;

//     this.ObstaclesSize = {
//       h: 60,
//       w: this.ObstaclesSize.h / 1.2,
//     };

//     this.ObstaclesPos = {
//       x: this.gameSize.w,
//       y: 20,
//       //   y: this.randomLocation(),
//     };

//       randomLocation() {
//     return Math.floor(
//       Math.random() * (this.gameSize.h - this.ObstaclesSize.h + 10)
//     );
//   }
//   }
// }

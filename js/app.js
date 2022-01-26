const warriorMermaidGameApp = {
  appName: "Warrior Mermaid game",
  authors: "Ana Sánchez Muñoz, Shirley Gianina",
  version: "1.0.0",
  license: undefined,
  canvas: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },
  FPS: 60,
  framesCounter: 0,
  backgroundImage: undefined,
  player: undefined,
  score: undefined,
  obstacles: [],
  lives: [],
  bullets: [],


  keys: {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  },

  obstaclesImages: ["alga.png", "alga2.png", "alga3.png"],

  livesImages: ["beluga.png", "whale.png", "whale2.png"],

  init() {
    this.setContext();
    this.setSize();
    this.start();

  },

  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
    console.log(this.ctx);
  },

  setSize() {
    this.gameSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
    document.querySelector("#canvas").setAttribute("width", this.gameSize.w);
    document.querySelector("#canvas").setAttribute("height", this.gameSize.h);
  },

  start() {
    this.reset();

    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      } else {
        this.framesCounter++;
      }
      this.clear();
      this.generateObstacles();
      this.generateLives();
      this.drawAll();
      this.checkBulletCollision();
      this.checkLiveCollision();
      this.looseLive();

    }, 1000 / this.FPS);
  },

  reset() {
    this.playLife = new Playlife(this.ctx, this.gameSize);
    this.score = new PlayScore(this.ctx, this.gameSize);
    this.player = new Player(this.ctx, this.gameSize, this.keys);
    this.background = new Background(this.ctx, this.gameSize);
    this.obstacles = [];
    this.lives = [];
  },

  drawAll() {


    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach((obs) => obs.draw());
    this.lives.forEach((liv) => liv.draw());
    this.score.draw();
    this.playLife.draw();
  },

  //OBSTACLES

  generateObstacles() {
    if (this.framesCounter % 200 === 0) {
      this.obstacles.push(
        new Obstacle(this.ctx, this.gameSize, 100, this.obstaclesImages)
        // new Obstacle(this.ctx, this.gameSize, 100, this.obstaclesImages),
        // new Obstacle(this.ctx, this.gameSize, 100, this.obstaclesImages)
      );
    }
  },

  //LIVES


  generateLives() {
    if (this.framesCounter % 100 === 0) {
      this.lives.push(
        new Live(this.ctx, this.gameSize, 100, this.livesImages)
      );
    }
  },

  //COLLISIONS

  // checkCollision(obj) {
  //   return (
  //     this.posPlayerX < obj.obstaclePosX + obj.obstacleSize &&
  //     this.posPlayerX + this.player.width > obj.obstaclePosX &&
  //     this.posPlayerY < obj.obstaclePosY + obj.height &&
  //     this.posPlayerY + this.playerSize.h > obj.obstaclePosY
  //   );
  // },

  checkBulletCollision() {
    this.obstacles.forEach((obs) => {
      if (
        this.player.posPlayerX < obs.obstaclePos.x + obs.obstacleSize.w &&
        this.player.posPlayerX + this.player.playerSize.w > obs.obstaclePos.x &&
        this.player.posPlayerY < obs.obstaclePos.y + obs.obstaclePos.x &&
        this.player.playerSize.h + this.player.posPlayerY > obs.obstaclePos.y
      ) {
        if (this.playLife.playLifeSize.w > 0) {
          this.playLife.playLifeSize.w -= 1
        } else {
          null
        }
      } else {
        null

      }

    })

  },

  checkLiveCollision() {
    this.lives.forEach((liv) => {
      if (this.player.posPlayerX < liv.livePos.x + liv.liveSize.w &&
        this.player.posPlayerX + this.player.playerSize.w > liv.livePos.x &&
        this.player.posPlayerY < liv.livePos.y + liv.livePos.x &&
        this.player.playerSize.h + this.player.posPlayerY > liv.livePos.y

      ) {
        console.log("live")
      }
    })

  },

  //LOOSING LIVE

  looseLive() {
    if (this.scoreValue > 0)
      return console.log(+100)
  },




  clear() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  },
};

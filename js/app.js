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
  gameOverImageInstance: undefined,
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
      this.createGameOver()
      this.clear();
      this.generateObstacles();
      this.generateLives();
      this.drawAll();
      this.checkObstacleCollision();
      this.checkLiveCollision();
      this.checkBulletCollision();
      console.log(this.playLife.playLifeSize.w)
      if (this.playLife.playLifeSize.w <= 0) {
        this.gameOver()
      };

    }, 1000 / this.FPS);
  },

  createGameOver() {
    this.gameOverImageInstance = new Image();
    this.gameOverImageInstance.src = "../images/gameOverC.png";

  },

  drawGameOver() {
    this.ctx.drawImage(
      this.gameOverImageInstance,
      0,
      0,
      this.gameSize.w,
      this.gameSize.h
    );
    this.ctx.fillText('holiwi', 100, 100, 100)
  },

  gameOver() {
    clearInterval(this.interval)
    this.drawGameOver();

  },

  reset() {
    this.playLife = new Playlife(this.ctx, this.gameSize);
    this.playScore = new PlayScore(this.ctx, this.gameSize);
    this.player = new Player(this.ctx, this.gameSize, this.keys);
    this.background = new Background(this.ctx, this.gameSize);

    this.obstacles = [];
    this.lives = [];
    this.bullets = [];


  },

  drawAll() {


    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach((obs) => obs.draw());
    this.lives.forEach((liv) => liv.draw());
    this.playScore.draw();
    this.playLife.draw();

  },


  //OBSTACLES

  generateObstacles() {
    if (this.framesCounter % 200 === 0) {
      this.obstacles.push(
        new Obstacle(this.ctx, this.gameSize, 100, this.obstaclesImages)

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

  //1.OBSTACLES

  checkObstacleCollision() {
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

  //2.LIVES

  checkLiveCollision() {
    this.lives.forEach((liv) => {
      if (this.player.posPlayerX < liv.livePos.x + liv.liveSize.w &&
        this.player.posPlayerX + this.player.playerSize.w > liv.livePos.x &&
        this.player.posPlayerY < liv.livePos.y + liv.livePos.x &&
        this.player.playerSize.h + this.player.posPlayerY > liv.livePos.y

      ) {
        this.playScore.scoreValue += 5
      }
    })

  },

  //3.BULLETS 

  checkBulletCollision() {
    this.player.bullets.forEach((bull) => {

      this.obstacles.forEach((obs) => {

        if (
          bull.posX < obs.obstaclePos.x + obs.obstacleSize.w &&
          bull.posX + bull.imageInstance.width / 7 > obs.obstaclePos.x &&
          bull.posY < obs.obstaclePos.y + obs.obstaclePos.x &&
          bull.imageInstance.width / 7 + bull.posY > obs.obstaclePos.y
        ) {
          obs.obstaclePos.x = -1 - obs.obstacleSize.w
        } else {
          null
          // console.log("nothing happens")
        }
      })

    })
  },

  //CLEAR

  clear() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  },

};

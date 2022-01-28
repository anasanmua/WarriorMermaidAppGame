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
  // gameOverImageInstance: undefined,
  obstacles: [],
  lives: [],
  bullets: [],
  sounds: {
    theme: new Audio("./sounds/mermaid_sound.mp3"),
  },

  keys: {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  },

  //creamos un array de objetos
  obstaclesImages: [
    { url: "Bomb.png", frames: 1, width: 100, height: 100 },
    { url: "Barrel_1.png", frames: 1, width: 100, height: 100 },
    { url: "Barrel_2.png", frames: 1, width: 100, height: 100 },
    { url: "Jellyfish_1.png", frames: 10, width: 150, height: 100 },
    { url: "Jellyfish_2.png", frames: 10, width: 150, height: 100 },
    { url: "Net.png", frames: 1, width: 100, height: 100 },
    { url: "Anchor.png", frames: 1, width: 100, height: 100 },
    { url: "Shark.png", frames: 10, width: 250, height: 150 },
    { url: "Shark2.png", frames: 10, width: 250, height: 150 },
  ],

  livesImages: [
    "Fish_move_1_000.png",
    "Fish_move_2_000.png",
    "Fish_move_3_000.png",
    "Fish_move_4_000.png",
    // "Crab_move_1_000.png",
  ],

  init() {
    this.setContext();
    this.setSize();
    this.start();
  },

  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
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

    this.sounds.theme.volume = 1;
    this.sounds.theme.play();
    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      } else {
        this.framesCounter++;
      }
      // this.createGameOver();
      this.clear();
      this.generateObstacles();
      this.clearObstacles();
      this.generateLives();
      this.clearLives();
      this.drawAll();

      this.checkObstacleCollision();
      this.checkLiveCollision();
      this.checkBulletCollision();
      if (this.playLife.playLifeSize.w <= 0) {
        this.gameOver();
      }
    }, 1000 / this.FPS);
  },


  gameOver() {
    this.sounds.theme.pause();
    document.querySelector(".game-board").style.display = "none";
    document.querySelector(".game-over").style.display = "flex";
    document.querySelector(".game-over span").innerHTML =
      this.playScore.scoreValue;
    clearInterval(this.interval);
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
    this.obstacles.forEach((obs) => obs.draw(this.framesCounter));
    this.lives.forEach((liv) => liv.draw(this.framesCounter));
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

  clearObstacles() {
    this.obstacles = this.obstacles.filter((obs) => obs.obstaclePos.x >= 0);
  },

  //LIVES

  generateLives() {
    if (this.framesCounter % 100 === 0) {
      this.lives.push(new Live(this.ctx, this.gameSize, 100, this.livesImages));
    }
  },

  clearLives() {
    this.lives = this.lives.filter((liv) => liv.show == true);
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
          this.playLife.playLifeSize.w -= 1;
        } else {
          null;
        }
      } else {
        null;
      }
    });
  },

  //2.LIVES

  checkLiveCollision() {
    this.lives.forEach((liv) => {
      if (
        this.player.posPlayerX < liv.livePos.x + liv.liveSize.w * 0.2 &&
        this.player.posPlayerX + this.player.playerSize.w * 0.8 >
        liv.livePos.x &&
        this.player.posPlayerY < liv.livePos.y + liv.liveSize.h &&
        this.player.playerSize.h * 0.2 + this.player.posPlayerY > liv.livePos.y
      ) {
        this.playScore.scoreValue += 1;
        liv.show = false;
      }
    });
  },

  //3.BULLETS

  checkBulletCollision() {
    this.player.bullets.forEach((bull) => {
      this.obstacles.forEach((obs) => {
        if (
          bull.posX < obs.obstaclePos.x + obs.obstacleSize.w &&
          bull.posX + bull.imageInstance.width / 7 > obs.obstaclePos.x &&
          bull.posY < obs.obstaclePos.y + obs.obstacleSize.h &&
          bull.imageInstance.width / 7 + bull.posY > obs.obstaclePos.y
        ) {
          obs.obstaclePos.x = -1 - obs.obstacleSize.w;
        } else {
          null;
        }
      });
    });
  },

  //CLEAR

  clear() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  },
};

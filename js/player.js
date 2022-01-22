class Player {
    constructor(ctx, gameSize, keys) {

        this.ctx = ctx;


        this.gameSize = gameSize

        this.width = 100;
        this.height = 100;

        this.imageInstance = new Image();
        this.imageInstance.src = "./images/player.png";
        this.imageInstance.frames = 3;
        this.imageInstance.framesIndex = 0;
        this.keys = keys

        this.posX = 50;
        this.posY = this.gameHeight - this.height - 20;
        this.posY0 = this.posY;

        this.velY = 1;
        this.gravity = 0.4;

        this.keys = keys;
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * (this.imageInstance.with / this.imageInstance.frames),
            0,
            this.imageInstance.width / this.imageInstance.frames,
            this.imageInstance.height,
            this.posX,
            this.posY,
            this.width,
            this.height,

            this.posX,
            this.posY,
            this.width,
            this.height
        )

    }


}
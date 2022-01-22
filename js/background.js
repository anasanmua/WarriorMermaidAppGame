class Background {

    constructor(ctx, posX, posY, width, speed, gameSize) {
        this.ctx = ctx
        this.backgroundPos = { x: posX, y: posY }
        this.backgroundSize = {
            w: width, h: width
        }
        this.backgroundSpeed = speed
        this.backgroundImage = "bg.png"
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()



    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "images/bg.png"
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.backgroundPos.x, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
        this.ctx.drawImage(this.imageInstance, this.backgroundPos.x + this.backgroundSize, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
        this.move()

    }



    move() {
        if (this.backgroundPos.x <= -this.backgroundPos.x) {
            this.backgroundPos.x = 0
        } else {
            this.backgroundPos.x -= this.speed
        }
    }
}
class PlayScore {
    constructor(ctx, gameSize) {
        this.ctx = ctx
        this.gameSize = gameSize

        this.scoreSize = {
            w: 400,
            h: 50
        }

        this.scorePos = {
            x: 150,
            y: 70
        }

        this.scoreValue = 250;


        this.init()

    }

    init() {
        this.draw()
    }

    draw() {

        //SCORE

        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.gameSize.w - 400, this.scorePos.y, this.scoreSize.w / 2, this.scoreSize.h + 10)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect((this.gameSize.w - 400) + 5, this.scorePos.y + 5, this.scoreSize.w / 2 - 10, this.scoreSize.h)

        this.ctx.fillStyle = 'black'
        this.ctx.font = "bold 24px Courier"
        this.ctx.fillText(0, 0, 0)
        //this.ctx.fillText((`${this.value}💪`), 0, 0)




    }


}
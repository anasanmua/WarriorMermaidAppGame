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
    obstacles: [],
    bullets: [],
    lives: [],

    keys: {
        TOP: 38,
        SPACE: 32
    },


    init() {
        this.setContext()
        this.setSize()
        this.start()
    },


    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },


    setSize() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },


    start() {
        this.reset()

        this.interval = setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0
            } else {
                this.framesCounter++
            }
            this.clear()

            this.drawAll()

        }, 1000 / this.FPS)
    },

    drawAll() {
        this.player.draw(this.framesCounter)
        this.background.draw()


    },

    reset() {
        this.player = new Player(this.ctx, this.width, this.height, this.keys)
        this.background = new Background(this.ctx, this.gameSize.w, this.gameSize.h, "./images/bg.png")

    },


    clear() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },


}



















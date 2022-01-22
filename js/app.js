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
    obstacles: [],
    bullets: [],
    lives: [],


    init() {
        this.setContext()
        this.setSize()
        this.drawFilledRectangle()
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

    drawFilledRectangle() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.gameSize.w / 2 - 50, this.gameSize.h / 2 - 50, 100, 100)
    }

















}
import { generateRandomPos } from './unit'
type Dir = [0, 0] | [0, 1] | [1, 0] | [0, -1] | [-1, 0]

export class StageElement {
    public element: HTMLElement
    constructor( selector:string ){
        this.element = document.querySelector(selector)
    }
    get X(): number {
        return this.element.offsetLeft
    }
    get Y(): number {
        return this.element.offsetHeight
    }
}

export class Food extends StageElement{
    constructor(selector: string){
        super(selector)
    }
    randomPos(): void{
        this.element.style.top = generateRandomPos().toString() + "px"
        this.element.style.left = generateRandomPos().toString() + "px"
        console.log("food position change: ", this.X, this.Y)
    }
}

export class Snake extends StageElement{
    public dir: Dir
    constructor( selector: string ){
        super(selector)
        // this.element = 
        this.dir = [0, 1]
    }
    changeDir(newDir: Dir): void{
        this.dir = newDir
    }
    public move = (): void => {
        console.log("move")
        this.element.style.left = this.X + this.dir[0] * 10 + "px"
        this.element.style.top = this.Y + this.dir[1] * 10 + "px"
    }
}

export class SnakeList {
    public list: Array<Snake>
    constructor (head: Snake){
        this.list.push(head)
    }
    initList(): void{
        this.list.splice(1)
    }
    createNode() :void{
        let newNode: HTMLElement = document.createElement("div")
        newNode.setAttribute("style", "snake")
    }
    addNode() :void {
        let currDir: Dir = this.list[0].dir
        let currX: number = this.list[0].X
        let currY: number = this.list[0].Y
        let newNode = new Snake()
    }
}

export class Panel {
    public score: number = 0
    public level: number = 1
    public scoreElement: HTMLElement
    public levelElement: HTMLElement

    constructor(scoreSelector: string, levelSelector: string) {
        this.scoreElement = document.querySelector(scoreSelector)
        this.levelElement = document.querySelector(levelSelector)
    }
    initPanel(): void{
        this.scoreElement.textContent = `score: ${this.score}`
        this.levelElement.textContent = `level: ${this.score}`
    }
    updateScore(): void{
        this.scoreElement.textContent = `score: ${++this.score}`
    }
    updateLevel(): void{
        if(this.level > 10) return
        this.levelElement.textContent = `level: ${++this.level}`
    }
}

export class GameControllor {
    public foodElement: Food
    public snakeElement: SnakeList
    public gamePanel: Panel
    public keyBoardListenHandle: any
    constructor( foodElement: Food, snakeElement: SnakeList, gamePanel: Panel ){
        this.foodElement = foodElement
        this.snakeElement = snakeElement
        this.gamePanel = gamePanel
    }

    startKeyBoardListen(): void {
        this.keyBoardListenHandle = (event: KeyboardEvent) => {
            let key: string = event.key
            if(key === "w" || key === "ArrowUp") {
                console.log("up")
            } else if(key === "a" || key === "ArrowLeft") {
                console.log("left")
            } else if(key === "s" || key === "ArrowDown") {
                console.log("down")
            } else if(key === "d" || key === "ArrowRight") {
                console.log("right")
            }
        }
        window.addEventListener("keydown", this.keyBoardListenHandle)
    }

    initGame(): void{
        this.gamePanel.initPanel()
        this.startKeyBoardListen()
        // this.snakeElement.move()
    }

    closeGame() :void{
        window.removeEventListener("keydown", this.keyBoardListenHandle)
        this.gamePanel.initPanel()
        this.snakeElement.initList()
    }
    
}
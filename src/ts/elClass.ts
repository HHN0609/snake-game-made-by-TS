import { generateRandomPos } from './unit'
export class Food{
    public element: HTMLElement
    constructor(idselector: string){
        // get food element on the stage
        this.element = document.querySelector(idselector)
    }
    get X(): number{
        return this.element.offsetLeft
    }
    get Y(): number{
        return this.element.offsetTop
    }
    changePos(): void{
        this.element.style.top = generateRandomPos().toString() + "px"
        this.element.style.left = generateRandomPos().toString() + "px"
        console.log("change: ", this.X, this.Y)
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
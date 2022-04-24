import './style/main.less'
import { Food, Panel, Snake, GameControllor } from './ts/elClass'
let food:Food = new Food("#food")
let panel:Panel = new Panel("#score", "#level")
// let snake: Snake = new Snake("#snake")

// let gameControllor = new GameControllor(food, snake, panel)
// gameControllor.initGame()
food.randomPos()
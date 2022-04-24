import './style/main.less'
import { Food, Panel } from './ts/elClass'
let food:Food = new Food("#food")
let panel:Panel = new Panel("#score", "#level")
food.changePos()
panel.initPanel()
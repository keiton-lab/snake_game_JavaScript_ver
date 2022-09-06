import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false

const gameBoard = document.getElementById('gameboard')

function main(currenTime) {
    if (gameOver) {
        if (confirm('You lost, press OK to restart. ')) {
            window.location = '/'
        }
        return
    }
   
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return

    lastRenderTime = currenTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkGameOver()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    
}

function checkGameOver() {
    gameOver = outsideGrid(getSnakeHead())|| snakeIntersection()
}
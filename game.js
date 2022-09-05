import { update as updateSnake, draw as drawSnake, snakeSpeed} from './snake.js'
let lastRenderTime = 0

function main(currenTime) {
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
}

function draw(){
    drawSnake()
}
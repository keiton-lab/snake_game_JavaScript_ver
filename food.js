import { onSnake, expandSnake } from './snake.js' 
import { randomGridPosition } from './grid.js'

let food = getRandomPosition()
const expensionRate = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(expensionRate)
        food = getRandomPosition()
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomPosition() {
    let newPosition
    while (newPosition == null || onSnake(newPosition)) {
        newPosition = randomGridPosition()
    }
    return newPosition
}
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearBtn = document.getElementById('clear');
const colorInput = document.getElementById('color');
const sizeInput = document.getElementById('size');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isPresed = false
let size = 1
let color = 'black'
let x
let y
let x2
let y2

canvas.addEventListener('mousedown', (event) => {
    isPresed = true

    x = event.offsetX 
    y = event.offsetY 
})
canvas.addEventListener('mouseup', (event) => {
    isPresed = false

    x = undefined
    y = undefined 
})
canvas.addEventListener('mousemove', (event) => {
    isPresed ? ( x2 = event.offsetX , y2 = event.offsetY ,console.log(x2, y2, isPresed)) : null

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
})
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2 , y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2.5
    ctx.stroke()
}

function updateSizeCounter(){
    sizeInput.innerText = size
}

drawCircle(100, 200)
drawLine(300, 300, 300, 500)


colorInput.addEventListener('change', (event) =>{
    color = event.target.value
})
increaseBtn.addEventListener('click', () =>{
    size += 1
    size > 20 ?  size = 20 : null

    updateSizeCounter()
})
decreaseBtn.addEventListener('click', () =>{
    size -= 1
    size <= 1 ?  size = 1 : null

    updateSizeCounter()
})

clearBtn.addEventListener('click', () =>{

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    updateSizeCounter()
})
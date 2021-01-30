const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isPresed = false
let size = 2
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (event) => {
    isPresed = true

    x = event.offsetX 
    y = event.offsetY 
    console.log(x, y, isPresed)
})
canvas.addEventListener('mouseup', (event) => {
    isPresed = false

    x = undefined
    y = undefined 
    console.log(x, y, isPresed)
})
canvas.addEventListener('mousemove', (event) => {
    isPresed ? (x2 = event.offsetX , y2 = event.offsetY ,console.log(x2, y2, isPresed)) : null

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

drawCircle(100, 200)

drawLine(300, 300, 300, 500)
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;

canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;

        drawCricle(x, y);
    }

});

function drawCricle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

increaseBtn.addEventListener('click', () =>{
    size += 5;

    if(size > 50) {
        size = 50;
    }
})

decreaseBtn.addEventListener('click', () =>{
    size -= 5;

    if(size < 5) {
        size = 5;
    }
})

/*function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCricle(x++, y);

    requestAnimationFrame(draw);
}

draw(); */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;

canvas.addEventListener('mousedown', () => {
    ifPressed = true;
});

canvas.addEventListener('mouseup', () => {
    ifPressed = false;
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

/*function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCricle(x++, y);

    requestAnimationFrame(draw);
}

draw(); */

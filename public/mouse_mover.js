let mouseX = 0;
let mouseY = 0;
let eventType = 'keydown'

function mouseMoverOn() {
    document.addEventListener(eventType, eventMove)
}

function mouseMoverOff() {
    document.removeEventListener(eventType, eventMove)
}

let eventMove = (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            mouseX -= 10; // Изменяйте значение по X как вам нужно
            break;
        case 'ArrowRight':
            mouseX += 10; // Изменяйте значение по X как вам нужно
            break;
        case 'ArrowUp':
            mouseY -= 10; // Изменяйте значение по Y как вам нужно
            break;
        case 'ArrowDown':
            mouseY += 10; // Изменяйте значение по Y как вам нужно
            break;
    }

    // Устанавливаем новое положение курсора мыши
    moveMouse(mouseX, mouseY);
}

// Функция для перемещения курсора мыши
function moveMouse(x, y) {
    const event = new MouseEvent('mousemove', {
        clientX: x,
        clientY: y,
    });
    document.dispatchEvent(event);
}
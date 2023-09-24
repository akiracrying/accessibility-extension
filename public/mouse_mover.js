let mouseX = 0;
let mouseY = 0;
let eventType = 'keydown'

let container = document.getElementById('container');

let imgElement = document.createElement('img');
imgElement.src = "https://media.geeksforgeeks.org/wp-content/uploads/20200319212118/cursor2.png"

let fakeCursor;

function mouseMoverOn() {
    fakeCursor = document.createElement('cursor')
    fakeCursor.appendChild(imgElement)
    container.appendChild(fakeCursor);
    document.addEventListener(eventType, eventMove)
}

function mouseMoverOff() {
    container.removeChild(fakeCursor)
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
    fakeCursor.style.left = x + 'px';
    fakeCursor.style.top = y + 'px';
}
let mouseX = 0;
let mouseY = 0;
let eventType = 'keydown'
const delta = 3


let img = document.createElement('img');
img.id = "AccessabilityCursorID"
img.src = "https://media.geeksforgeeks.org/wp-content/uploads/20200319212118/cursor2.png"
img.style.position = "absolute"
img.style.width = "10px"
img.style.height = "15px"
img.style.pointerEvents = "none"
img.style.zIndex = "99999999"

function mouseMoverOn() {

    document.body.appendChild(img)
    document.addEventListener(eventType, eventMove)
}

function mouseMoverOff() {
    document.body.removeChild(img)
    document.removeEventListener(eventType, eventMove)
}

let eventMove = (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            console.log("asd")
            mouseX -= delta; // Изменяйте значение по X как вам нужно
            break;
        case 'ArrowRight':
            mouseX += delta; // Изменяйте значение по X как вам нужно
            break;
        case 'ArrowUp':
            mouseY -= delta; // Изменяйте значение по Y как вам нужно
            break;
        case 'ArrowDown':
            mouseY += delta; // Изменяйте значение по Y как вам нужно
            break;
        case 'Enter':
            let tmp = document.elementFromPoint(mouseX, mouseY)
            console.log('enter')
            tmp.click()
            break
    }

    moveMouse(mouseX, mouseY);
}

function moveMouse(x, y) {
    img.style.left = x + 'px';
    img.style.top = y + 'px';
}
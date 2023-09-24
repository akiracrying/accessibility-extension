let originalFontSize; // Добавляем переменную для хранения исходного размера шрифта
let pxPointsChange
function changeFontSizeOn(pointToChange) {
    const allElements = document.querySelectorAll('*');
    pxPointsChange = pointToChange
    // Если исходный размер шрифта еще не был установлен, сохраняем его
    if (!originalFontSize) {
        const computedStyles = window.getComputedStyle(allElements[0]); // Получаем стиль первого элемента
        originalFontSize = parseFloat(computedStyles.fontSize);
    }

    changeFontSize(pointToChange);
}

function changeFontSizeOff() {
    changeFontSize(-pxPointsChange);
}

// Устанавливаем новый размер шрифта
function changeFontSize(newSize) {
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
        if (!isNaN(currentFontSize)) {
            const newFontSizeValue = currentFontSize + newSize;
            element.style.fontSize = newFontSizeValue + 'px';
        }
    });
}
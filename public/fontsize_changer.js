let pxPointsChange;

function changeFontSizeOn(pointToChange) {
    pxPointsChange = pointToChange;
    changeFontSize(pointToChange)
}

function changeFontSizeOff() {
    changeFontSize(-pxPointsChange);
}

// Устанавливаем новый размер шрифта
function changeFontSize(newSize) {
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
        const computedStyles = window.getComputedStyle(element);
        const currentFontSize = computedStyles.fontSize;
        const currentFontSizeValue = parseFloat(currentFontSize);
        if (!isNaN(currentFontSizeValue)) {
            const newFontSizeValue = currentFontSizeValue + newSize;
            element.style.fontSize = newFontSizeValue + 'px';
        }
    });
}

// Вызываем функцию с новым размером шрифта (например, 2px увеличит на 2 пикселя)
changeFontSize(2);

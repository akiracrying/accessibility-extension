let pxPointsChange;

function changeFontSizeOn(pointToChange) {
    pxPointsChange = pointToChange;
    changeFontSize(pointToChange)
}

function changeFontSizeOff() {
    changeFontSize(-pxPointsChange);
}

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

//
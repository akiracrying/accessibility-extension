function changeColor() {
    var elementsToChange = document.querySelectorAll('*');

    elementsToChange.forEach(function(element) {
        element.style.color = element.style.color === 'black' ? 'white' : 'black';
        element.style.backgroundColor = element.style.backgroundColor === 'white' ? 'black' : 'white';
    });
}

function changeContrastColors(element) {
    const computedStyles = window.getComputedStyle(element);
    const currentTextColor = computedStyles.color;
    const currentBackgroundColor = computedStyles.backgroundColor;

    function getContrastColor(color) {
        const hexColor = color.replace(/rgba?\(|\)|\s/g, '').split(',');
        const r = parseInt(hexColor[0]);
        const g = parseInt(hexColor[1]);
        const b = parseInt(hexColor[2]);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness >= 128 ? 'black' : 'white';
    }

    element.style.color = getContrastColor(currentTextColor);
    element.style.backgroundColor = getContrastColor(currentBackgroundColor);
}
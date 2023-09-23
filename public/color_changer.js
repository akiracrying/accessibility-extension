function changeColor() {
    // Получаем все элементы на странице (может потребоваться фильтрация)
    const allElements = document.querySelectorAll('*');
    // Проходим по всем элементам и меняем цвета
    allElements.forEach((element) => {
        changeContrastColors(element);
    });
}

// Функция, которая изменяет цвет текста и фона элемента
function changeContrastColors(element) {
    // Получаем текущие цвета текста и фона
    const computedStyles = window.getComputedStyle(element);
    const currentTextColor = computedStyles.color;
    const currentBackgroundColor = computedStyles.backgroundColor;

    // Функция для определения контрастного цвета
    function getContrastColor(color) {
        const hexColor = color.replace(/rgba?\(|\)|\s/g, '').split(',');
        const r = parseInt(hexColor[0]);
        const g = parseInt(hexColor[1]);
        const b = parseInt(hexColor[2]);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness >= 128 ? 'black' : 'white'; // Выбираем контрастный цвет
    }

    // Устанавливаем контрастные цвета текста и фона
    element.style.color = getContrastColor(currentTextColor);
    element.style.backgroundColor = getContrastColor(currentBackgroundColor);
}
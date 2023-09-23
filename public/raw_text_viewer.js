function showRowText() {
    const newWindow = window.open();

    const originalPageHTML = document.documentElement.outerHTML;

    newWindow.document.open();
    newWindow.document.write(originalPageHTML);
    newWindow.document.close();
}
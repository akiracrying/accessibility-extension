function showRowText() {
    let pageText = document.body.innerText;

    let newWindow = window.open('', '_blank');

    newWindow.document.write('<pre>' + pageText + '</pre>');
}
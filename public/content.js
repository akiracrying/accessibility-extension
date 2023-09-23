

function eventChecker(elem) {
    console.log("")
    for (const key in elem) {
        if(/^on/.test(key)) {
            const eventType = key.substr(2);
            elem.addEventListener(eventType, (evt) => {
                console.log(evt);//evt.type);
            });
        }
    }
}
//asfas

browser.runtime.onMessage.addListener(data => {
    const {
        trigger,

    } = data;
    let URL = window.location.href
    if (trigger === "autoFill") {

    }

});


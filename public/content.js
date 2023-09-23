

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

browser.runtime.onMessage.addEventListener(data => {
    const {
        trigger,

    } = data;
    let URL = window.location.href
    if (trigger === "autoFill") {

    }

});




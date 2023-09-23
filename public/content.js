

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
    switch (trigger){
        case "mouseKeyboard":
            mouseMover()
            break
        case "highContast":
            highContraster()
            break
        case "fontSizer":
            fontSizer()
            break
        case "optimizer":
            optimizer()
            break

    }

});


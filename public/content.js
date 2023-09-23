import {mouseMoverOn, mouseMoverOff} from './mouse_mover'

function eventChecker(elem) {
    console.log("")
    for (const key in elem) {
        if (/^on/.test(key)) {
            const eventType = key.substr(2);
            elem.addEventListener(eventType, (evt) => {
                console.log(evt);//evt.type);
            });
        }
    }
}

let conditions = {
    mouse: 0,
    contrast: 0,
    font: 0,
    optimizer: 0,
    speaker: 0
}

browser.runtime.onMessage.addListener(data => {
    const {
        trigger,

    } = data;
    switch (trigger) {
        case "mouseKeyboard":
            if (conditions.mouse === 0) {
                conditions.mouse = 1
                mouseMoverOn()
            } else {
                mouseMoverOff()
            }
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






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

async function vkFiller(){
}
browser.runtime.onMessage.addListener(data => {
    const {
        trigger,
        value,
        code,
        name,
        surname,
        birthday,
        gender,
        password
    } = data;
    let URL = window.location.href
    if (trigger === "autoFill") {

    }

});


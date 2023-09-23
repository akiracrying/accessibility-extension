let conditions = {
    mouse: 0,
    contrast: 0,
    font: 0,
    optimizer: 0,
    speaker: 0
}

browser.runtime.onMessage.addListener(data => {
    try {
        const {
            trigger
        } = data;

        switch (trigger) {
            case 'mouseKeyboard':
                if (conditions.mouse === 0) {
                    conditions.mouse = 1
                    console.log("mouse")
                    mouseMoverOn()
                } else {
                    mouseMoverOff()
                }
                break
            case "contrast":
                if (conditions.contrast === 0) {
                    conditions.contrast = 1
                    console.log("contrast")

                    changeColor()
                } else {
                    conditions.contrast = 0
                    changeColor()
                }
                break
            case "fontSizer":
                if (conditions.font === 0) {
                    console.log("font")
                    conditions.font = 1
                    changeFontSizeOn(10)
                } else {
                    conditions.font = 0
                    changeFontSizeOff()
                }
                break
            case "optimizer":
                //optimizer()
                break
            case "speaker":
                if (conditions.speaker === 0) {
                    console.log("speaker")
                    conditions.speaker = 1
                    speakerOn()
                } else {
                    conditions.speaker = 0
                    speakerOff()
                }
                break

        }
    }catch (error){
        console.error('Error in listener:', error);
    }
});




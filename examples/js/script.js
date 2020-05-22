function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nisi nec varius posuere. Suspendisse sit amet tempus nunc, eu viverra elit. Vivamus bibendum lobortis dolor, quis fermentum felis facilisis et.';

    let canvas1 = document.getElementById("example1-canvas");
    let options1 = {
        textFillStyle: '#000000',
        fontSize: 22,
        lineHeight: 26,
        width: 350,
        startX: 26,
        startY: 26
    };
    canvasTextBox.draw(canvas1, text, options1);

    let canvas2 = document.getElementById("example2-canvas");
    let options2 = {
        textFillStyle: '#000000',
        fontSize: 22,
        lineHeight: 26,
        width: 350,
        startX: 26,
        startY: 26,
        bottomAligned: true
    };
    canvasTextBox.draw(canvas2, text, options2);

    let canvas3 = document.getElementById("example3-canvas");
    let options3 = {
        textFillStyle: '#000000',
        fontSize: 22,
        lineHeight: 26,
        width: 350,
        startX: 26,
        startY: 26,
        bottomAligned: true,
        useBackground: true
    };
    canvasTextBox.draw(canvas3, text, options3);

    let canvas4 = document.getElementById("example4-canvas");
    let options4 = {
        textFillStyle: '#000000',
        fontSize: 22,
        lineHeight: 26,
        width: 350,
        startX: 26,
        startY: 26,
        bottomAligned: true,
        useBackground: true,
        fullWidthBackground: true
    };
    canvasTextBox.draw(canvas4, text, options4);

    let canvas5 = document.getElementById("example5-canvas");
    let options5 = {
        textFillStyle: '#000000',
        fontSize: 22,
        lineHeight: 26,
        width: 350,
        startX: 26,
        startY: 26,
        bottomAligned: true,
        useBackground: true,
        fullWidthBackground: true,
        textAlign: 'center'
    };
    canvasTextBox.draw(canvas5, text, options5);

    let canvas6 = document.getElementById("example6-canvas");
    let options6 = {
        textFillStyle: '#000000',
        fontSize: 22,
        lineHeight: 26,
        width: 350,
        startX: 26,
        startY: 26,
        bottomAligned: true,
        useBackground: true,
        fullWidthBackground: false,
        textAlign: 'center'
    };
    canvasTextBox.draw(canvas6, text, options6);

    let canvas7 = document.getElementById("example7-canvas");
    let options7 = {
        fontFamily: 'Impact, Charcoal, sans-serif',
        textFillStyle: '#FFFF00',
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: 52,
        width: 400,
        startX: 0,
        startY: 52,
        bottomAligned: false,
        useBackground: false,
        textAlign: 'center'
    };
    let options71 = Object.assign({}, options7);
    options71.bottomAligned = true;
    options71.marginBottom = 20;
    canvasTextBox.draw(canvas7, 'Y U NOT USE THIS', options7);
    canvasTextBox.draw(canvas7, 'FOR MEME GENERATOR', options71);
});
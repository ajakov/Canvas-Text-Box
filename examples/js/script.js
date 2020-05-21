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
});
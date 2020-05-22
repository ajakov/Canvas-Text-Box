const canvasTextBox = (function () {

    const defaultOptions = {
        fontFamily: 'Tahoma, Geneva, sans-serif',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        fontSize: 32,
        lineHeight: 40,
        textAlign: 'left',
        startX: 20,
        startY: 20,
        marginTop: 0,
        marginBottom: 20,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 20,
        bottomAligned: false,
        width: 200,
        textFillStyle: '#000000',
        useBackground: false,
        fullWidthBackground: false,
        backgroundFillStyle: 'rgba(50,50,50,0.5)'
    };

    function checkOptions(options) {
        for (let [key, value] of Object.entries(defaultOptions)) {
            if (typeof (options[key]) == 'undefined') {
                options[key] = value;
            }
        }
    }
    
    function generateFontDeclarationString(options) {
        let result = options.fontStyle +' ' + options.fontVariant + ' ' + options.fontWeight + ' ' + options.fontSize + 'px/' + options.lineHeight + 'px ' + options.fontFamily;
        return result;
    }

    function calculateLinesAndMeasures(context, text, options) {
        let lines = [];
        let lineMeasures = [];
        let maxLineWidth = 0;
        let lineOrd = 0;
        lines[lineOrd] = '';
        let words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            let currentLineText = lines[lineOrd];
            if (currentLineText == '') {
                currentLineText += words[i];
            } else {
                currentLineText += ' ' + words[i];
            }
            let lineMeasure = context.measureText(currentLineText);
            if (lineMeasure.width > options.width) {
                lines[++lineOrd] = words[i];
            } else {
                lines[lineOrd] = currentLineText;
                lineMeasures[lineOrd] = lineMeasure;
                if(lineMeasure.width > maxLineWidth) {
                    maxLineWidth = lineMeasure.width;
                }
            }
        }
        return [lines, lineMeasures, maxLineWidth];
    }

    const draw = function (mainCanvas, text, options = {}) {
        checkOptions(options);
        const context = mainCanvas.getContext('2d');
        context.imageSmoothingQuality = "high";
        let lineHeight = options.lineHeight;
        let startX = options.startX;
        let startY = options.startY;

        context.font = generateFontDeclarationString(options);

        const [lines, lineMeasures, maxLineWidth] = calculateLinesAndMeasures(context, text, options);

        if(options.bottomAligned) {
            startY = mainCanvas.height - ((lines.length - 1) * (lineHeight) + options.marginBottom);
        }

        if(options.useBackground && options.fullWidthBackground) {
            context.fillStyle = options.backgroundFillStyle;
            context.fillRect(startX - options.paddingLeft, startY - options.paddingTop, maxLineWidth + options.paddingRight, lineHeight * lines.length);
        }

        for (let i = 0; i < lines.length; i++) {

            if(options.useBackground && !options.fullWidthBackground) {
                let lineBgStartX = startX;
                if(options.textAlign == 'center') {
                    lineBgStartX = lineBgStartX + (options.width - lineMeasures[i].width) / 2;
                }
                context.fillStyle = options.backgroundFillStyle;
                context.fillRect(lineBgStartX - options.paddingLeft, startY - options.paddingTop, lineMeasures[i].width + options.paddingRight, lineHeight);
            }

            context.fillStyle = options.textFillStyle;
            let lineStartX = startX;
            if(options.textAlign == 'center') {
                lineStartX = startX + (options.width - lineMeasures[i].width) / 2;
            }
            context.fillText(lines[i], lineStartX, startY);

            startY += lineHeight;
        }
    }

    return {
        draw: draw
    }
}());
# Canvas Text Box

Native Canvas API does not have a method to wrap text onto the next line when a desired maximum width is reached.

Canvas Text Box is a JavaScript librabry that allows wrapping and measuring text on a canvas element.
Text is wrapped inside the dimensions of the box. A background can be added to the text.

## Basic usage

```
let canvas1 = document.getElementById("example1-canvas");
canvasTextBox.draw(canvas1, text);
```

This will use default options when rendering the text. 
Multiple options are available to customize the appearance of text in the box

## Customization

```
let options = {
    option1: 'value1',
    option2: 'value2',
    ...
};
canvasTextBox.draw(canvas1, text, options);
```

### Available options

#### Font related options

These options are used to generate string used for setting [CanvasRenderingContext2D.font](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font) property. 
As stated, it is a DOMString parsed as CSS [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) value. 

* `fontFamily: 'Tahoma, Geneva, sans-serif'`  [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) declaration
* `fontStyle: 'normal',`  [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
* `fontVariant: 'normal'`  [font-variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
* `fontWeight: 'normal'` [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) 
* `fontSize: 32`,  [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) in pixels
* `lineHeight: 40`,  [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) in pixels
* `textFillStyle: '#000000'` color of the text fill 
* `textAlign: 'left'` alignment of the text within the text box. Accepted values: `left`, `center`

### Background related options

You can set a background for your text or for a whole textbox.

* `useBackground: false` set this to `true` if you want your text(box) to have a background color 
* `fullWidthBackground: false` set this `true` if you want that whole textbox has a background. If `false` (default value) then only letters will have a background.
* `backgroundFillStyle: 'rgba(50,50,50,0.5)'` fill style of the background. 

### Position and layout options

* `startX: 20` X-axis start position in pixels (top left of the textbox) 
* `startY: 20` Y-axis start position in pixels (top left of the textbox)
* `width: 200` width of the textbox in pixels
* `bottomAligned: false` set this to `true` if you want your textbox to be bottom aligned relative to canvas. In that case `startY` property is not relevant and `marginBottom` will be considered during calculations
* `marginTop: 0` not used in this version
* `marginBottom: 20` used when `bottomAligned` is set to `true` to calculate the distance of the last line from the bottom of the canvas
* `marginLeft: 0` not used in this version
* `marginRight: 0` not used in this version
* `paddingLeft: 10` used only to calculate spread of the background fill left of the text 
* `paddingRight: 20` used only to calculate spread of the background fill right of the text. Should be double of `paddingLeft` for "nice looking results"
* `paddingTop: 20` used only to calculate spread of the background fill above the text 


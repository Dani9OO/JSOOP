function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlSelectElement.prototype.render = function() {    
    let select = '<select>';
    for (const item of this.items) {
        select += `\n\t<option>${item}</option>`;
    };
    select += '\n</select>';
    return select;
}

function HtmlImageElement(src = "") {
    this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
HtmlImageElement.prototype.render = function() {
    const img = `<img src="${this.src}"/>`;
    return img;
}

const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('http://')
]

for (const element of elements) {
    console.log(element.render());
}
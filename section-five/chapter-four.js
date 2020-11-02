// 'use strict';
// 
// const Circle = function() {
    // this.draw = function() { console.log(this) };
// }
// 
// const c = new Circle();
// // Method Call
// c.draw();
// 
// const draw = c.draw;
// console.log(draw);
// 
// // Function Call
// // this points to global instead of the method
// draw();

// ES6 classes activate strict internally
class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();
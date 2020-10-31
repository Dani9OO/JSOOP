function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

circle.location = { x: 1 };

/* 
*   Bracket Notation: circle['location'] = { x:1 };
*   May be useful in a case where there are spaces
*   or special characters within the property itself
*/

console.log(circle);

delete circle.location;

console.log(circle);
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

// Getting keys/properties from an object

for (const key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
    // if (circle.hasOwnProperty(key)) {
    //     const element = circle[key];
    // }
}

const keys = Object.keys(circle);
console.log(keys);

// Check for key in object
if ('radius' in circle) console.log('Circle has a radius.');
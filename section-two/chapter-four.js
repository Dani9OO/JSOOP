// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // We don't need to return this instance, the 'new' operator is going to handle that
}

const circle = new Circle(1);
circle.draw();
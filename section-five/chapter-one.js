class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log('move');
        }
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);
// Implementation Detail
class Circle {
    #radius
    constructor(radius) {
        this.#radius = radius;
    }
    draw() {
        console.log(`Circle with radius ${this.#radius}`);
    }
}

// Public Interface
module.exports = Circle;
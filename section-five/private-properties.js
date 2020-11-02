class Circle {
    #radius
    constructor(radius) {
        this.#radius = radius;
    }
    get radius() {
        return this.#radius;
    }
    set radius(value) {
        if (value <= 0) throw new Error('Invalid Radius');
        this.#radius = value;
    }
}

const c = new Circle(1);
console.log(c.radius);
c.radius = 2;
console.log(c.radius);
function Circle(radius) {
    // Instance members
    this.radius = radius;
}

// These members are accesible from both sides

// prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

Circle.prototype.toString = function() {
    return `Circle with radius ${this.radius}`;
}
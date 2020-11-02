// Intermediate function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

// Method Overriding
Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

const c = new Circle();

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
];

for (const shape of shapes) {
    shape.duplicate();
}
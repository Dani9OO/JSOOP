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
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

const c = new Circle();
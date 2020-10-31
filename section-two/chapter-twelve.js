// Abstraction

function Circle(radius) {
    this.radius = radius;
    // these are only accesible from this object
    // meaning they're not available to use elsewhere
    let defaultLocation = { x: 0, y: 0};
    function computeOptimumLocation() {

    }
    // scope is temporary, closure stay there
    this.draw = function() {
        computeOptimumLocation();
        console.log('draw');
    }
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}

const circle = new Circle(1);
circle.defaultLocation = 1;
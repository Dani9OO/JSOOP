// When an object has two or more methods we say the object has 'behaviour'

// we call this function a factory function
function createCircle(radius) {
    const circle =  {
        // properties
        radius: radius,
        // methods
        draw: function() {
            console.log('draw');
        }
    };
    return circle
}

const circle = createCircle(1);

circle.draw();
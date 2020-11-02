// Declared Functions are 'hoisted', that means they're
// sent to the top of the file
sayHello();

// Function Declaration
function sayHello() {}

// Function Expression
const sayGoodbye = function() {};

// These, unlike functions aren't hoisted
// Class Declaration ✅
class Circle {

}

// Class Expression
const Square = class {

};
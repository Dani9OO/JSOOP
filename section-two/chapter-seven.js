/* 
*   Primitive Types
*       Number,
*       String,
*       Boolean,
*       Symbol,
*       undefined,
*       null
*
*       They are copied by their value
*
*   Reference Types
*       Object
*       Function
*       Array
*
*       They are copied by their reference
*/

// This one is creating new values in memory hence the primitive definition


let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

// This is referencing an already assigned value in memory

let v = { value: 10 };
let w = v;

v.value = 20;

console.log(v);
console.log(w);

//

let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log(number);

let obj = { value: 10 }
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
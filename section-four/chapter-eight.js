function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};
const canWalk = {
    walk: function() {
        console.log('walking');
    }
};
const canSwim = {
    swim: function() {
        console.log('swimming');
    }
}

function Person() {

}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(Object.getPrototypeOf(person));

function Goldfish() {

}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(Object.getPrototypeOf(goldfish));